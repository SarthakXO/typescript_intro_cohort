function identity<T>(arg: T) {
  return arg;
}

let ouput1 = identity<string>("MyString");
let ouput2 = identity<number>(1234);

//orignal problem
const firstEl = <T>(arr: T[]) => {
  return arr[0];
};

console.log(firstEl(["sarthak", "bhatt"]).toUpperCase());
