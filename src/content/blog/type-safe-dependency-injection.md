---
title: 'Building a Type-Safe Dependency Injection Container in TypeScript'
description: 'How to build a simple, type-safe composition root that eliminates scattered instantiation, improves testability, and provides compile-time safety without the complexity of a full DI framework.'
pubDate: 2026-02-10
tags: ['TypeScript', 'architecture', 'dependency-injection']
---

You know that feeling when you open a route handler and see this at the top?

```typescript
const userRepo = new PrismaUserRepository();
const roleRepo = new PrismaRoleRepository();
const passwordHasher = new BcryptPasswordHasher();
const emailService = new SendGridEmailService(process.env.SENDGRID_API_KEY);
const userService = new UserManagementService(
  userRepo,
  roleRepo,
  passwordHasher,
  emailService
);
```

And then you see the _exact same thing_ in the next route. And the next one. Each route spinning up its own instances, each connection to the database getting created fresh, each service constructing its dependencies all over again.

There had to be a better way. So I built a composition root.

## What's a Composition Root, Anyway?

A composition root is basically the "one place to rule them all" for creating your application's objects. Instead of scattered `new Whatever()` calls throughout your codebase, you have a single location responsible for:

1. **Knowing how to create each dependency**
2. **Wiring dependencies together correctly**
3. **Ensuring you reuse instances** (where appropriate)

Think of it as a fancy factory that knows how to build everything in your app and remembers what it's already built.

## The Problem With Manual Instantiation

When every route creates its own instances, you get:

- **Repetition**: Same construction code everywhere
- **Waste**: Creating duplicate instances (especially expensive ones like DB connections)
- **Fragility**: Change a constructor signature? Update it in 47 places
- **Testing headaches**: Mocking dependencies requires reaching into internals

I know what you're thinking: "why didn't you just pull in a DI framework?" Fair question. I wanted something simple, type-safe, and transparent without the learning curve or magic of a full framework.

## Enter: The Container

The core abstraction is dead simple—a generic `Container` class that:

```typescript
class Container<TRegistry> {
  get<K extends keyof TRegistry>(key: K): TRegistry[K] {
    // Lazy creation + memoization magic happens here
  }
}
```

That `TRegistry` type parameter is the secret sauce. It's an interface that maps string keys to their actual types:

```typescript
interface AppRegistry {
  roleRepository: IRoleRepository;
  roleManagementService: RoleManagementService;
  passwordHasher: IPasswordHasher;
  // ... all your dependencies
}
```

Now when you call `container.get("roleManagementService")`, TypeScript _knows_ you're getting back a `RoleManagementService`. Try to get `"tyop"` and you'll get a compile error. No magic strings, no runtime surprises.

## Factory Functions: Where the Magic Happens

Each dependency gets a factory function that knows how to create it:

```typescript
// Simple case - no dependencies
export const roleRepositoryFactory: Factory<IRoleRepository> = () => {
  const {
    PrismaRoleRepository,
  } = require('@/adapters/database/PrismaRoleRepository');
  return new PrismaRoleRepository();
};

// Complex case - has dependencies
export const roleManagementServiceFactory: Factory<RoleManagementService> = (
  c
) => {
  return new RoleManagementService(
    c.get('roleRepository') // Container resolves this
  );
};
```

Notice how the service factory _receives the container_ and uses it to get dependencies. This is dependency resolution in action—the container recursively builds the dependency graph as needed.

## What This Looks Like in Practice

**Before** (in a route handler):

```typescript
import { PrismaRoleRepository } from '@/adapters/database/PrismaRoleRepository';
import { RoleManagementService } from '@/lib/application/services/RoleManagementService';

const repo = new PrismaRoleRepository();
const service = new RoleManagementService(repo);
await service.createRole(data);
```

**After**:

```typescript
import { container } from '@/lib/composition';

const service = container.get('roleManagementService');
await service.createRole(data);
```

Three imports become one. Manual wiring becomes automatic. And if `RoleManagementService` later needs another dependency? I update one factory function, not every call site.

## Testing Gets Way Easier

This is where the pattern really shines. In tests, you can override specific dependencies:

```typescript
const container = createTestContainer();

const mockRoleRepo = {
  findById: jest.fn().mockResolvedValue({ id: '1', name: 'Admin' }),
  // ... other methods
};

container.overrideInstance('roleRepository', mockRoleRepo);
const service = container.get('roleManagementService');

// Service uses the mock repo, but all other dependencies are real
```

No need for proxyquire, no reaching into module caches, no import gymnastics. Just tell the container what to use and it handles the rest.

## Trade-offs and Gotchas

Nothing's perfect. Here are the honest cons:

**More upfront setup**: You have to write factory functions for everything. It's not _hard_, but it's not nothing.

**Indirection**: Following the code path means jumping through factories. Some find this cleaner, some find it harder to trace.

**Singleton by default**: Everything's cached after first use. If you _want_ fresh instances, you need to be explicit about it.

**Require() calls in factories**: Notice the `require()` inside factories? That's to avoid circular dependencies and enable code splitting. It's a bit ugly, but it works.
