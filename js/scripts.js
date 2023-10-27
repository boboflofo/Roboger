function roboger(num) {
  listNum = [];
  for (let i = 0; i <= num; i++) {
    listNum.push(i);
  }
  modifiedListNum = listNum.map((num) => {
    if (num === 1) {
      return "Beep!";
    } else if (num === 2) {
      return "Boop";
    } else if (num === 3) {
      return "Won't you be my neighbor";
    } else {
      return num;
    }
  });
  return modifiedListNum;
}
