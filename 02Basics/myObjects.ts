const User = {
  name: "asif",
  email: "asif@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "Asif", isPaid: true });

function createCourse(): {
  name: string;
  price: number;
} {
  return { name: "reactjs", price: 399 };
}

// ***** Type Aliases *****
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};
