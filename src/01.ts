// 1
{
  function add(num1: number, num2: number) {
    console.log(num1 + num2);
  }

  // 에러
  // add(1);
  // 정상
  add(1, 2);
  // 에러
  // add(1, 2, 3);

  // 2
  function showItems(arr: number[]) {
    arr.forEach((item) => {
      console.log(item);
    });
  }
  showItems([1, 2, 3, 4]);
}
