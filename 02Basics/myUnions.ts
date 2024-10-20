let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let asif: User | Admin = { name: "asif", id: 334 };
asif = { username: "asif", id: 334 };

function getDbId(id: number | string) {
  console.log(`DB is id ${id}`);
}

getDbId(3);
getDbId("3");

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, "2", "3", true];
