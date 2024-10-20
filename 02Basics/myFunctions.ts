function addTwo(num: number): number {
  return num + 2;
  //   return "number"; (Type 'string' is not assignable to type 'number.)
}

const getHello = (s: string): string => {
  return "";
};

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("asif ahmed");
signUpUser("asif", "asif@gamil.com ", false);
loginUser("asif", "asif@gmail.com");

// function getValue(myval: number) {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  //void this means this function is not returning anything
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
