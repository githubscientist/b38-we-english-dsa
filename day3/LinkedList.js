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
            console.log('list is empty!');
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            let thead = this.head;

            while (thead.next.next != null) {
                thead = thead.next;
            }
            thead.next = null;
        }
    }

    length() {
        // return the length of the linked list
        // return the number of nodes in the linked list
        
    }
}


let list = new LinkedList();

list.push(4);
list.push(5);
list.push(6);


console.log(list.length());