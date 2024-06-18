// TODO: 
// a node that have can display text and connect to other nodes
const {graphJSON} = require('./brain.js');
const {Graph} = require('./graph_related.js');

const graphFromJSON = (json) => {
    // TODO: there suppose to be a json conversion here
    // TODO: HOW TO TRAVERSE THROUGH A JSON FILE ?? 
    const graph = new Graph();

    // Add nodes
    json.nodes.forEach(node => {
        graph.addNode(node.id, node.data, node.action, node.end);
    });

    // Add edges
    json.edges.forEach(edge => {
        graph.addEdge(edge.fromId, edge.toId, edge.data, edge.action, edge.label);
    });

    return graph;
}


const randRange = (start, end) => {
    if (start > end) {
        throw new Error("Start value must be less than or equal to end value");
    }
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

const graph = graphFromJSON(graphJSON);

const getUserChoice = () => {
    //const userChoice = "YES";
    //const userChoice = "YES";
    //const userChoice = "NO";
    //getUserChoice();
    // TODO: write a cli or GUI to get the user input
    return randRange(0, 1) ? "YES": "NO";
}

/*
 * TODO: 
    an api to output a (next) question [] @Current
    an api to submit an answer to that question []
 * */

class DesignPatternEngine {
    constructor(questionsGraph, startNodeId) {
        this.currentNode = null;
        this.questionsGraph = questionsGraph;
        this.startNodeId = startNodeId;

        this._init();
    }

    _init() {
        const node = this.questionsGraph.getNode(this.startNodeId);
        //console.log(this.startNodeId, node);
        this.currentNode = node;
        console.log(this.currentNode.data);
        
        // TODO: @Duplication0
        // 1. choose a random edge
        const randomNodeId = randRange(1, 3); 
        //const randomNodeId = 1;
        const edge = this.questionsGraph.edges.find(e => e.fromNode.id === this.currentNode.id && e.toNode.id === randomNodeId);

        // 1.1. Go to edge the end node 
        this.currentNode = edge.toNode;
        //console.log(currentNode.data);
    }

    getNextQuestion() {
        return this.currentNode.data;
    }

    result() {
        if(!this.endGame()) return "THE GAME HAVEN'T END YET";
        return this.currentNode.data;
    }

    endGame() {
        return this.currentNode.isEnd();
    }

    answer(ans) {
        if(this.endGame()) return "THE GAME HAS ENDED";
        // 3. Go to the user choice node -- find the "NO" edge end node 
        if(this.currentNode.id !== -1) {
            //console.log(this.currentNode.id, ans);
            const nextEdge = this.questionsGraph.edges.find(e => e.fromNode.id === this.currentNode.id && e.label === ans);
            //console.log("Edge: " + nextEdge.data);

            // 1.1. Go to edge the end node 
            this.currentNode = nextEdge.toNode;

            //console.log(currentNode.data);

        } else {
            //nextEdge = this.questionsGraph.edges.find(e => e.fromNode.id === currentNode.id && e.label === "Redo");
            console.log("Let's do that all over again");
            this.currentNode = this.questionsGraph.getNode(this.startNodeId);

            // TODO: remove this duplication with the upper @Duplication1 
            const randomNodeId = randRange(1, 3); 
            const edge = this.questionsGraph.edges.find(e => e.fromNode.id === this.currentNode.id && e.toNode.id === randomNodeId);

            this.currentNode = edge.toNode;
            //console.log(currentNode.data);
        }
    }
}

const simulate1 = (graph, startNodeId) => {
    const engine = new DesignPatternEngine(graph, 0);
    while(!engine.endGame()) {
        const userAnswer = getUserChoice();
        console.log("Question: ", engine.getNextQuestion());
        console.log("User answer: ", userAnswer)
        engine.answer(userAnswer);
    }
    console.log(engine.result());
}

//simulate1(graph, 0);

module.exports = {
    DesignPatternEngine, 
    graphFromJSON, 
}
