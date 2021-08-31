interface TimeObject {
  [key: string]: number;
}

const forms = document.getElementById("furlong-calc")! as HTMLTemplateElement;
const dispEle = document.getElementById("app")! as HTMLDivElement;
const inputForm = document.importNode(forms.content, true);
const editElement = inputForm.firstElementChild!;

const formsArr: number[] = [];

dispEle.insertAdjacentElement("afterbegin", editElement);

const tGH = (event: Event) => {
  event.preventDefault();

  const ftimeEl: TimeObject = {};
  const timeDispEl: HTMLSpanElement[] = [];

  // fltime8El;
  const fMaxNum = 8;
  [...Array(fMaxNum)].forEach((ele, index, arr) => {
    const iNum = index + 1;
    ftimeEl["ftime" + iNum] = Number(
      document.getElementById(`furlong${iNum}`)!.value
    );
    const tmpDisplay = document.querySelector(`.fltime${iNum}`)!;
    timeDispEl[iNum] = tmpDisplay;
    // console.log(timeDispEl.index);
    const praStr = `ftime${iNum}`;
  });
  console.log(ftimeEl, timeDispEl);

  timeDispEl[6].textContent = ftimeEl.ftime6 - ftimeEl.ftime5;
  timeDispEl[5].textContent = ftimeEl.ftime5 - ftimeEl.ftime4;
  timeDispEl[4].textContent = ftimeEl.ftime4 - ftimeEl.ftime3;
  const tempTime = ftimeEl.ftime3 - ftimeEl.ftime1;
  ftimeEl.ftime2 = tempTime / 2 + ftimeEl.ftime1;
  document.getElementById("furlong2")!.value = ftimeEl.ftime2;
  timeDispEl[3].textContent = ftimeEl.ftime3 - ftimeEl.ftime2;
  timeDispEl[2].textContent = ftimeEl.ftime2 - ftimeEl.ftime1;
  // timeDispEl[iNum].textContent = ftimeEl[praStr];
};

editElement.addEventListener("submit", tGH);

// 更新したよ
