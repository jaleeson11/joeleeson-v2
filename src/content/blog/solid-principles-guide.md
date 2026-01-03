---
title: 'Understanding SOLID Principles: A Guide to Better Object-Oriented Design'
description: 'The five fundamental guidelines for object-oriented programming that help developers create more maintainable, flexible, and scalable software.'
pubDate: 2026-01-03
tags: ['OOP', 'design-patterns', 'software-engineering']
---

The SOLID principles are five fundamental guidelines for object-oriented programming that help developers create more maintainable, flexible, and scalable software. Introduced by Robert C. Martin (Uncle Bob), these principles have become cornerstones of good software design. Let's explore each principle with practical examples in PHP.

## Single Responsibility Principle (SRP)

The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility. When a class tries to do too much, changes to one aspect of its functionality can inadvertently break others.

Consider a poor example where a class handles multiple responsibilities:

```php
class User {
    private $name;
    private $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function saveToDatabase() {
        // Database logic here
        // INSERT INTO users...
    }

    public function sendWelcomeEmail() {
        // Email sending logic here
        // mail($this->email, ...);
    }

    public function generateReport() {
        // Report generation logic here
        // return PDF or HTML report
    }
}
```

This User class violates SRP because it handles user data, database operations, email sending, and report generation. If we need to change how emails are sent, we have to modify the User class, even though email sending isn't really a core user responsibility.

A better approach separates these concerns:

```php
class User {
    private $name;
    private $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function getName() {
        return $this->name;
    }

    public function getEmail() {
        return $this->email;
    }
}

class UserRepository {
    public function save(User $user) {
        // Database logic here
        // INSERT INTO users...
    }
}

class EmailService {
    public function sendWelcomeEmail(User $user) {
        // Email sending logic here
        // mail($user->getEmail(), ...);
    }
}

class ReportGenerator {
    public function generateUserReport(User $user) {
        // Report generation logic here
        // return PDF or HTML report
    }
}
```

Now each class has a single, well-defined responsibility, making the code easier to understand, test, and modify.

## Open/Closed Principle (OCP)

The Open/Closed Principle states that software entities should be open for extension but closed for modification. In other words, you should be able to add new functionality without changing existing code.

Here's a violation of OCP:

```php
class PaymentProcessor {
    public function processPayment($paymentType, $amount) {
        if ($paymentType == "credit_card") {
            // Process credit card payment
            echo "Processing $" . $amount . " via credit card";
        } elseif ($paymentType == "paypal") {
            // Process PayPal payment
            echo "Processing $" . $amount . " via PayPal";
        } elseif ($paymentType == "bitcoin") {
            // Process Bitcoin payment
            echo "Processing $" . $amount . " via Bitcoin";
        }
    }
}
```

Every time we want to add a new payment method, we must modify the PaymentProcessor class. This approach is fragile and violates OCP.

A better design uses polymorphism:

```php
interface PaymentMethod {
    public function process($amount);
}

class CreditCardPayment implements PaymentMethod {
    public function process($amount) {
        echo "Processing $" . $amount . " via credit card";
    }
}

class PayPalPayment implements PaymentMethod {
    public function process($amount) {
        echo "Processing $" . $amount . " via PayPal";
    }
}

class BitcoinPayment implements PaymentMethod {
    public function process($amount) {
        echo "Processing $" . $amount . " via Bitcoin";
    }
}

class PaymentProcessor {
    public function processPayment(PaymentMethod $paymentMethod, $amount) {
        $paymentMethod->process($amount);
    }
}
```

Now we can add new payment methods by creating new classes that implement the PaymentMethod interface, without touching the PaymentProcessor class.

## Liskov Substitution Principle (LSP)

The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without breaking the application. Subtypes must be substitutable for their base types.

Here's a classic violation:

```php
class Bird {
    public function fly() {
        return "Flying high!";
    }
}

class Sparrow extends Bird {
    public function fly() {
        return "Sparrow flying!";
    }
}

class Penguin extends Bird {
    public function fly() {
        throw new Exception("Penguins can't fly!");
    }
}

// This code works fine with Sparrow
function makeBirdFly(Bird $bird) {
    echo $bird->fly();
}

$sparrow = new Sparrow();
makeBirdFly($sparrow); // Works fine

$penguin = new Penguin();
makeBirdFly($penguin); // Throws exception - LSP violated!
```

