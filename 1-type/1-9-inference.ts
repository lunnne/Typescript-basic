{
  /**
   * 타입추론은 무엇?, 써도 되나?
   * Type Inference
   * TS에서 알아서 타입이 자동으로 추론되는 경우가 있다.
   * 프리미티브 타입, 혹은 void 같은 경우, 생략이 가능하지만
   * 팀의 스타일가이드를 따라서!! 타입을 명시해주는 것이 중요합니다.
   */

  let text = 'hello'; //ts가 직접 string이라고 추론해줌
  function print(message = 'hello') {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
