'use strict';

function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    let guess = arr[mid];

    if (guess === el) return mid;
    if (guess > el) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([3,6,9,15,19,21], 21));