const testNodeCallback = () => {
    console.log(`This is node`);
}

const testEdgeCallback = (edgeInfo) => {
    console.log(`This is edge from ${edgeInfo.fromNode.id} to ${edgeInfo.toNode.id}`);
}

const chooseRandomDesignPatternTypeQuestion = (nodeInfo) => {
}

const additionalInfo = (diagramURL, pseudoCode) => {
    return {
        diagram: diagramURL, 
        pseudoCode: pseudoCode
    };
}

// TODO: put in real questions, answers
const graphJSON = {
    nodes: [
        {id: 0, data: "Choose random question",      action: testNodeCallback, end: false},

        // NOTE: CREATIONAL PATTERN
        {id: 1, data: "Do your problem involves creating new instances of objects?", action: testNodeCallback, end: false},

        {id: 10, data: "Do you need to create objects that belong to related families or groups? Is it important for you to ensure that objects created are compatible with each other?", action: testNodeCallback, end: false},
        {id: 11, data: "Do you want to separate the process of constructing a complex object from its final representation?Is it necessary to create different representations of the same construction process?", action: testNodeCallback, end: false},
        {id: 12, data: "Do you need to create instances of several related classes that share a common interface or base class?Is it crucial for you to delegate the instantiation logic to subclasses?", action: testNodeCallback, end: false},
        {id: 13, data: "Do you need to create new objects by copying existing ones? Is it essential to have fully initialized instances that can be cloned?", action: testNodeCallback, end: false},
        {id: 14, data: "Do you need to ensure that only one instance of a class exists throughout the application?Is it important for you to provide a global point of access to this instance?", action: testNodeCallback, end: false},


        {id: 100, data: "Abstract Factory", action: () => additionalInfo("/abstract-factory-diagram.png"), end: true},
        {id: 101, data: "Builder", action: () => additionalInfo("/builder-diagram.png"), end: true},
        {id: 102, data: "Factory Method", action: () => additionalInfo("/factory-method-diagram.png"), end: true},
        {id: 103, data: "Prototype", action: () => additionalInfo("/prototype-diagram.png"), end: true},
        {id: 104, data: "Singleton", action: () => additionalInfo("/singleton-diagram.png"), end: true},


        // NOTE: STRUCTURAL PATTERN 
        {id: 2, data: "Do your problem involves combining different objects together?", action: testNodeCallback, end: false},

        {id: 20, data: "Do you need to integrate systems with incompatible interfaces?Do you have classes that need to work together but have different interfaces?", action: testNodeCallback, end: false},
        {id: 21, data: "Do you want to separate the abstraction from the implementation? Do you need to vary the implementation independently from the client code?", action: testNodeCallback, end: false},
        {id: 22, data: "Do you need to represent part-whole hierarchies? Do you require uniform treatment for both individual objects and compositions of objects?", action: testNodeCallback, end: false},
        {id: 23, data: "Do you need to add responsibilities to objects at runtime? Do you want to avoid creating subclasses for every possible combination of responsibilities?", action: testNodeCallback, end: false},
        {id: 24, data: " **Do you want to simplify the interaction with a complex subsystem? **Do you need a unified interface to a set of interfaces in a subsystem? ", action: testNodeCallback, end: false},
        {id: 25, data: " Do you need to support a large number of similar objects efficiently? Do you want to minimize memory usage by sharing objects? ", action: testNodeCallback, end: false},
        {id: 26, data: " Do you need to control access to another object? Do you want to add a level of indirection to manage access to an object?", action: testNodeCallback, end: false},

        // answers
        {id: 200, data: "Adapter", action: () => additionalInfo("/adapter-diagram.png"), end: true},
        {id: 201, data: "Bridge", action: () => additionalInfo("/bridge-diagram.png"), end: true},
        {id: 202, data: "Composite", action: () => additionalInfo("/composite-diagram.png"), end: true},
        {id: 203, data: "Decorator", action: () => additionalInfo("/decorator-diagram.png"), end: true},
        {id: 204, data: "Facade", action: () => additionalInfo("/facade-diagram.png"), end: true},
        {id: 205, data: "Flyweight", action: () => additionalInfo("/flyweight-diagram.png"), end: true},
        {id: 206, data: "Proxy", action: () => additionalInfo("/proxy-diagram.png"), end: true},

        // NOTE: BEHAVIORAL PATTERN
        {id: 3, data: "Do your problem related to how different objects talk to each other ? Do your problem related to how object should behave in a certain scenarios ?", action: testNodeCallback, end: false},
        {id: 30, data: " Do you need to handle a request through a series of handlers? Do you want to decouple the sender of a request from its receiver? ", action: testNodeCallback, end: false},
        {id: 31, data: " **Do you need to parameterize objects with operations? Do you want to queue or log requests, or support undoable operations? ", action: testNodeCallback, end: false},
        {id: 32, data: " Do you need to interpret sentences in a language? Do you have a grammar that needs to be evaluated? ", action: testNodeCallback, end: false},
        {id: 33, data: " Do you need to access elements of a collection without exposing its underlying representation? Do you want to provide a uniform way to traverse different collections? ", action: testNodeCallback, end: false},
        {id: 34, data: " Do you need to reduce the communication complexity between multiple objects or classes? Do you want to centralize control logic? ", action: testNodeCallback, end: false},

        {id: 35, data: " Do you need to save and restore an object's state? Do you want to implement undo/redo functionality? ", action: testNodeCallback, end: false},

        {id: 36, data: " Do you need to notify multiple objects about changes in another object? Do you want to ensure that objects are in sync without tight coupling? ", action: testNodeCallback, end: false},

        {id: 37, data: " Do you need to change the behavior of an object based on its state? Do you want to avoid using numerous conditional statements? ", action: testNodeCallback, end: false},
        
        {id: 38, data: " Do you need to select an algorithm at runtime? Do you want to define a family of algorithms and make them interchangeable? ", action: testNodeCallback, end: false},

        {id: 39, data: " Do you need to define the skeleton of an algorithm in a method, deferring some steps to subclasses? Do you want to allow subclasses to redefine certain steps of an algorithm without changing its structure? ", action: testNodeCallback, end: false},

        {id: 391, data: " Do you need to add operations to classes without changing them? Do you want to apply operations across a set of heterogeneous objects? ", action: testNodeCallback, end: false},

        {id: 300, data: "Chain of Responsibility", action: () => additionalInfo("chain-of-responsibility-diagram.png"), end: true},
        {id: 301, data: "Command", action: () => additionalInfo("command-diagram.png"), end: true},
        {id: 302, data: "Interpreter", action: () => additionalInfo("interpreter-diagram.png"), end: true},
        {id: 303, data: "Iterator", action: () => additionalInfo("iterator-diagram.png"), end: true},
        {id: 304, data: "Mediator", action: () => additionalInfo("mediator-diagram.png"), end: true},
        {id: 305, data: "Memento", action: () => additionalInfo("memento-diagram.png"), end: true},
        {id: 306, data: "Observer", action: () => additionalInfo("observer-diagram.png"), end: true},
        {id: 307, data: "State", action: () => additionalInfo("state-diagram.png"), end: true},
        {id: 308, data: "Strategy", action: () => additionalInfo("strategy-diagram.png"), end: true},
        {id: 309, data: "Template Method", action: () => additionalInfo("template-method-diagram.png"), end: true},
        {id: 310, data: "Visitor", action: () => additionalInfo("visitor-diagram.png"), end: true},

        {id: -1, data: "Failed: What the fuck are you thinking inside your head ??", action: testNodeCallback, end: false},
    ],

    edges: [
        {fromId: 0, toId: 1, data: "The system choose type A questions", action: testEdgeCallback, label:"randomChoice"},

        {fromId: 1, toId: 10, data: "Question A YES", action: testEdgeCallback, label:"YES"},
        {fromId: 1, toId: 2, data: "Question A NO", action: testEdgeCallback, label:"NO"},

        {fromId: 10, toId: 100, data: "Question A1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 10, toId: 11, data: "Question A1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 11, toId: 101, data: "Question A2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 11, toId: 12, data: "Question A2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 12, toId: 102, data: "Question A3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 12, toId: 13, data: "Question A3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 13, toId: 103, data: "Question A3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 13, toId: 14, data: "Question A3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 14, toId: 104, data: "Question A3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 14, toId: -1, data: "Question A3 NO", action: testEdgeCallback, label:"NO"},


        /// 
        {fromId: 0, toId: 2, data: "The system choose type B questions", action: testEdgeCallback, label:"randomChoice"},
        {fromId: 2, toId: 20, data: "Question B YES", action: testEdgeCallback, label:"YES"},
        {fromId: 2, toId: 3, data:  "Question B NO", action: testEdgeCallback, label:"NO"},

        {fromId: 20, toId: 200, data: "Question B1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 20, toId: 21, data:  "Question B1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 21, toId: 201, data: "Question B2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 21, toId: 22, data:  "Question B2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 22, toId: 202, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 22, toId: 23, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 23, toId: 203, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 23, toId: 24, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 24, toId: 204, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 24, toId: 23, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 25, toId: 205, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 25, toId: 26, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 26, toId: 206, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 26, toId: -1, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},



        /// 
        {fromId: 0, toId: 3, data: "The system choose type C questions", action: testEdgeCallback, label:"randomChoice"},
        {fromId: 3, toId: 30, data: "Question C YES", action: testEdgeCallback, label:"YES"},
        {fromId: 3, toId: -1, data:  "Question C NO", action: testEdgeCallback, label:"NO"},

        {fromId: 30, toId: 300, data: "Question C1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 30, toId: 31, data:  "Question C1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 31, toId: 301, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 31, toId: 32, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 32, toId: 302, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 32, toId: 33, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 33, toId: 303, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 33, toId: 34, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 34, toId: 304, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 34, toId: 35, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},



        {fromId: 35, toId: 305, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 35, toId: 36, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 36, toId: 306, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 36, toId: 37, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 37, toId: 307, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 37, toId: 38, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 38, toId: 308, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 38, toId: 39, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 39, toId: 309, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 39, toId: 391, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 391, toId: 310, data: "Question C3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 391, toId: -1, data:  "Question C3 NO", action: testEdgeCallback, label:"NO"},

        // this part seems like it doesn't work :v
        {fromId: -1, toId: 0, data:  "Let's do that all over again", action: testEdgeCallback, label:"Redo"},
    ]
};

module.exports = {
    graphJSON
};
