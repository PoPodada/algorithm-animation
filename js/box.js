function highlightBoxes (indices, color) {
  indices.forEach((index) => {
    const box = document.getElementById(`box-${index}`);
    if (box) box.style.backgroundColor = color;
  });
};

// ボックスを入れ替える関数
const boxSwap = (boxList, index1, index2) => {
  const box1 = boxList[index1];
  const box2 = boxList[index2];

  console.log(box1, box2);
  // アニメーションで位置を入れ替え
  gsap.to(box1.element, { x: box2.x, y: box2.y, duration: 1 });
  gsap.to(box2.element, { x: box1.x, y: box1.y, duration: 1 });

  // 座標を入れ替える
  const tempX = box1.x;
  const tempY = box1.y;
  box1.x = box2.x;
  box1.y = box2.y;
  box2.x = tempX;
  box2.y = tempY;

  let boxTemp = boxList[index1];
  boxList[index1] = boxList[index2];
  boxList[index2] = boxTemp;
};
