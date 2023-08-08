/**
 * Un árbol binario de búsqueda (Binary Search Tree o BST) es una estructura de datos 
 * en la que cada nodo tiene, como máximo, dos hijos (izquierdo y derecho), y para 
 * cada nodo, todos los valores en el subárbol izquierdo son menores que el valor 
 * del nodo y todos los valores en el subárbol derecho son mayores.
 * 
 *           ---  12 ---
 *       - 3 -         - 16 -
 *     2      4    -13-      -18-
 *               11    15  17    19
 *  
 * 
 * A continuación, te mostraré cómo implementar un Binary Search
 * Tree en JavaScript:
 */

/* NODO */
class Nodo{
    constructor(valor){
        this.valor = valor
        this.derecha = null
        this.izquierda = null
    }
}

/* Luego, implementaremos la clase para el árbol binario de búsqueda: */

class BinarySearchTree{
    constructor(){
        this.raiz = null
    }

    // Funcion para insertar un nuevo valor en el arbol
    insertar(valor){
        const nuevoNodo = new Nodo(valor)

        if(!this.raiz){
            this.raiz = nuevoNodo
            return this;
        }

        let current = this.raiz
        while(true){
            if (valor === current.valor) return undefined
            if (valor < current.valor) {
                if (current.izquierda === null) {
                    current.izquierda = nuevoNodo;
                    return this
                }
                current = current.izquierda
            } else {
                if (current.derecha === null) {
                    current.derecha = nuevoNodo;
                    return this
                }
                current = current.derecha
            } 
        }
    }

    // Funcion un valor en el arbol
    buscar(valor){
        if (!this.raiz) return false

        let current = this.raiz
        while (current) {
            if (valor === current.valor) {
                console.log("Aqui esta el nodo con valor", valor)
                return true
            }
            if (valor < current.valor) {
                current = current.izquierda;
                console.log("me fui izquierda")
            } else {
                current = current.derecha;
                console.log("me fui derecha")
            }
        }
        return false
    }

    // Funcion para saber si el arbol esta vacio
    estaVacio(){
        return this.raiz === null
    }
}



const bst = new BinarySearchTree();
bst.insertar(12)
bst.insertar(3)
bst.insertar(2)
bst.insertar(4)
bst.insertar(11)
bst.insertar(13)
bst.insertar(16)
bst.insertar(18)
bst.insertar(15)
bst.insertar(17)
bst.insertar(19)
bst.insertar(10)
/*
console.log("buscamos el nodo 12 en el arbol")
console.log(bst.buscar(12)); // Output: true
console.log("terminamos la busqueda en el arbol")
console.log("-----------------------------------")
console.log("buscamos el nodo 19 en el arbol")
console.log(bst.buscar(19)); // Output: true
console.log("terminamos la busqueda en el arbol")
console.log("-----------------------------------")
console.log("buscamos el nodo 7 en el arbol")
console.log(bst.buscar(7)); // Output: true
console.log("terminamos la busqueda en el arbol")
console.log("-----------------------------------")
console.log(bst.estaVacio()); // Output: false
*/
/*
 *           ---- 12 ----
 *       - 3 -           13 -
 *     2      4 -             16-
 *               - 11              -18-
 *            10                17    19
 */


console.log(bst.buscar(5)); // Output: true
