const testNodeCallback = (nodeInfo) => {
    console.log(`This is node ${nodeInfo.id}`);
}

const testEdgeCallback = (edgeInfo) => {
    console.log(`This is edge from ${edgeInfo.fromNode.id} to ${edgeInfo.toNode.id}`);
}

const chooseRandomDesignPatternTypeQuestion = (nodeInfo) => {
}

const graphJSON = {
    nodes: [
        {id: 0, data: "Choose random question",      action: testNodeCallback, end: false},
        {id: 1, data: "Question: Is this type A ? ", action: testNodeCallback, end: false},
        {id: 2, data: "Question: Is this type B ?", action: testNodeCallback, end: false},
        {id: 3, data: "Question: Is this type C ?", action: testNodeCallback, end: false},

        {id: 4, data: "Question A1 detail: More detail on type A1 type?", action: testNodeCallback, end: false},
        {id: 5, data: "Question A2 detail: More detail on type A2 type?", action: testNodeCallback, end: false},
        {id: 6, data: "Question A3 detail: More detail on type A3 type?", action: testNodeCallback, end: false},


        {id: 7, data: "Answer: This is type A1", action: testNodeCallback, end: true},
        {id: 8, data: "Answer: This is type A2", action: testNodeCallback, end: true},
        {id: 9, data: "Answer: This is type A3", action: testNodeCallback, end: true},


        {id: 20, data: "Question B1 detail: More detail on type B1 type?", action: testNodeCallback, end: false},
        {id: 21, data: "Question B2 detail: More detail on type B2 type?", action: testNodeCallback, end: false},
        {id: 22, data: "Question B3 detail: More detail on type B3 type?", action: testNodeCallback, end: false},

        {id: 200, data: "Answer: This is type B1", action: testNodeCallback, end: true},
        {id: 201, data: "Answer: This is type B2", action: testNodeCallback, end: true},
        {id: 202, data: "Answer: This is type B3", action: testNodeCallback, end: true},

        {id: 30, data: "Question C1 detail: More detail on type C1 type?", action: testNodeCallback, end: false},
        {id: 31, data: "Question C2 detail: More detail on type C2 type?", action: testNodeCallback, end: false},
        {id: 32, data: "Question C3 detail: More detail on type C3 type?", action: testNodeCallback, end: false},

        {id: 300, data: "Answer: This is type C1", action: testNodeCallback, end: true},
        {id: 301, data: "Answer: This is type C2", action: testNodeCallback, end: true},
        {id: 302, data: "Answer: This is type C3", action: testNodeCallback, end: true},

        {id: -1, data: "Failed: What the fuck are you thinking inside your head ??", action: testNodeCallback, end: false},
    ],

    edges: [
        {fromId: 0, toId: 1, data: "The system choose type A questions", action: testEdgeCallback, label:"randomChoice"},
        {fromId: 0, toId: 2, data: "The system choose type B questions", action: testEdgeCallback, label:"randomChoice"},
        {fromId: 0, toId: 3, data: "The system choose type C questions", action: testEdgeCallback, label:"randomChoice"},

        {fromId: 1, toId: 4, data: "Question A YES", action: testEdgeCallback, label:"YES"},
        {fromId: 1, toId: 2, data: "Question A NO", action: testEdgeCallback, label:"NO"},

        {fromId: 4, toId: 7, data: "Question A1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 4, toId: 5, data: "Question A1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 5, toId: 8, data: "Question A2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 5, toId: 6, data: "Question A2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 6, toId: 9, data: "Question A3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 6, toId: -1, data: "Question A3 NO", action: testEdgeCallback, label:"NO"},

        /// 
        {fromId: 2, toId: 20, data: "Question B YES", action: testEdgeCallback, label:"YES"},
        {fromId: 2, toId: 3, data:  "Question B NO", action: testEdgeCallback, label:"NO"},

        {fromId: 20, toId: 200, data: "Question B1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 20, toId: 21, data:  "Question B1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 21, toId: 201, data: "Question B2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 21, toId: 22, data:  "Question B2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 22, toId: 202, data: "Question B3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 22, toId: -1, data:  "Question B3 NO", action: testEdgeCallback, label:"NO"},

        /// 
        {fromId: 3, toId: 30, data: "Question C YES", action: testEdgeCallback, label:"YES"},
        {fromId: 3, toId: -1, data:  "Question C NO", action: testEdgeCallback, label:"NO"},

        {fromId: 30, toId: 300, data: "Question C1 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 30, toId: 31, data:  "Question C1 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 31, toId: 301, data: "Question C2 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 31, toId: 32, data:  "Question C2 NO", action: testEdgeCallback, label:"NO"},

        {fromId: 32, toId: 302, data: "Question C3 YES", action: testEdgeCallback, label:"YES"},
        {fromId: 32, toId: -1, data:  "Question C3 NO", action: testEdgeCallback, label:"NO"},

        // this part seems like it doesn't work :v
        {fromId: -1, toId: 0, data:  "Let's do that all over again", action: testEdgeCallback, label:"Redo"},
    ]
};

module.exports = {
    graphJSON
};
