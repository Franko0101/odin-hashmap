import { LinkedList, Node } from "./linked-list.js";

function bucketsInit(size) {
    let buckets = [];
    for(let i = 0; i < size; i++) {
        buckets.push(new LinkedList());
    }

    return buckets;
}

class HashMap {
    loadFactor = 0.75;
    capacity = 16;
    buckets = bucketsInit(this.capacity);

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i));
            hashCode = hashCode % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const hash = this.hash(key);

        if (this.has(key)) {
            const index = this.buckets[hash].find(key);
            this.buckets[hash].at(index).value = value;
            console.log("Valore aggiornato");
        } else {
            this.buckets[hash].append(key, value);
        }
    }

    get(key) {
        const hash = hash(key);
        
        if (hash < 0 || hash >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let index = this.buckets[hash].find(key);
        if (!index)
            return this.buckets[hash].at(index).value;

        return null;
    }

    has(key) {
        const hash = this.hash(key);
        
        if (hash < 0 || hash >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return this.buckets[hash].contains(key);
    }

    remove(key) {
        const hash = this.hash(key);

        if (this.has(key)) {
            let index = this.buckets[hash].find(key);
            this.buckets[hash].removeAt(index);
            return true;
        }
        
        return false;
    }

    length() {
        let mapLength = this.buckets.reduce((total, currentItem) => {
            return total + currentItem.size();
        }, 0);

        return mapLength;
    }

    clear() {
        this.buckets.forEach((item) => {
            while(item.size() != 0) {
                item.pop();
            }
        })
    }

    keys() {
        const filtered = this.buckets.filter((item) => item.head);
        const allKeys = [];
        filtered.forEach((item) => {
            let tempNode = item.getHead();
            while(tempNode) {
                allKeys.push(tempNode.key);
                tempNode = tempNode.nextNode;
            }
        })

        return allKeys;
    }

    values() {
        const filtered = this.buckets.filter((item) => item.head);
        const allValues = [];
        filtered.forEach((item) => {
            let tempNode = item.getHead();
            while(tempNode) {
                allValues.push(tempNode.value);
                tempNode = tempNode.nextNode;
            }
        })

        return allValues;
    }

    entries() {
        const filtered = this.buckets.filter((item) => item.head);
        const allEntries = [];
        filtered.forEach((item) => {
            let tempNode = item.getHead();
            while(tempNode) {
                allEntries.push([tempNode.key, tempNode.value]);
                tempNode = tempNode.nextNode;
            }
        })

        return allEntries;
    }
}

const map = new HashMap();

map.set("Cat", "Poony");
map.set("Tac", "Ynoop");
map.set("Dog", "Pupo");
console.log(map.buckets);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// console.log(map.buckets);
// console.log(`Numero di chiavi nella mappa: ${map.length()}`)
// map.set("Tac", "Meow");
// map.remove("Cat");
// console.log(`Numero di chiavi nella mappa: ${map.length()}`)
// console.log(map.buckets);
// map.clear();
// console.log(map.buckets);