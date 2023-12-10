{
  // 1
  class Car {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }

  // 2
  class Car2 {
    constructor(public color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }

  // 3
  class Car3 {
    constructor(readonly color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }

  const bmw = new Car("red");
}

// 접근제한자 private, protected, public
// 기본은 public이고 private은 #으로도 사용

// static
{
  class Car {
    readonly name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
      console.log(Car.wheels);
    }
  }

  console.log(Car.wheels);
}

// 추상 class
{
  // 선언
  abstract class Car {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
    abstract doSomething(): void;
  }

  // 사용
  class Bmw extends Car {
    constructor(color: string) {
      super(color);
    }

    doSomething(): void {
      console.log(this.color);
    }
  }
}
