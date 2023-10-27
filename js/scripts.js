function roboger(num) {
  if (num) {
    listNum = [];
    for (let i = 0; i <= num; i++) {
      listNum.push(i);
    }
    modifiedListNum = listNum.map((num) => {
      const numSplit = num.toString().split("");
      for (let i = 0; i < numSplit.length; i++) {
        if (numSplit[i] === "1") {
          return "Beep!";
        } else if (numSplit[i] === "2") {
          return "Boop";
        } else if (numSplit[i] === "3") {
          return "Won't you be my neighbor";
        } else {
          return parseInt(num);
        }
      }
    });
    return modifiedListNum;
  } else {
    return "Please input a number!";
  }
}
