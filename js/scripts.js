function roboger(num) {
  if (num && !isNaN(num)) {
    listNum = [];
    for (let i = 0; i <= num; i++) {
      listNum.push(i);
    }
    modifiedListNum = listNum.map((num) => {
      let numSplit = num.toString().split("");
      const exceptions = [0,4,5,6,7,8,9]
      if (exceptions.includes(num)) {
      	console.log(5)
      	return parseInt(num)
      }
      numSplit = numSplit.reverse()
      console.log(numSplit)
      for (let i = 0; i < numSplit.length; i++) {
        if (numSplit[i] === "1") {
          return "Beep!";
        } else if (numSplit[i] === "2") {
          return "Boop";
        } else if (numSplit[i] === "3") {
          return "Won't you be my neighbor";
        } 
      }
    });
    return modifiedListNum;
  } else {
    return "Please input a number!";
  }
}
