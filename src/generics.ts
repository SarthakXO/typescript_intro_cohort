function identity<T>(arg: T) {
  return arg;
}

let ouput1 = identity<string>("MyString");
let ouput2 = identity<number>(1234);

//orignal problem
const firstEl = <T>(arr: T[]) => {
  return arr[0];
};

const value1 = firstEl<string>(["sarthak", "bhatt"]).toUpperCase();
const value2 = firstEl<number>([123, 567]);

console.log(value1);
console.log(value2);
