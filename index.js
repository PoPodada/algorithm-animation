import { quickSort } from "./js/sort.js";
import { boxSwap, resetBoxes } from "./js/box.js";

let inputData = [9, 10, 6, 7, 8, 4, 3];
const boxObjectList = [];

const boxesWrapper = document.getElementById("boxes-wrapper");
//入力されたデータをリストに追加
for (let i = 0; i < inputData.length; i++) {
  const x = i * 150;
  const y = 100;
  boxObjectList.push({ num: inputData[i], x, y });
}

//boxObjectListからボックスを描画
for (let i = 0; i < boxObjectList.length; i++) {
  const box = document.createElement("div");
  box.id = `box-${i}`;
  box.className = "box";
  box.textContent = boxObjectList[i].num;
  boxesWrapper.appendChild(box);
  boxObjectList[i].element = box;
  gsap.set(box, { x: boxObjectList[i].x, y: boxObjectList[i].y });
}

const differencesList = quickSort(inputData, 0, boxObjectList.length - 1);

let step = 0;

document.getElementById("next-btn").addEventListener("click", () => {
  if (step < differencesList.length) {
    step++;
  }
});

document.getElementById("swap-btn").addEventListener("click", () => {
  boxSwap(boxObjectList, differencesList[step][0], differencesList[step][1]);
});

// document
//   .getElementById("reset-btn")
//   .addEventListener("click", () => resetBoxes());
