{
  /**
   * Type Assertions 💩
   * 가끔 불가피하게 타입을 강요할때가 있다. 결코 좋은것은 아님!
   * 내가 정말 100% 장담할때 그럴때만 사용하세요
   */

  //불가피한 경우
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc(); //타입이 정해져 있기 때문에, result.length를 string api를 쓸수 없다.
  //난 string 타입인게 확실해!라고 할때
  console.log((result as string).length); //type casting 2가지 방법
  console.log(<string>result.length);

  // scary example. 어플리케이션 종료..
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); //😱 느낌표를 붙이면, 장담한다는 뜻!

  //실전에서 일어날 수 있는 한가지 예제
  const button = document.querySelector('class')!;
  if (button) {
    button.nodeValue;
  }
}
