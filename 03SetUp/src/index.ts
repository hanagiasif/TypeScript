// class User {
//   public email: string;
//   //   private name: string;
//   private name: string;
//   readonly city:string="Bijapur"
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
  protected _courseCount = 1;
  readonly city: string = "Bijapur";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deketed");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isfamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const asif = new User("asif@gamil.com", "Asif Ahmed");

// ***** NOTE *****
// private declared variables are only accessible in that class
// protected declared variables are accessible in that class and any class which inherit that class in whc=ich it is declared
