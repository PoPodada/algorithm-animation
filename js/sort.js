import { findDifferencesList } from './list.js';
let calculationSteps = []
export const quickSort = (list, startId, endId) => {
  let pivot = list[Math.floor((startId + endId) / 2)];
  let left = startId;
  let right = endId;
  let tempList = list.concat()
  

  while (true) {
    while (list[left]< pivot) {
      left++;
    }

    while (pivot < list[right]) {
      right--;
    }

    if (right <= left) {
      break;
    }
    
    let tmp = list[left];
    list[left] = list[right];
    list[right] = tmp;

    left++;
    right--;

    let listDifference = findDifferencesList(tempList, list)
    calculationSteps.push(listDifference)
    tempList = list.concat()
  }

  if (startId < left - 1) {
    quickSort(list, startId, left - 1);
  }
  if (right + 1 < endId) {
    quickSort(list, right + 1, endId);
  }
  return calculationSteps;
};
