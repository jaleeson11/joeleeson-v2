---
title: 'Keeping Your Codebase Honest: Building a Linting Pipeline with Git Hooks'
description: 'How to enforce code quality automatically using git hooks—covering architectural boundaries, test coverage, type checking, and dead code detection.'
pubDate: 2026-02-05
tags: ['git', 'developer-experience', 'code-quality']
---

So here's the thing about code quality: everyone agrees it's important, but enforcing it consistently? That's where things get messy. You can have all the best intentions, write up the most comprehensive style guides, and even get everyone to nod along in sprint planning. But the moment developers are heads-down trying to ship a feature, those good intentions tend to... drift.

I recently set up a linting pipeline using git hooks for my team, and honestly, it's been a game-changer. We're now automatically enforcing architectural boundaries, checking test coverage, monitoring code complexity, and more—all before code even makes it to our remote repository. Here's what I learned along the way.

## The Problem We Were Trying to Solve

Like most teams, we had a laundry list of things we *wanted* to maintain:
- Respect our layered architecture (no reaching across boundaries)
- Keep test coverage above a reasonable threshold
- Prevent type errors from slipping through
- Remove dead code before it accumulates
- Maintain consistent code formatting
- Eliminate redundant or unhelpful comments

The traditional approach? Code reviews. And look, code reviews are great for catching logic issues and providing feedback on design decisions. But asking reviewers to manually check if every import respects architectural boundaries? That's a waste of everyone's time and attention.

## Enter Git Hooks

If you haven't played with git hooks before, they're basically scripts that Git runs at specific points in your workflow. We're using two:

- **pre-commit**: Runs before a commit is created—perfect for fast checks like linting
- **pre-push**: Runs before pushing to a remote repository—ideal for thorough validation

The beauty of git hooks is that they're local and fast. You get instant feedback right in your terminal, not 20 minutes later when CI fails.

## Our Setup: What We're Actually Checking

### 1. Architectural Boundaries

This was probably our biggest pain point. We have a fairly standard layered architecture (presentation → application → domain → infrastructure), and we kept finding domain layer code importing from the infrastructure layer. Not good.

We're using a custom linter that parses import statements and validates them against our architectural rules. If you try to commit code that violates the boundaries, you get a clear error message pointing out exactly which import is problematic.

```bash
❌ Architectural violation detected:
   File: src/domain/user/UserService.ts
   Import: src/infrastructure/database/UserRepository.ts

   Domain layer cannot depend on infrastructure layer.
   Consider using dependency inversion.
```

### 2. Test Coverage

We're not draconian about this—we're not requiring 100% coverage or anything. But we do enforce that new or modified files maintain at least 80% coverage. This prevents the gradual erosion of test coverage that happens when you're rushing to meet deadlines.

The hook runs your test suite with coverage reporting, focuses on the files you've changed, and blocks the commit if coverage drops below the threshold.

### 3. Type Checking

Before anything gets pushed, we run a full TypeScript type check. It's amazing how often you think everything is fine locally, only to discover you've got type errors lurking. Catching these before they hit CI saves everyone time.

### 4. Unused Code Detection

This one's been surprisingly valuable. We run a dead code detector that identifies unused exports, functions, and variables. It's easy for code to become obsolete as requirements change—someone removes a feature, but forgets to clean up the supporting functions. Over time, this cruft accumulates.

By catching unused code in the pre-push hook, we keep the codebase lean and make it easier for new developers to understand what's actually being used versus what's just hanging around.

### 5. Code Formatting and Redundant Documentation

In the pre-commit hook, ESLint handles both formatting and catching unhelpful comments. We use a plugin that flags redundant documentation—comments that just restate what the code does.

You've seen these:
```typescript
// Increment the counter
counter++;

// Get the user by ID
const user = getUserById(id);
```

These comments add zero value. They explain *what* the code does (which is already obvious) instead of *why* it does it. Our ESLint config catches these and encourages developers to either remove them or replace them with meaningful context about the business logic or design decisions.

## Implementation: The Technical Bits

We're using <a href="https://typicode.github.io/husky/" target="_blank" rel="noopener noreferrer">Husky</a> to manage our git hooks because it makes installation and sharing across the team trivial.

We split our checks between two hooks: pre-commit for fast feedback on style issues, and pre-push for the heavier validation.

### Pre-commit: Keep It Fast

Our `.husky/pre-commit` runs lint-staged for quick code quality checks:

```bash
#!/bin/sh
npx lint-staged
```

With this configuration:

```json
"lint-staged": {
  "*.{ts,tsx}": [
    "eslint --fix"
  ]
}
```

The beauty of lint-staged is it only runs on files you've actually changed, so this completes in a second or two.

### Pre-push: The Real Validation

Our `.husky/pre-push` file is where the magic happens:

```bash
#!/bin/sh

npm run type-check
npm run lint:deps
npm run lint:unused
npm run test:coverage
```

Simple and straightforward:

1. **Type checking first**: We run the TypeScript compiler to catch any type errors
2. **Architecture validation**: `lint:deps` checks that imports respect our architectural boundaries
3. **Dead code detection**: `lint:unused` finds unused exports and functions
4. **Test coverage**: Ensures our tests are still covering the code adequately

## The Gotchas and Lessons Learned

### 1. Speed Matters

We split our checks to keep things fast where it counts:

**Pre-commit** uses lint-staged to only check files you've actually changed, so it completes in 1-2 seconds. You barely notice it.

**Pre-push** runs the full suite (type-check, architecture, dead code, coverage), taking about 15-30 seconds. This feels perfectly reasonable when you're about to share your work with the team.

The key insight is that commit speed matters more than push speed. Developers commit constantly while working through a problem. They only push a few times a day. Optimizing for the frequent operation (commit) makes the workflow feel smooth.

### 2. Shared Hooks Are Critical

Git hooks are local by default, which means new team members don't get them automatically. We solved this with Husky, which installs the hooks when anyone runs `npm install`. Combined with lint-staged for the pre-commit hook, this means everyone on the team is running the same checks from day one.

## The Results

It's been a few weeks since we rolled this out, and the impact has been noticeable:

- **Better architecture adherence**: We haven't had a single architectural boundary violation make it to main since the hooks went live
- **Fewer code review cycles**: Reviewers can focus on logic and design instead of nitpicking formatting or catching import violations
- **Maintained test coverage**: Coverage has stayed consistently above our threshold, whereas it was gradually declining before
- **Less CI failure noise**: Our CI pipeline catches fewer issues because the hooks caught them first

The biggest win, though, is psychological. Developers get immediate feedback instead of waiting for CI or code review. It creates a tighter feedback loop that genuinely improves the quality of code being written, not just the quality of code being pushed.

---

*Have you implemented git hooks on your team? What checks do you run? I'd love to hear about your setup and what's worked (or hasn't worked) for you.*
