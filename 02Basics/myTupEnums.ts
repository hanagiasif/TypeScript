// const user: (string | number)[] = [1, "ah"];

let user: [string, number, boolean];
user = ["asif", 123, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [122, "example@google.com"];

newUser[1] = "ah.com";
// newUser.push(true); (Argument of type 'boolean' is not assignable to parameter of type 'string | number'.)
