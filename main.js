/* 
👉 Write your kata here!

Write a function that takes ANY array of objects (below is just an example):
[
    {a: 1, b: 2},
    {a: 2, b: 7, c: 3},
    {a: 5,  c: 3}
]

and returns ONE object which contains totals for all encountered keys and values:
{a: 8, b: 9, c: 6}

Remember that each object in the array may not have the same properties (as the other objects).
Each object (in the input array) will not have any nested objects as values.

*/

//👉 Write the function your CodeWarriors will start with below here:

// function addObjects(arrayOfObjects) {
//   // Write your code here.

// }

function addObjects(arrayOfObjects) {
  // Write your code here.
  const finalObj = {};
  for (const obj of arrayOfObjects) {
    for (const [key, value] of Object.entries(obj)) {
      if (!finalObj.hasOwnProperty(key)) {
        finalObj[key] = value;
      } else {
        finalObj[key] += value;
      }
    }
  }
  return finalObj;
}

module.export = {
    addObjects
}