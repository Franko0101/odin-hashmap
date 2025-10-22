export { LinkedList, Node };

class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(key, value) {
        const newNode = new Node(key, value);

        if (!this.head)
            this.head = newNode;

        else if(!this.head.nextNode)
            this.head.nextNode = newNode;

        else {
            let tempNode = new Node();
            tempNode = this.head;

            while(tempNode.nextNode)
                tempNode = tempNode.nextNode;

            tempNode.nextNode = newNode;
        }
        this.length++;        
    }

    prepend(key, value) {
        const newNode = new Node(key, value, this.head);
        this.head = newNode;
        this.length++;
    }

    size() { return this.length }

    getHead() { return this.head }

    tail() {
        if (!this.head) {
            return this.head;
        } else {
            let tempNode = this.head;
            while(tempNode.nextNode) {
                tempNode = tempNode.nextNode;
            }
            return tempNode;
        }
    }

    at(index) {
        if (index >= this.size()) {
            console.log("La lista è più corta dell'indice");
            return null;
            //return; Dovrebbe esserci un throw, per adesso stampa undefined
        }

        let tempNode = this.head;
        for(let i = 0; i < index; i++) {
            tempNode = tempNode.nextNode;
        }
        return tempNode;
    }

    removeAt(index) {
        if (index >= this.length) {
            console.log("La lista è più corta dell'indice");
        } else if(index == 0) {
            this.head = this.head.nextNode;
            this.length--;
        }
        else {
            let tempNode = this.head;
            for(let i = 0; i < index-1; i++) {
                tempNode = tempNode.nextNode;
            }
            tempNode.nextNode = tempNode.nextNode.nextNode;
            this.length--;
        }

    }

    pop() {
        if (!this.head) {
            console.log("Lista vuota");
        } else if (!this.head.nextNode) {
            this.head = null;
            this.length--;
        } else {
            let tempNode = this.head;
            while(tempNode.nextNode.nextNode) {
                tempNode = tempNode.nextNode;
            }
            tempNode.nextNode = null;
            this.length--;
        }
    }

    contains(key) {
        if (!this.head) {
            return false;
        } else if(!this.head.nextNode) {
            if (this.head.key == key)
                return true;
            else
                return false;
        } else {
            let tempNode = this.head;
            while(tempNode) {
            if (tempNode.key == key)
                return true;

            tempNode = tempNode.nextNode;
        }
        return false;
        }
    }

    find(key) {
        if (!this.head) {
            return null;
        } else if(!this.head.nextNode) {
            if (this.head.key == key)
                return 0;
            else
                return null;
        } else {
            let tempNode = this.head;
            for(let i = 0; i < this.size(); i++) {
                if(tempNode.key == key)
                    return i;
                tempNode = tempNode.nextNode;
            }
            return null;
        }
    }

    toString() {
        if(!this.head) {
            console.log("Lista vuota");
        } else if(!this.head.nextNode) {
            console.log(`${this.head.key}, ${this.head.value}`)
        } else {
            let string = ``;
            let tempNode = this.head;
            while(tempNode) {
                string += `( ${tempNode.key}, ${tempNode.value} ) -> `
                tempNode = tempNode.nextNode;
            }
            string += `null`;
            console.log(string);
        }
    }
}