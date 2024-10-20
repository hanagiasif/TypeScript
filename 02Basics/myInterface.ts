interface User {
  readonly dbId: number;
  eamil: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

//re-opening of  interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const asif: Admin = {
  dbId: 22,
  eamil: "asif@gmail.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "couponName", off: 10) => {
    return 10;
  },
};
