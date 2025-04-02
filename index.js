// Collection Functions (for Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    // Convert the collection to an array if it's an object
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
  
    // If no initial accumulator value is provided, set it to the first element
    if (acc === undefined) {
      acc = collection[0];
      collection = collection.slice(1); // Start iteration from the second element
    }
  
    // Iterate over the collection and update the accumulator
    for (let i = 0; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(array.length - n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && (shallow === false || Array.isArray(array[i]))) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  // Object Functions
  function myKeys(object) {
    let keys = [];
    for (let key in object) {
      keys.push(key);
    }
    return keys;
  }
  
  function myValues(object) {
    let values = [];
    for (let key in object) {
      values.push(object[key]);
    }
    return values;
  }
  