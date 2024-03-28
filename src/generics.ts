type InputArray = number | string;
const firstEl = (arr: InputArray[]) => {
  return arr[0];
};
const firstElValue = firstEl(["sarthak", "bhatt"]);

console.log(firstElValue);
