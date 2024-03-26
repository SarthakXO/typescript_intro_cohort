// Assigment 1

//create a function where it checks if a user is above 18, it takes a user obj as an input

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const user = {
  firstName: "Sarthak",
  lastName: "Bhatt",
  email: "Sarthak@email.com",
  age: 26,
};

const isLegalCheck = (obj: User) => {
  if (obj.age > 18) {
    return true;
  } else {
    return false;
  }
};
