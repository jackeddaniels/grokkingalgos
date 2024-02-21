'use strict';

// Quicksort
function quicksort(nums) {
  if (nums.length < 2) return nums;

  const pivot = nums[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      less.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }

  // return quicksort(less).concat([pivot], quicksort(greater));
  return [...quicksort(less), pivot, ...quicksort(greater)];
}