const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  const currentSubArray = [];
  let currentSum = 0;

  arr.forEach((num) => {
    if (currentSum + num > n) {
      result.push([...currentSubArray]);
      currentSubArray.length = 0;
      currentSum = 0;
    }

    currentSubArray.push(num);
    currentSum += num;
  });

  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }

  return result;
};

const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
