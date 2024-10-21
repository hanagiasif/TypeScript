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
  private _courseCount = 1;
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

const asif = new User("asif@gamil.com", "Asif Ahmed");
