//given an array of positive integers as input, return the max value

const maxValue = (arr: number[]) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      x = arr[i];
    }
  }
  return x;
};

const arr: number[] = [1, 2, 23, 4, 5, 6, 7];

console.log(maxValue(arr));
