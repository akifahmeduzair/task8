function maxMultiple(number) {
  let maxNumb;
  if (number <= 3) {
    maxNumb = number - 1;
  } else {
    const remainder = number % 3;
    const numOfThrees = Math.floor(number / 3);

    if (remainder === 0) {
      maxNumb = 3 ** numOfThrees;
    } else if (remainder === 1) {
      maxNumb = 3 ** (numOfThrees - 1) * 4;
    } else {
      maxNumb = 3 ** numOfThrees * 2;
    }
  }

  console.log(
    `${maxNumb} is the maximum product of numbers whose sum is ${number}`
  );
}

maxMultiple(3);
maxMultiple(10);
maxMultiple(11);
maxMultiple(15);
