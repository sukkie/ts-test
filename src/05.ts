// literal type
{
  // 1. 정해진 스트링 값을 가진것을 문자열 리터럴 타입
  const userName1 = "Bob";
  let userName2 = "Tom";

  type Job = "police" | "developer" | "teacher";

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: "kwon",
    job: "police",
  };

  // 2. 인터페이스 심화
  interface Car {
    name: "car";
    color: string;
    start(): void;
  }
  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  // 식별 가능한 유니온 타입
  function getGift(gift: Car | Mobile) {
    console.log(gift);
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }
}
{
  // 교차타입, Interection Type (&)
  interface Car {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  // 일부만 구현 가능
  const toyCar: Car | Toy = {
    name: "tayo",
    start() {},
  };

  // 전부 구현
  const toyCar2: Car & Toy = {
    name: "tayo",
    start() {},
    color: "red",
    price: 1000,
  };
}
