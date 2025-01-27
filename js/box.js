// ボックスを入れ替える関数
export const boxSwap = (boxList,index1, index2) => {
  console.log(boxList)

    const box1 = boxList[index1];
    const box2 = boxList[index2];
  
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

    let boxTemp = boxList[index1]
    boxList[index1] = boxList[index2]
    boxList[index2] = boxTemp
  };

// 初期状態に戻す関数
export const resetBoxes = () => {
    if (!hasSwapped || hasReset) return; // 入れ替えが行われていない、またはリセット済みの場合は何もしない
    hasReset = true;
  
    boxList.forEach((box, index) => {
      const initialX = index * 150;
      const initialY = 100;
      gsap.to(box.element, { x: initialX, y: initialY, duration: 1 });
  
      // 座標を初期状態に戻す
      box.x = initialX;
      box.y = initialY;
    });
  
    hasSwapped = false; // リセット後に再度入れ替えを可能にする
  };