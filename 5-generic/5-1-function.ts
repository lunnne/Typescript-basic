{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  //현재 위의 코드는 number 타입만 사용할 수 있다.

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  //타입이 보장이 되지 않는다. 타입이 안전하지가 않음. any를 쓰는 것은 좋지 않다.
  //이럴때 제네릭을 이용할 수있습니다.

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
