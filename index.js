const { readFile } = require('fs');

//* J-1

//* Part One
readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const arr = data.split(/\n\n/);
  const newArr = arr.map((item) => item.split(/\n/));

  const mostCalories = newArr.reduce((mostCalories, arr) => {
    const total = arr.reduce((sum, num) => sum + Number(num), 0);

    if (total > mostCalories) {
      mostCalories = total;
    }

    return mostCalories;
  }, 0);

  console.log(mostCalories);
});
