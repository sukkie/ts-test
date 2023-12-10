{
  // join
  interface User {
    name: string;
    age: number;
  }

  // 오버로드를 사용하여 해결
  function join(name: string, age: number): User;
  function join(name: string, age: string): string;
  function join(name: string, age: number | string): User | string {
    if (typeof age === "number") {
      return {
        name,
        age,
      };
    } else {
      return "나이는 숫자로 입력해주세요.";
    }
  }

  // 오버로드를 사용하지 않으면 에러 발생(반환값이 User인지 string인지 알 수 없어서)
  const sam: User = join("sam", 30);
  const jane: string = join("jane", "30");
}
