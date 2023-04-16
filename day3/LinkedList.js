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
    // pushes the data to the end of the list
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
    // removes the data from the end of the list
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

    // the number of nodes in the linked list
    length() {
        let thead = this.head;
        let nodes = 0;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }

    // inserts the data into the beginning of the list
    unshift(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // removes the data from the beginning of the list
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

    // middleNode() {
    //     // return the middle node data of the linked list
    //     // we need to find the length of the linked list
    //     let length = this.length();

    //     length = Math.ceil(length / 2);
        
    //     // find the middle node
    //     let thead = this.head;
    //     length--;

    //     while (length > 0) {
    //         thead = thead.next;
    //         length--;
    //     }

    //     return thead.data;
    // }

    middleNode() {
        // slow and fast pointers
        let slow = this.head;
        let fast = this.head;

        while (fast!=null && fast.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }
}


let list = new LinkedList();

list.push(4);
list.push(6);
list.push(10);

list.unshift(3);
list.unshift(1);

list.pop();
list.push(7);

list.shift();
list.unshift(2);
// list.push(8);
// list.push(9);

list.toString();

console.log(list.middleNode());