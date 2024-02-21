'use strict';

// Sum nums in array
function sum(nums) {
  if (nums.length) {
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

// Find max num in array
function max(list) {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }

  const sub_max = max(list.slice(1));
  
  return list[0] > sub_max ? list[0] : sub_max;
}
