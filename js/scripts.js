window.addEventListener("load", () => {
  document.querySelector("#form").addEventListener("submit", handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  translationReset();
  const input = document.querySelector("#num").value;
  const wordsRoboger = roboger(input);
  console.log(wordsRoboger);
  const text = document.querySelector(".translation");
  wordsRoboger.forEach((word) => {
    text.append(word + " ");
  });
}

function translationReset() {
  document.querySelector(".translation").innerText = ''
}

function roboger(num) {
  if (num && !isNaN(num)) {
    listNum = [];
    for (let i = 0; i <= num; i++) {
      listNum.push(i);
    }
    modifiedListNum = listNum.map((num) => {
      let numSplit = num.toString().split("");

      if (numSplit.includes("3")) {
        return "Won't you be my neighbor?";
      } else if (numSplit.includes("2")) {
        return "Boop";
      } else if (numSplit.includes("1")) {
        return "Beep!";
      } else {
        return parseInt(num);
      }
    });
    return modifiedListNum;
  } else {
    return "Please input a number!";
  }
}
