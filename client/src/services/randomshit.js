## 1. Object Creation Problem 
-> Question: Do your problem involves creating new instances of objects 

-> **CREATIONAL PATTERNS**:

+ 1.1. Create an instance for several families of classes
    -> Questions: 
        - Do you need to create objects that belong to related families or groups?
        and 
        - Is it important for you to ensure that objects created are compatible with each other?
        
    -> Abstract Factory 

+ 1.2. Separates object construction from its representation
    -> Questions: 
        - Do you want to separate the process of constructing a complex object from its final representation?
        and 
        - Is it necessary to create different representations of the same construction process?

    -> Builder

+ 1.3. Creates an instance of several derived classes
    -> Questions: 
        - Do you need to create instances of several related classes that share a common interface or base class?
        and 
        - Is it crucial for you to delegate the instantiation logic to subclasses?

    -> Factory Method

+ 1.4.  A fully initialized instance to be copied or cloned.
    -> Questions:
        - Do you need to create new objects by copying existing ones?
            and 
        - Is it essential to have fully initialized instances that can be cloned?
    -> Prototype

+ 1.5. A class of which only a single instance can exist.
    -> Questions: 
        - Do you need to ensure that only one instance of a class exists throughout the application?
        and 
        - Is it important for you to provide a global point of access to this instance?

    -> Singleton

## 2. Object composition Problem or the STRUCTURE OF CLASSES AND OBJECTS PROBLEM:

-> Questions: Do your problem involves combining different objects together?

-> **STRUCTURAL PATTERN**

+ 2.1. Match interfaces of different classes.
    -> Questions:
        Do you need to integrate systems with incompatible interfaces? 
        Do you have classes that need to work together but have different interfaces?
    -> Adapter

+ 2.2. Separates an object’s interface from its implementation.
    -> Questions: 
        Do you want to separate the abstraction from the implementation? 
        and 
        Do you need to vary the implementation independently from the client code?
    -> Bridge

+ 2.3. A tree structure of simple and composite objects.
    -> Questions: 
        Do you need to represent part-whole hierarchies? 
        Do you require uniform treatment for both individual objects and compositions of objects?
    -> Composite

+ 2.4. Add responsibilities to objects dynamically.
    -> Questions: 
        Do you need to add responsibilities to objects at runtime? 
        Do you want to avoid creating subclasses for every possible combination of responsibilities?

    -> Decorator

+ 2.5. A single class that represents an entire subsystem.
    -> Questions: 
        **Do you want to simplify the interaction with a complex subsystem?
        **Do you need a unified interface to a set of interfaces in a subsystem?

    -> Facade

+ 2.6. A fine-grained instance used for efficient sharing.
    -> Questions: 
        Do you need to support a large number of similar objects efficiently? 
        Do you want to minimize memory usage by sharing objects?

    -> Flyweight

+ 2.7. An object representing another object.
    -> Questions: 
        Do you need to control access to another object? 
        Do you want to add a level of indirection to manage access to an object?

    -> Proxy

## 3. Communication between objects
-> Questions: 
    Do your problem related to how different objects talk to each other ?
    Do your problem related to how object should behave in a certain scenarios ? 

-> **BEHAVIORAL PATTERNS**

+ 3.1. A way of passing a request between a chain of objects.
    -> Questions: 
        Do you need to handle a request through a series of handlers? 
        Do you want to decouple the sender of a request from its receiver?

    -> Chain of Responsibility

+ 3.2. Encapsulate a command request as an object.
    -> Questions: 
        **Do you need to parameterize objects with operations? 
        Do you want to queue or log requests, or support undoable operations?

    -> Command

+ 3.3. A way to include language elements in a program.
    -> Questions: 
        Do you need to interpret sentences in a language?
        Do you have a grammar that needs to be evaluated?

    -> Interpreter

+ 3.4. Sequentially access the elements of a collection.
    -> Questions: 
        Do you need to access elements of a collection without exposing its underlying representation? 
        Do you want to provide a uniform way to traverse different collections?

    -> Iterator

+ 3.5. Defines simplified communication between classes.
    -> Questions: 
        Do you need to reduce the communication complexity between multiple objects or classes? 
        Do you want to centralize control logic?

    -> Mediator

+ 3.6. Capture and restore an object's internal state.
    -> Questions: 
        Do you need to save and restore an object's state? 
        Do you want to implement undo/redo functionality?

    -> Memento

+ 3.7. A way of notifying change to a number of classes.
    -> Questions: 
        Do you need to notify multiple objects about changes in another object? 
        Do you want to ensure that objects are in sync without tight coupling?

    -> Observer

+ 3.8. Alter an object's behavior when its state changes.
    -> Questions: 
        Do you need to change the behavior of an object based on its state? 
        Do you want to avoid using numerous conditional statements?

    -> State

+ 3.9. Encapsulates an algorithm inside a class.
    -> Questions: 
        Do you need to select an algorithm at runtime? 
        Do you want to define a family of algorithms and make them interchangeable?

    -> Strategy

+ 3.10. Defer the exact steps of an algorithm to a subclass.
    -> Questions: 
        Do you need to define the skeleton of an algorithm in a method, deferring some steps to subclasses? 
        Do you want to allow subclasses to redefine certain steps of an algorithm without changing its structure?

    -> Template Method

+ 3.11. Defines a new operation to a class without change.
    -> Questions: 
        Do you need to add operations to classes without changing them? 
        Do you want to apply operations across a set of heterogeneous objects?

    -> Visitor
