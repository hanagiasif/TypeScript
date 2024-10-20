const User = {
  name: "asif",
  email: "asif@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "Asif", isPaid: true });

function createCourse(): {
  name: string;
  price: number;
} {
  return { name: "reactjs", price: 399 };
}
