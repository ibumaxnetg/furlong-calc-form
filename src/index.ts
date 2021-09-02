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
    const inputFurlongEl: HTMLInputElement = document.getElementById(
      `furlong${iNum}`
    )! as HTMLInputElement;
    ftimeEl["ftime" + iNum] = Number(inputFurlongEl.value);
    const tmpDisplay = document.querySelector(
      `.fltime${iNum}`
    )! as HTMLSpanElement;
    timeDispEl[iNum] = tmpDisplay;
    // console.log(timeDispEl.index);
    // const praStr = `ftime${iNum}`;
  });
  console.log(ftimeEl, timeDispEl);

  timeDispEl[6].textContent = (ftimeEl.ftime6 - ftimeEl.ftime5).toString();
  timeDispEl[5].textContent = (ftimeEl.ftime5 - ftimeEl.ftime4).toString();
  timeDispEl[4].textContent = (ftimeEl.ftime4 - ftimeEl.ftime3).toString();
  const tempTime = ftimeEl.ftime3 - ftimeEl.ftime1;
  ftimeEl.ftime2 = tempTime / 2 + ftimeEl.ftime1;
  const furlong2Input: HTMLInputElement = document.getElementById(
    "furlong2"
  )! as HTMLInputElement;
  furlong2Input.value = ftimeEl.ftime2.toString();
  timeDispEl[3].textContent = (ftimeEl.ftime3 - ftimeEl.ftime2).toString();
  timeDispEl[2].textContent = (ftimeEl.ftime2 - ftimeEl.ftime1).toString();
  // timeDispEl[iNum].textContent = ftimeEl[praStr];
};

editElement.addEventListener("submit", tGH);

// 更新したよ
