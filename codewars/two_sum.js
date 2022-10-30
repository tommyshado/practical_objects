// Write a function that takes an array of numbers (integers for the tests) 
// and a target number. It should find two different items in the array that, 
// when added together, give the target value. The indices of these items should 
// then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
  let sumArray = [];
  
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        sumArray.push(i, j);
      }
    }
  }
  return [sumArray[0],sumArray[1]];
}

let returnedValue = twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
console.log(returnedValue);