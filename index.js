import { quickSort } from "./js/sort.js";
import { boxSwap, resetBoxes } from "./js/box.js";

let inputData = [9, 10, 6, 7, 8, 4, 3];
const boxList = [];

const boxesWrapper = document.getElementById("boxes-wrapper");

//入力されたデータをリストに追加
for (let i = 0; i < inputData.length; i++) {
  const x = i * 150;
  const y = 100;
  gsap.set(box, { x, y });
  boxList.push({ num: a[i], x, y });
}

//boxListからボックスを描画
for (let i = 0; i < boxList.length; i++) {
  const box = document.createElement("div");
  box.id = `box-${i}`;
  box.className = "box";
  box.textContent = boxList[i].num;
  boxesWrapper.appendChild(box);
}

// document.getElementById("swap-btn").addEventListener("click", () => {
//   boxSwap(0, 1);
// });

// document
//   .getElementById("reset-btn")
//   .addEventListener("click", () => resetBoxes());
