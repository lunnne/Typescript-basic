{
  /**
   * Type Assertions π©
   * κ°λ λΆκ°νΌνκ² νμμ κ°μν λκ° μλ€. κ²°μ½ μ’μκ²μ μλ!
   * λ΄κ° μ λ§ 100% μ₯λ΄ν λ κ·Έλ΄λλ§ μ¬μ©νμΈμ
   */

  //λΆκ°νΌν κ²½μ°
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc(); //νμμ΄ μ ν΄μ Έ μκΈ° λλ¬Έμ, result.lengthλ₯Ό string apiλ₯Ό μΈμ μλ€.
  //λ string νμμΈκ² νμ€ν΄!λΌκ³  ν λ
  console.log((result as string).length); //type casting 2κ°μ§ λ°©λ²
  console.log(<string>result.length);

  // scary example. μ΄νλ¦¬μΌμ΄μ μ’λ£..
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); //π± λλνλ₯Ό λΆμ΄λ©΄, μ₯λ΄νλ€λ λ»!

  //μ€μ μμ μΌμ΄λ  μ μλ νκ°μ§ μμ 
  const button = document.querySelector('class')!;
  if (button) {
    button.nodeValue;
  }
}
