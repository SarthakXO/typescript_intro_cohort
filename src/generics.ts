function identity<T>(arg: T) {
  return arg;
}

let ouput1 = identity<string>("MyString");
let ouput2 = identity<number>(1234);
