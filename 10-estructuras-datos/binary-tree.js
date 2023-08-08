// Definición del nodo
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Definición del árbol binario
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Método para agregar un nodo al árbol
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // Si el valor del nuevo nodo es menor al valor del nodo actual
    if (newNode.value < node.value) {
      // Si no hay un nodo a la izquierda, se agrega el nuevo nodo
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Si no hay un nodo a la derecha, se agrega el nuevo nodo
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Método para imprimir los nodos en orden
  printInOrder() {
    this.printInOrderNode(this.root);
  }

  printInOrderNode(node) {
    if (node) {
      this.printInOrderNode(node.left);
      console.log(node.value);
      this.printInOrderNode(node.right);
    }
  }
}

// Ejemplo de uso
const tree = new BinaryTree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

tree.printInOrder(); // Salida: 1 2 3 4 5 6 7
console.log(tree); //
console.log(tree.root.left);
console.log(tree.root.right); //