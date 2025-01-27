import { findDifferencesList } from './list.js';

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

    let a = findDifferencesList(tempList, list)
    console.log(a)
    tempList = list.concat()
    // 入れ替えた後
    console.log(list);
  }

  if (startId < left - 1) {
    quickSort(list, startId, left - 1);
  }
  if (right + 1 < endId) {
    quickSort(list, right + 1, endId);
  }
};
