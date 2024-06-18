// TODO: 
// a node that have can display text and connect to other nodes
const {graphJSON} = require('./brain.js');

class Node {
    constructor(id, data = null, action=null, end=false) {
        this.id = id;
        this.data = data;
        this.neighbors = new Set();
        this.action = action;
        this.end = end;
    }

    addNeighbor(node) {
        this.neighbors.add(node);
    }

    isEnd() {
        return this.end;
    }

    setAction(action) {
        this.action = action;
    }

    toString() {
        return `Node(id=${this.id}, data=${this.data})`;
    }
}

class Edge {
    constructor(fromNode, toNode, data = null, action=null, label="") {
        this.fromNode = fromNode;
        this.toNode = toNode;
        this.data = data;
        this.action = action; // Action to be executed during traversal
        this.label = label;
    }

    setAction(action) {
        this.action = action;
    }

    toString() {
        return `Edge(from=${this.fromNode.id}, to=${this.toNode.id}, data=${this.data})`;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
        this.edges = [];
    }

    addNode(id, data = null, action=null, end=false) {
        if (!this.nodes.has(id)) {
            const node = new Node(id, data, action, end);
            this.nodes.set(id, node);
        } else {
            console.log(`Node ${id} already exists.`);
        }
    }

    addEdge(fromId, toId, data = null, action=null, label="") {
        const fromNode = this.nodes.get(fromId);
        const toNode = this.nodes.get(toId);

        if (fromNode && toNode) {
            const edge = new Edge(fromNode, toNode, data, action, label);
            this.edges.push(edge);
            fromNode.addNeighbor(toNode);
        } else {
            console.log(`One or both nodes ${fromId}, ${toId} do not exist.`);
        }
    }

    getNode(id) {
        return this.nodes.get(id);
    }

    getEdges() {
        return this.edges;
    }


    toString() {
        return `Graph(nodes=${Array.from(this.nodes.values()).map(node => node.toString())}, edges=${this.edges.map(edge => edge.toString())})`;
    }




    // Traversal
    //
    dfs(startId, visited = new Set()) {
        const startNode = this.nodes.get(startId);
        if (!startNode) {
            console.log(`Node ${startId} does not exist.`);
            return;
        }

        this._dfsHelper(startNode, visited);
    }

    _dfsHelper(node, visited) {
        if (visited.has(node)) {
            return;
        }

        if (node.action) {
            node.action(node);
        } else {
            console.log(node.toString());
        }

        visited.add(node);

        node.neighbors.forEach(neighbor => {
            this._dfsHelper(neighbor, visited);
            const edge = this.edges.find(e => e.fromNode === node && e.toNode === neighbor);
            if (edge && edge.action) {
                edge.action(edge);
            }
        });
    }

    _findYesNeighbor(node) {
        let yes = null;
        node.neighbors.forEach(neighbor => {
            if(neighbor.action() == "YES") {
                yes = neighbor;            
                //yes = "YES";
            }
        });

        return yes; 
    }

    _findNoNeighbor(node) {
        let no = null;
        node.neighbors.forEach(neighbor => {
            if(neighbor.action() == "NO") {
                no = neighbor;            
                //yes = "YES";
            }
        });

        return no; 
    }

}

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

const simulate = (graph, startNodeId, useChoiceCallBack) => {
    const node = graph.getNode(startNodeId);
    let currentNode = node;
    console.log(currentNode.data);
    
    // TODO: @Duplication0
    // 1. choose a random edge
    const randomNodeId = randRange(1, 3); 
    //const randomNodeId = 1;
    const edge = graph.edges.find(e => e.fromNode.id === currentNode.id && e.toNode.id === randomNodeId);

    // 1.1. Go to edge the end node 
    currentNode = edge.toNode;
    console.log(currentNode.data);

    while(!currentNode.isEnd()) {
        const userChoice = useChoiceCallBack();

        // 3. Go to the user choice node -- find the "NO" edge end node 
        if(currentNode.id !== -1) {
            //console.log(currentNode.id);
            const nextEdge = graph.edges.find(e => e.fromNode.id === currentNode.id && e.label === userChoice);
            console.log("Edge: " + nextEdge.data);

            // 1.1. Go to edge the end node 
            currentNode = nextEdge.toNode;
            console.log(currentNode.data);

        } else {
            //nextEdge = graph.edges.find(e => e.fromNode.id === currentNode.id && e.label === "Redo");
            console.log("Let's do that all over again");
            currentNode = graph.getNode(startNodeId);

            // TODO: remove this duplication with the upper @Duplication1 
            const randomNodeId = randRange(1, 3); 
            const edge = graph.edges.find(e => e.fromNode.id === currentNode.id && e.toNode.id === randomNodeId);

            currentNode = edge.toNode;
            console.log(currentNode.data);
        }

    }
}

simulate(graph, 0, getUserChoice);
