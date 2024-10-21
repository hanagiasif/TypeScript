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
  readonly city: string = "Bijapur";
  constructor(public email: string, public name: string) {}
}

const asif = new User("asif@gamil.com", "Asif Ahmed");

// asif.name; (Property 'name' is private and only accessible within class 'User'.)
