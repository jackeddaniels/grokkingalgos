'use strict';

// Sum nums in array
function sum(list) {
  if (list.length) {
    return 0;
  }

  return list[0] + sum(list.slice(1));
}

// Count items in array
function count(arr) {
  if (arr.length) {
    return 0;
  }

  return 1 + count(arr.slice(1));
}
