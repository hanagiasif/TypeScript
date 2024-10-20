// const User = {
//   name: "asif",
//   email: "asif@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "Asif", isPaid: true });

// function createCourse(): {
//   name: string;
//   price: number;
// } {
//   return { name: "reactjs", price: 399 };
// }

// // ***** Type Aliases *****
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "12345",
  name: "asif",
  email: "asif@gamil.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "asifahmed@gamil.com";
// myUser._id="something" (Cannot assign to '_id' because it is a read-only property.)

export {};
