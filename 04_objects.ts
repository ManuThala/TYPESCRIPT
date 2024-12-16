// const user = {
//   name: "manu",
//   email: "manu@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "manu", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "manu", price: 999 };
// }

// type user = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: user): user {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "manu", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1123",
  name: "manu",
  email: "manu@gmail.com",
  isActive: true,
  // creditCardDetails: 123456,
};

type cardNumber = {};

myUser.email = "harsha@gmail.com";
// myUser._id = "manu#@122";
export {};
