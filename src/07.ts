// 제너릭
{
  // 1
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getSize([1, 2, 3, 4]));
  console.log(getSize(["aaa", "bbb", "ccc"]));

  // 2
  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  // option을 object로 생성
  const m1: Mobile<object> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  // option을 string로 생성
  const m2: Mobile<string> = {
    name: "s21",
    price: 1000,
    option: "good",
  };

  // 3
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "a", age: 10 };
  const car: Car = { name: "a", color: "red" };
  const book: Book = { price: 1000 };

  // T타입은 반드시 객체 타입이고 name:string 프로퍼티가 있어야 함
  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  showName(car);
  // showName(book);
}
