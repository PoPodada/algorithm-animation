window.addEventListener("load", () => {
  setupNavigationHighlight();
  setupSortingVisualization();
});

// ナビゲーションのハイライト処理
function setupNavigationHighlight() {
  const currentPath = window.location.pathname.split("/");
  document.querySelectorAll(".side-bar ul li").forEach((item) => {
    const linkPath = item.querySelector("a").href.split("/");
    if (linkPath[linkPath.length - 1] === currentPath[currentPath.length - 1]) {
      item.classList.add("highlight");
    }
  });
}

// クイックソートの可視化処理
function setupSortingVisualization() {
  const generateButton = document.getElementById("generate-btn");
  const inputField = document.getElementById("number-input");

  generateButton.addEventListener("click", () => {
    initializeSorting(inputField);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    processNextStep();
  });

  document.getElementById("swap-btn").addEventListener("click", () => {
    swapBoxes();
  });
}

// ソートの初期化処理
function initializeSorting(inputField) {
  inputData = [];
  boxObjectList = [];
  differencesList = [];
  step = 0;
  pivotBox = null;
  tempPivotValue = "";

  document.getElementById("boxes-wrapper").innerHTML = "";

  const rawInputValue = inputField.value.trim();
  if (!rawInputValue) return;

  const parsedNumbers = rawInputValue
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "" && !isNaN(num))
    .map((num) => parseInt(num, 10));

  boxObjectList = parsedNumbers.map((num, i) => ({
    num,
    x: i * 80,
    y: 100,
  }));

  renderBoxes();
  differencesList = quickSort(parsedNumbers, 0, boxObjectList.length - 1);
  setupPivotBox();
}

// ボックスを描画
function renderBoxes() {
  const boxesWrapper = document.getElementById("boxes-wrapper");
  boxObjectList.forEach((boxData, i) => {
    const box = document.createElement("div");
    box.id = `box-${i}`;
    box.className = "box";
    box.textContent = boxData.num;
    boxesWrapper.appendChild(box);
    boxData.element = box;
    gsap.set(box, { x: boxData.x, y: boxData.y });
  });
}

// ピボットを設定
function setupPivotBox() {
  highlightBoxes(differencesList[step].listDifference, "red");

  pivotBox = document.getElementById(`box-${differencesList[step].pivotIndex}`);
  tempPivotValue = pivotBox.textContent;

  const arrow = document.createElement("span");
  const arrowText = document.createElement("span");
  arrow.className = "dli-arrow-down";
  arrowText.className = "dli-arrow-down-text";
  arrowText.textContent = "pivot";

  pivotBox.appendChild(arrow);
  pivotBox.appendChild(arrowText);
}

// 次のステップに進む
function processNextStep() {
  highlightBoxes(differencesList[step].listDifference, "lightblue");

  pivotBox.textContent = differencesList[step].pivotValue;

  if (step >= differencesList.length) return;

  step++;
  if (step >= differencesList.length) {
    alert("最後のステップです");
    return;
  }

  highlightBoxes(differencesList[step].listDifference, "red");
  setupPivotBox();
  swapBoxes();
}

// ボックスの入れ替え処理
function swapBoxes() {
  const [index1, index2] = differencesList[step].listDifference;
  boxSwap(boxObjectList, index1, index2);

  let box1 = document.getElementById(`box-${index1}`);
  let box2 = document.getElementById(`box-${index2}`);

  [box1.id, box2.id] = [box2.id, box1.id];
}
