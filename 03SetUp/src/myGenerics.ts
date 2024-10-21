const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number): number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
// identityThree(2) (function identityThree<2>(val: 2): 2)
// *****same as line number 12 to  14 *****
function identityFour<T>(val: T): T {
  return val;
}
interface Bottle {
  brand: string;
  type: number;
}
identityFour<Bottle>({ brand: "Milton", type: 100 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  authoer: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
