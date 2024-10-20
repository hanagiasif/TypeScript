// let variableName:type = value
let greetings: string = "Assalamwalaikum Asif Ahmed";

greetings.toUpperCase();
console.log(greetings);

// ***** number *****
let userId: number = 334455;

// ***** boolean *****
let isLoggedIn: boolean = false;

// ***** any ******
// that when in situations where typeScript cannot find out that what value come out in the future it put any infront of the variables
let hero: string;
function getHero() {
  return "Thor";
}
hero = getHero();

export {};
