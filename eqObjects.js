// /* While working more with objects recently, we've created functions that return objects. When writing out assertions to test the return value of these functions, we quickly realized that our assertEqual can't be used directly. assertEqual can really only be used for checking primitive return types. 

// Instructions -----------
// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false! */
// const eqObjects = function(object1, object2) {
// };

// // Test cases -------
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// /* Step 2: Primitives As Values (Implementation)
// Our tests above are deliberately simple, only using objects that have primitive values. It's generally considered good practice to start with solving simple scenarios first and then add more logic from there.

// In this simple scenario, two objects are equal when:

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
// Implement the function in order to pass the assertions written so far.

// A reminder that we don't need to handle all scenarios yet. Instead, focus on solving only the primitive value scenario. */

const eqObjects = function(object1, object2) {
    var equalCount = 0;
    //Object.keys() puts all keys of an object inside an array
    // continue logic if both objects have the same amount of keys
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for(let key in object1){
        for(let i in object2){ //for key in obj2 aka i = key
            //if respective keys have same value add 1 to equalcount
            if (object1[key] === object2[i]){
                equalCount++;
            }
        }
    }
    //if there are as many equal keys as there are keys total return true (if key counts are different, function already returns false from line 33's if statement)
    if (equalCount === Object.keys(object1).length){
        return true;
    }
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));