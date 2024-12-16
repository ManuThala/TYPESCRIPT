function addTwo(num: number): number {
  return num + 2;
}

function getupper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(2);
getupper("manu");
signUpUser("manu", "manu@gmail.com", "Manu@123", true);
loginUser("harsha", "harsha@gmail.com");

// function getValue(myval: number): boolean {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 ok";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
