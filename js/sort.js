function quickSort (list, startID, endID) {
  const calculationSteps = [];

  const sort = (list, startID, endID) => {
    if (startID >= endID) return; 

    let pivotIndex = endID
    let pivotValue = list[endID];
    let left = startID;
    let right = endID - 1;

    while (true) {
      while (list[left] < pivotValue) left++;
      while (list[right] > pivotValue) right--;

      if (left >= right) break;

      [list[left], list[right]] = [list[right], list[left]];

      calculationSteps.push({
        listDifference: [left, right],
        pivotIndex,
        pivotValue
      });

      left++;
      right--;
    }

    [list[left], list[endID]] = [list[endID], list[left]];

    calculationSteps.push({
      listDifference: [left, endID],
      pivotValue,
      pivotIndex
    });

    sort(list, startID, left - 1);
    sort(list, left + 1, endID);
  };

  sort(list, startID, endID);
  return calculationSteps;
};