type KeyInput = "up" | "down" | "left" | "right"; //workable way

enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

const doSomething = (keyPressed: Direction) => {
  //do something
};

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);

// doSomething("downrasdasd");
