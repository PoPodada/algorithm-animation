const quickSort = (list, startId, endId) => {
  const calculationSteps = [];
  const sort = (list, startId, endId) => {
    const pivotIndex = Math.floor((startId + endId) / 2);
    const pivot = list[pivotIndex];
    let left = startId;
    let right = endId;

    while (left <= right) {
      while (list[left] < pivot) left++;
      while (list[right] > pivot) right--;

      if (left <= right) {
        [list[left], list[right]] = [list[right], list[left]];
        calculationSteps.push({
          listDifference: [left, right],
          pivotIndex,
          pivotValue: pivot,
        });
        left++;
        right--;
      }
    }

    if (startId < right) sort(list, startId, right);
    if (left < endId) sort(list, left, endId);
  };

  sort(list, startId, endId);
  console.log(calculationSteps);
  return calculationSteps;
};
