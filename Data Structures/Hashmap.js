class HashTable {
  //53 = how large our hash table is
  constructor(size = 4) {
    //storing 53 as our keymap
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    //store the key-value pair in the hash table array via separate chaining
    let index = this._hash(key);
    //if there is nothing at this index in the keymap
    if (!this.keyMap[index]) {
      //set to empty array
      this.keyMap[index] = [];
    }
    //push into the array at that index position in the hash table
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    //accept and hash the key
    let index = this._hash(key);
    //retrieve the key-value pair in the hash table
    if (this.keyMap[index]) {
      //if there is something at the index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //gives us subarray
        if (this.keyMap[index][i][0] === key) {
          //don't return the whole item, only the value of the key-value pair
          return this.keyMap[index][i][1];
        }
      }
    }
    //if the key isn't found return undefined
    return undefined;
  }
  //loops through hash table array and returns array of keys in table
  keys() {
    //note: pay attention to how you deal with duplicate data
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //check if there is anythi in the keyMap
      if (this.keyMap[i]) {
        //loop over keyMap items and push into valuesArr
        //this.keyMap[i] = subarray at that index
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //keys stored at index 0
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  //loops through hash table array and returns an array of values in the table
  values() {
    //note: pay attention to how you deal with duplicate data
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //check if there is anythi in the keyMap
      if (this.keyMap[i]) {
        //loop over keyMap items and push into valuesArr
        //this.keyMap[i] = subarray at that index
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //keys stored at index 1
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

// //basic hash function that works on STRINGS ONLY
// //NOT CONSTANT TIME, SCALES WITH INPUT SIZE
// //Also could be more random
// function hashString1(key, arrayLen) {
//   let total = 0;
//   //loop through characters in key
//   for (let char of key) {
//     //map a to 1, b to 2 so on
//     let value = char.charCodeAt(0) - 06;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// hashString1("pink", 10);

// //improved hash function
// function hashString2(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

// hashString2("orange", 20);

let ht = new HashTable(17);
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are fine");
ht.set("cats", "are cool");
ht.set("i love", "pizza");
ht.set("cats", "are cool");
ht.set("i hate", "pizza");
