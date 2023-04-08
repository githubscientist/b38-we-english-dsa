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

    // insertAtTail
    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
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

    // deleteAtTail
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
        let thead = this.head;
        let nodes = 0;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }

    unshift(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    shift() {
        if (this.head == null) {
            console.log('list is empty!');
        } else {
            this.head = this.head.next;
        }
    }

    splice(pos, data) {
        // insert the data at the position pos of the linked list
        
    }

    middleNode() {
        // return the middle node data of the linked list

    }
}


let list = new LinkedList();

list.push(4);
list.push(5);
list.push(6);
list.push(55);
list.unshift(11);
list.unshift(10);
list.push(7);
list.pop();
list.shift();
list.shift();
list.pop();

// console.log(list.length());
list.toString();