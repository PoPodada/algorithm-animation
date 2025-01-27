import { quickSort } from "./js/sort.js";
import { boxSwap, resetBoxes } from "./js/box.js";

let inputData = [9, 10, 6, 7, 8, 4, 3];
const boxList = [];

const boxesWrapper = document.getElementById("boxes-wrapper");
//入力されたデータをリストに追加
for (let i = 0; i < inputData.length; i++) {
  const x = i * 150;
  const y = 100;
  boxList.push({ num: inputData[i], x, y });
}

//boxListからボックスを描画
for (let i = 0; i < boxList.length; i++) {
  const box = document.createElement("div");
  box.id = `box-${i}`;
  box.className = "box";
  box.textContent = boxList[i].num;
  boxesWrapper.appendChild(box);
  boxList[i].element = box;
  gsap.set(box, { x: boxList[i].x, y: boxList[i].y }); 
}
//boxListに変えたほうがいい
console.log(inputData)
quickSort(inputData, 0, boxList.length -1)

// document.getElementById("swap-btn").addEventListener("click", () => {
//   boxSwap(0, 1);
// });

// document
//   .getElementById("reset-btn")
//   .addEventListener("click", () => resetBoxes());
