'use strict';

//returns index of smallest value in array
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

//sorts an input array
function selectionSort(arr) {
  let sortedArr = [];
  while (arr.length) {
    let smallest = findSmallest(arr);
    sortedArr.push(arr.splice(smallest, 1)[0])
  }

  return sortedArr;
}

console.log(selectionSort([100, 45, 32, 67, 1, 99]))