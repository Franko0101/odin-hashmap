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

    head() { return this.head }

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
            console.log("La lista è più corta dell'indice")
            return null;
            //return; Dovrebbe esserci un throw, per adesso stampa undefined
        } else {
            let tempNode = this.head;
            for(let i = 0; i < index; i++) {
                tempNode = tempNode.nextNode;
            }
            return tempNode;
        }
    }

    pop() {
        if (!this.head) {
            console.log("Lista vuota");
        } else if (!this.head.nextNode) {
            this.head.key = null;
            this.head.value = null;
        } else {
            let tempNode = this.head;
            while(tempNode.nextNode.nextNode) {
                tempNode = tempNode.nextNode;
            }
            tempNode.nextNode = null;
        }
    }

    contains(key) {
        if (!this.head.key) {
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
        if (!this.head.value) {
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
        if(!this.head.value) {
            console.log("Lista vuota");
        } else if(!this.head.nextNode) {
            console.log(`${this.head.key}, ${this.head.value}`)
        } else {
            let tempNode = this.head;
            while(tempNode) {
            console.log(`( ${tempNode.key}, ${tempNode.value} ) -> `)
            tempNode = tempNode.nextNode;
        }
        console.log(`null`);
        }
    }
}

const list = new LinkedList();

list.append("fido", "dog");
list.append("puny", "cat");
list.prepend("boh", "mouse");

list.toString();
//console.log(list.find("ciao"));

//console.log(list.contains("rabbit"));