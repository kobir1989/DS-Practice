//Hash Table Data structure

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // hash function creates a hash key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //set method
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //get method
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0]) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  //delete method
  delete(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0]) {
          delete currentBucket[i];
        }
      }
    }
    return this.data;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('greet', 'hi');
myHashTable.set('name', 'kabir');
myHashTable.set('age', 34);
myHashTable.set('stack', 'javaScript');
console.log(myHashTable);
console.log(myHashTable.delete('age'));
