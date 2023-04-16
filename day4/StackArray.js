class Stack {
    constructor() {
        this.items = [];
    }

    // push a data to the stack
    push(data) {
        this.items.push(data);
    }

    // remove an item from the stack
    pop() {
        this.items.pop();
    }

    // tos
    // return the topmost element in the stack
    tos() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1];
        }
    }

    // to check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.pop();
stack.push(6);
stack.push(7);
stack.push(10);

// console.log(stack.isEmpty());