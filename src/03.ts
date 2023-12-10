{
  let user: object;

  user = {
    name: "kwon",
    age: 40,
  };
  // 에러 발생
  // console.log(user.name);

  // ---------
  type Socre = "A" | "B" | "C" | "D";

  // 인터페이스 객체 정의
  interface User {
    name: string;
    age: number;
    gender?: string; // 옵션
    readonly birthYear: number; // 읽기전용
    [grade: number]: Socre; // 숫자: 문자 로된 타입을 여러개 둘 수 있다는 의믜
  }

  let user2: User = {
    name: "kwon",
    age: 45,
    birthYear: 1975,
    1: "A",
    2: "B",
  };

  user2.age = 14;
  user2.gender = "F";

  // 정상출력
  console.log(user2);

  // 인터페이스로 함수 정의
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  console.log(add(10, 20));
}

interface IsAdult {
  (age: number): boolean;
}
const isAdult: IsAdult = (age) => {
  return age >= 19;
};
console.log(isAdult(20));

// 인터페이스로 클래스 정의
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// 일반생성
class Bmw implements Car {
  color = "red";
  wheels = 4;
  start() {
    console.log("go");
  }
}

console.log(new Bmw());

// 생성자로 생성
class Toyota implements Car {
  color;
  wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("go");
  }
}
const toyota = new Toyota("black");
console.log(toyota);
