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
}

module.exports = {
    Graph
};
