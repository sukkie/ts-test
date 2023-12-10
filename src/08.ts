// utility type
{
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  // 1. keyof : 프로퍼티를 전부 유니온으로 변경
  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
  const userKey: UserKey = "id";
  console.log(userKey);

  // 2. Partial<T> : 프로퍼티를 전부 옵셔널로 변경
  // id와  name만으로 객체 생성 가능
  let admin: Partial<User> = {
    id: 1,
    name: "kwon",
  };

  // 3. Required<T> : 모든 프로퍼티를 필수로 변경

  // 4. Readonly<T> : 모든 프로퍼티를 읽기 전용으로  변경
}

{
  // 5. Record<K, T> : K는 키, T는 타입
  type Grade = 1 | 2 | 3 | 4;
  type Score = "A" | "B" | "C" | "D";
  const score: Record<Grade, Score> = {
    1: "A",
    2: "C",
    3: "D",
    4: "B",
  };

  // 심화
  interface User {
    id: number;
    name: string;
    age: number;
  }

  function isValid(user: User) {
    const result: Record<keyof User, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };

    return result;
  }
}

{
  // Pick<T, K> : 원하는 프로퍼티만 가져와 사용
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const admin: Pick<User, "id" | "name"> = {
    id: 1,
    name: "kwon",
  };

  // Omit<T, K> : 특정 프로퍼티만 생략
  const admin2: Omit<User, "age" | "gender"> = {
    id: 1,
    name: "kwon",
  };

  // Exclude<T1, T2> : T1 - T2 나머지 타입만 사용

  // NonNullable<Type> : 널과 undefined을 제외한 타입 생성
}
