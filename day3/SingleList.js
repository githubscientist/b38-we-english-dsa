class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        // creating a new node
        let newNode = new Node(data);

        if (this.head == null) {
            // check whether the list is empty
            this.head = newNode;
        } else {
            // the list has already some elements
            // creating the temporary head
            let thead = this.head;

            // find the last node of the linked list
            while (thead.next != null) {
                // go to the next node
                thead = thead.next;
            }

            // attach the newnode as the next node to the last node in the linked list
            thead.next = newNode;
        }
    }

    toString() {
        let nodes = [];

        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        console.log(nodes); 
    }

    pop() {
        if (this.head == null) {
            // list is empty
            // do nothing
            console.log('list is empty!');
        } else if (this.head.next == null) {
            // list has only one element
            // remove that compartment
            this.head = null;
        } else {
            let thead = this.head;

            while (thead.next.next != null) {
                thead = thead.next;
            }

            // now the thead is pointing to the node previous to the tail node
            thead.next = null;
        }
    }
}

/*
    thead != null
        after the loop breaks: thead = null [thead is standing on the null]
    
    thead.next !=null
        after the loop breaks: thead.next = null [thead is standing on the tail node]
    
    thead.next.next != null
        after the loop breaks: thead.next.next = null [thead is standing on the previous node of tail node]


    while x != 10
        after the loop breaks: x = 10
*/

// let newNode = new Node(5, 'sathish');
// let newNode1 = new Node(6, 'krish');

// console.log(newNode, newNode1);

// let node1 = new Node(5);
// let node2 = new Node(6);

// node1.next = node2;

// console.log(node1);

let list = new LinkedList();

list.push(4);
list.push(5);
list.push(6);

// list.toString();

// list.pop();

// list.toString();

// list.pop();

// list.toString();

// list.pop();

// list.toString();

// list.pop();

/*
    list.head = LinkedList {
        head: Node {
            data: 4,
            next: Node {
                data: 5, 
                next: Node {
                    data: 6,
                    next: null
                }
            }
        }
    }
*/

// let array = [];

// array.push(4);
// array.push(5);
// array.push(7);

// console.log(array);

// array.pop();

// console.log(array);