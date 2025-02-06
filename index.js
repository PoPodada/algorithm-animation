window.addEventListener("load", () => {
  const currentPath = window.location.pathname.split("/");

  const items = document.querySelectorAll(".side-bar ul li");

  items.forEach((item) => {
    const link = item.querySelector("a").href.split("/");

    if (link[link.length - 1] === currentPath[currentPath.length - 1]) {
      item.classList.add("highlight");
      
    }
  });
});

window.addEventListener("load", () => {
  const generateBtn = document.getElementById("generate-btn");

  let inputValue
  let inputField = document.getElementById("number-input");
  inputField.addEventListener("input", (e) => {
    inputValue = e.target.value;
  });


  generateBtn.addEventListener("click", () => {
    inputData = [];
    boxObjectList = [];
    differencesList = [];
    step = 0;
    pivotBox = null;
    tempPivotValue = "";
    document.getElementById("boxes-wrapper").innerHTML = "";

    const inputValue = inputField.value.trim();
    if (!inputValue) return;

    inputData = inputValue
      .split(",")
      .map((num) => num.trim())
      .filter((num) => num !== "" && !isNaN(num))
      .map((num) => parseInt(num, 10));
    for (let i = 0; i < inputData.length; i++) {
      const x = i * 80;
      const y = 100;
      boxObjectList.push({ num: inputData[i], x, y });
    }

    //boxObjectListからボックスを描画する処理
    const boxesWrapper = document.getElementById("boxes-wrapper");
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
    differencesList = quickSort(inputData, 0, boxObjectList.length - 1);

    //step0の時のボックスの色の変更

    highlightBoxes(differencesList[step].listDifference, "red");

    pivotBox = document.getElementById(
      `box-${differencesList[step].pivotIndex}`
    );

    tempPivotValue = pivotBox.textContent;
    const arrow = document.createElement("span");
    const arrowText = document.createElement("span");
    arrow.className = "dli-arrow-down";
    arrowText.className = "dli-arrow-down-text";
    arrowText.textContent = "pivot";
    pivotBox.appendChild(arrow);
    pivotBox.appendChild(arrowText);
  });

  // let inputData = [900, 100, 600, 700, 800, 400];

  //入力されたデータをboxObjectListに格納する処理

  document.getElementById("next-btn").addEventListener("click", () => {
    highlightBoxes(differencesList[step].listDifference, "lightblue");

    pivotBox.textContent = differencesList[step].pivotValue;
    console.log(tempPivotValue);
    if (step >= differencesList.length) {
      return;
    }
    if (step < differencesList.length) {
      step++;
      if (differencesList.length  <= step) {
        alert("最後のステップです");
        return;
      }
      highlightBoxes(differencesList[step].listDifference, "red");

      pivotBox = document.getElementById(
        `box-${differencesList[step].pivotIndex}`
      );
      tempPivotValue = pivotBox.textContent;
      const arrow = document.createElement("span");
      const arrowText = document.createElement("span");
      arrow.className = "dli-arrow-down";
      arrowText.className = "dli-arrow-down-text";
      arrowText.textContent = "pivot";
      pivotBox.appendChild(arrow);
      pivotBox.appendChild(arrowText);
    }
    boxSwap(
      boxObjectList,
      differencesList[step].listDifference[0],
      differencesList[step].listDifference[1]
    );
    // htmlのidを入れ替える
    let tmp = document.getElementById(
      `box-${differencesList[step].listDifference[0]}`
    ).id;
    let box1 = document.getElementById(
      `box-${differencesList[step].listDifference[0]}`
    );
    let box2 = document.getElementById(
      `box-${differencesList[step].listDifference[1]}`
    );
    box1.id = box2.id;
    box2.id = tmp;
  });

  document.getElementById("swap-btn").addEventListener("click", () => {
    boxSwap(
      boxObjectList,
      differencesList[step].listDifference[0],
      differencesList[step].listDifference[1]
    );

    // htmlのidを入れ替える
    let tmp = document.getElementById(
      `box-${differencesList[step].listDifference[0]}`
    ).id;
    let box1 = document.getElementById(
      `box-${differencesList[step].listDifference[0]}`
    );
    let box2 = document.getElementById(
      `box-${differencesList[step].listDifference[1]}`
    );
    box1.id = box2.id;
    box2.id = tmp;
  });

  alert("生成を押した後は初めにソートを実行するを１回押してください");
});

let tempPivotValue = "";

let inputData = [];
let boxObjectList = [];
let differencesList = [];
let step = 0;
let pivotBox;