The problem is that Penguin violates the contract established by Bird. Code expecting a Bird assumes all birds can fly, but Penguin breaks this assumption.

A better design respects the actual capabilities:

```php
interface Bird {
    public function eat();
    public function move();
}

interface FlyingBird extends Bird {
    public function fly();
}

class Sparrow implements FlyingBird {
    public function eat() {
        return "Eating seeds";
    }

    public function move() {
        return "Moving around";
    }

    public function fly() {
        return "Sparrow flying!";
    }
}

class Penguin implements Bird {
    public function eat() {
        return "Eating fish";
    }

    public function move() {
        return "Swimming and waddling";
    }
}

function makeBirdFly(FlyingBird $bird) {
    echo $bird->fly();
}
```

Now the type system prevents us from passing a Penguin to makeBirdFly, and we can only pass birds that actually can fly.

## Interface Segregation Principle (ISP)

The Interface Segregation Principle states that clients should not be forced to depend on interfaces they don't use. It's better to have many specific interfaces than one general-purpose interface.

Here's a violation:

```php
interface Worker {
    public function work();
    public function eat();
    public function sleep();
}

class HumanWorker implements Worker {
    public function work() {
        echo "Human working";
    }

    public function eat() {
        echo "Human eating";
    }

    public function sleep() {
        echo "Human sleeping";
    }
}

class RobotWorker implements Worker {
    public function work() {
        echo "Robot working";
    }

    public function eat() {
        // Robots don't eat!
        throw new Exception("Robots don't eat");
    }

    public function sleep() {
        // Robots don't sleep!
        throw new Exception("Robots don't sleep");
    }
}
```

The RobotWorker is forced to implement methods it doesn't need, violating ISP.

A better approach segregates the interface:

```php
interface Workable {
    public function work();
}

interface Eatable {
    public function eat();
}

interface Sleepable {
    public function sleep();
}

class HumanWorker implements Workable, Eatable, Sleepable {
    public function work() {
        echo "Human working";
    }

    public function eat() {
        echo "Human eating";
    }

    public function sleep() {
        echo "Human sleeping";
    }
}

class RobotWorker implements Workable {
    public function work() {
        echo "Robot working";
    }
}
```

Now each class only implements the interfaces relevant to its capabilities.

## Dependency Inversion Principle (DIP)

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.

Here's a violation:

```php
class MySQLDatabase {
    public function connect() {
        echo "Connecting to MySQL";
    }

    public function getData() {
        return ["data from MySQL"];
    }
}

class UserService {
    private $database;

    public function __construct() {
        $this->database = new MySQLDatabase();
    }

    public function getUsers() {
        $this->database->connect();
        return $this->database->getData();
    }
}
```

UserService is tightly coupled to MySQLDatabase. If we want to switch to PostgreSQL or MongoDB, we'd have to modify UserService.

A better design uses dependency injection with abstractions:

```php
interface Database {
    public function connect();
    public function getData();
}

class MySQLDatabase implements Database {
    public function connect() {
        echo "Connecting to MySQL";
    }

    public function getData() {
        return ["data from MySQL"];
    }
}

class PostgreSQLDatabase implements Database {
    public function connect() {
        echo "Connecting to PostgreSQL";
    }

    public function getData() {
        return ["data from PostgreSQL"];
    }
}

class UserService {
    private $database;

    public function __construct(Database $database) {
        $this->database = $database;
    }

    public function getUsers() {
        $this->database->connect();
        return $this->database->getData();
    }
}

// Usage
$mysqlDb = new MySQLDatabase();
$userService = new UserService($mysqlDb);

// Easy to switch
$postgresDb = new PostgreSQLDatabase();
$userService = new UserService($postgresDb);
```

Now UserService depends on the Database abstraction, not a concrete implementation. We can easily swap database implementations without changing UserService.

## Conclusion

The SOLID principles work together to create code that is easier to maintain, test, and extend. While they may seem like extra work initially, following these principles pays dividends as your codebase grows. Start by applying them to new code, and gradually refactor existing code as you encounter it. With practice, these principles will become second nature, and you'll find yourself writing cleaner, more professional code.
