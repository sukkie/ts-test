{
  // this
  interface User {
    name: string;
  }

  const sam: User = { name: "sam" };
  function showName(this: User, age: number, gender: "m" | "f") {
    console.log(this.name, age, gender);
  }

  const a = showName.bind(sam);
  a(30, "m");
}
