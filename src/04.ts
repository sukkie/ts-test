// 함수정의
{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // 파라미터 옵션
  function hello(name?: string): string {
    return `hello + ${name || "world"}`;
  }

  console.log(hello());
  console.log(hello("kwon"));

  // 파라미터 기본값
  function helloDefault(name = "world"): string {
    return `hello + ${name}`;
  }

  console.log(helloDefault());
  console.log(helloDefault("kwon"));

  // 나머지 매개변수
  function restParameter(...nums: number[]): number {
    return nums.reduce((result, num) => result + num, 0);
  }

  console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9));
}
