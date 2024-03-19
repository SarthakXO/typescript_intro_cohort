let x: number = 1;

//problem 1 give types to arguments
const greet = (firstName: string) => {
  console.log("Hello " + firstName);
};

console.log(greet("Sarthak"));

//problem 2 give type to the returned value
const sum = (a: number, b: number): number => {
  return a + b;
};

const value = sum(1, 2);
console.log(value);
