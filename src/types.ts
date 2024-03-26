//print the id of a user, which can be either a number or a string

type strOrNum = number | string | boolean;

const checker = (id: strOrNum) => {
  console.log(id);
};
