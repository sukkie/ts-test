{
  // 타입 추론
  let car = "bmw";

  // 타입
  let age: number = 10;
  let isAdult: boolean = true;
  let a = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];

  // 배열 표현 방법 3가지
  let week1 = ["mon", "tud", "wed"];
  let week2: string[] = ["mon", "tud", "wed"];
  let week3: Array<String> = ["mon", "tud", "wed"];

  // 튜플(Tuple)
  let b: [string, number];
  b = ["z", 1];
  b[0].toUpperCase();

  // void, never
  function sayHello(): void {
    console.log("hello");
  }

  // 에러를 반환하는경우 never
  function showError(): never {
    throw new Error();
  }

  function infLoop(): never {
    while (true) {
      // do something
    }
  }

  // enum
  enum Os {
    Windows, // 0
    Ios, // 1
    Android, // 2
  }

  enum Os2 {
    Windows = "win",
    Ios = "ios",
    Android = "and",
  }
  // 위의 값만 입력 할 수 있음
  let myOs: Os2;
  myOs = Os2.Android;

  // null, undefined
  let c: null = null;
  let d: undefined = undefined;
}
