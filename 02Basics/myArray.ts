const superHeros: string[] = [];
// superHeros.push("spiderman"); (Argument of type 'string' is not assignable to parameter of type 'never'.)
superHeros.push("spiderman");

// const heroPower: number[] = [];
const heroPower: Array<number> = [];
heroPower.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "asif", isActive: false });
