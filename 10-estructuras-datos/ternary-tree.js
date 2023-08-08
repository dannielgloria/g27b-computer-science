class TreeNode {
  constructor(value) {
    this.value = value; // Valor del nodo
    this.children = [null, null, null]; // Arreglo de tres hijos iniciales (inicialmente nulos)
  }
}

class TernaryTree {
  constructor() {
    this.root = null; // Inicialmente el árbol está vacío, por lo que la raíz es nula
  }

  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value); // Si el árbol está vacío, creamos un nuevo nodo y lo establecemos como raíz
    } else {
      this._insertRecursive(value, this.root); // Si el árbol no está vacío, llamamos al método recursivo para insertar el valor
    }
  }

  _insertRecursive(value, node) {
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] === null) { // Si encontramos un hijo nulo, creamos un nuevo nodo con el valor y lo asignamos como hijo
        node.children[i] = new TreeNode(value);
        return;
      } else if (value < node.children[i].value) { // Si el valor es menor que el valor del hijo actual, llamamos recursivamente en ese hijo
        this._insertRecursive(value, node.children[i]);
        return;
      }
    }
  }

  traverse() {
    this._traverseRecursive(this.root); // Comenzamos el recorrido desde la raíz
  }

  _traverseRecursive(node) {
    if (node !== null) {
      console.log(node.value); // Imprimimos el valor del nodo actual
      for (const child of node.children) {
        this._traverseRecursive(child); // Llamamos recursivamente en cada hijo del nodo actual
      }
    }
  }
}

// Ejemplo de uso
const tree = new TernaryTree(); // Creamos una instancia de TernaryTree
tree.insert(5); // Insertamos valores en el árbol
tree.insert(3);
tree.insert(7);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.traverse(); // Realizamos el recorrido e imprimimos los valores en orden

console.log(tree.root)
console.log(tree.root.children[2])