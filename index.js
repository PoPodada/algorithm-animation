import { quickSort } from "./js/sort.js";
import { highlightBoxes, boxSwap, resetBoxes } from "./js/box.js";

let inputData = [9, 10, 6, 7, 8, 4];
const boxObjectList = [];
const boxesWrapper = document.getElementById("boxes-wrapper");

//入力されたデータをboxObjectListに格納する処理
for (let i = 0; i < inputData.length; i++) {
  const x = i * 150;
  const y = 100;
  boxObjectList.push({ num: inputData[i], x, y });
}

//boxObjectListからボックスを描画する処理
for (let i = 0; i < boxObjectList.length; i++) {
  const box = document.createElement("div");
  box.id = `box-${i}`;
  box.className = "box";
  box.textContent = boxObjectList[i].num;
  boxesWrapper.appendChild(box);
  boxObjectList[i].element = box;
  gsap.set(box, { x: boxObjectList[i].x, y: boxObjectList[i].y });
}

//事前にクイックソート
const differencesList = quickSort(inputData, 0, boxObjectList.length - 1);
let step = 0;
highlightBoxes(differencesList[step].listDifference, "red");


let pivotBox = document.getElementById(`box-${differencesList[step].pivotIndex}`)
let tempPivotValue = pivotBox.textContent
console.log(tempPivotValue)
pivotBox.textContent = "pivot"

document.getElementById("next-btn").addEventListener("click", () => {
  highlightBoxes(differencesList[step].listDifference, "lightblue")


  pivotBox.textContent = differencesList[step].pivotValue
  console.log(tempPivotValue)
  if (step >= differencesList.length) {
    return;
  }
  if (step < differencesList.length) {
    step++;
    highlightBoxes(differencesList[step].listDifference, "red");

    pivotBox = document.getElementById(`box-${differencesList[step].pivotIndex}`) 
    pivotBox.textContent = "pivot"
    tempPivotValue = pivotBox.textContent
  }
  boxSwap(boxObjectList, differencesList[step].listDifference[0], differencesList[step].listDifference[1]);
  // htmlのidを入れ替える
  let tmp = document.getElementById(`box-${differencesList[step].listDifference[0]}`).id;
  let box1 = document.getElementById(`box-${differencesList[step].listDifference[0]}`);
  let box2 = document.getElementById(`box-${differencesList[step].listDifference[1]}`);
  box1.id = box2.id;
  box2.id = tmp;
});

document.getElementById("swap-btn").addEventListener("click", () => {
  boxSwap(boxObjectList, differencesList[step].listDifference[0], differencesList[step].listDifference[1]);

  // htmlのidを入れ替える
  let tmp = document.getElementById(`box-${differencesList[step].listDifference[0]}`).id;
  let box1 = document.getElementById(`box-${differencesList[step].listDifference[0]}`);
  let box2 = document.getElementById(`box-${differencesList[step].listDifference[1]}`);
  box1.id = box2.id;
  box2.id = tmp;
});

// document
//   .getElementById("reset-btn")
//   .addEventListener("click", () => resetBoxes());
