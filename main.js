import { LinkedList, Node } from "./linked-list";

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
    buckets = bucketsInit(capacity);

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const hash = hash(key);

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
        const hash = hash(key);
        
        if (hash < 0 || hash >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return this.buckets[hash].contains(key);
    }
}

