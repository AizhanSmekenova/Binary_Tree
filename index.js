
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            this._addNode(node, this.root);
        }
    }

    _addNode(node, currentNode) {
        if (node.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = node;
            } else {
                this._addNode(node, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = node;
            } else {
                this._addNode(node, currentNode.right);
            }
        }
    }


    traverseInOrder() {
        const nodes = [];
        this._traverseInOrder(this.root, nodes);
        return nodes;
    }

    _traverseInOrder(node, nodes) {
        if (node) {
            this._traverseInOrder(node.left, nodes);
            nodes.push(node);
            this._traverseInOrder(node.right, nodes);
        }
    }
}


const bst = new BinarySearchTree();


function drawTree() {
    const nodes = bst.traverseInOrder();
    const treeDiv = document.getElementById("tree");
    treeDiv.innerHTML = "";

    nodes.forEach((node, index) => {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "node";
        nodeDiv.textContent = node.value;
        treeDiv.appendChild(nodeDiv);
    });
}


document.addEventListener("keydown", event => {
    if (event.code === "Space") {
        const value = Math.floor(Math.random() * 201) - 100; // Generate a random number between -100 and 100
        bst.addNode(value);
        drawTree();
    }
});


drawTree();