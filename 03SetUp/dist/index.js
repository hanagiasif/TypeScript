"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bijapur";
    }
    deleteToken() {
        console.log("Token deketed");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
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
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const asif = new User("asif@gamil.com", "Asif Ahmed");
// ***** NOTE *****
// private declared variables are only accessible in that class
// protected declared variables are accessible in that class and any class which inherit that class in whc=ich it is declared
