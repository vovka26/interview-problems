// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if (!this.head) {
            return null;
        }
        let node = this.head;

        while(node){
            if (!node.next) {
                return node;
            }
                node = node.next;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if (!this.head) {
            return;
        }
        
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data){
        const last = this.getLast();
        const node = new Node(data);
        if (last) {
            last.next = node;
        }else{
            this.head = node;
        }
    }

    getAt(ind){
        let node = this.head;
        let counter = 0;
        while(node){
            if (counter === ind) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    // getAt(ind){
    //     let node = this.head;
    //     if(!node){
    //         return null;
    //     }

    //     let counter = 0;
    //     while(counter !== ind){
    //         if (!node.next) {
    //             return null;
    //         }
    //         node = node.next;
    //         counter++;
    //     }
    //     return node;
    // }
    
    removeAt(ind){
        if (!this.head) {
            return;
        }

        if (ind === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(ind - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, int){
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (int === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(int - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
