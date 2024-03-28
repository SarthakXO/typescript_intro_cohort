type KeyInput = "up" | "down" | "left" | "right"; //workable way

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const doSomething = (keyPressed: Direction) => {
  //do something
};

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);

// doSomething("downrasdasd");
