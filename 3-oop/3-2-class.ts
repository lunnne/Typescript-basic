{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    //class 안의 멤버 변수에는 const,let,혹은 function 을 붙이지 않아도 된다.
    static BEANS_GRAMM_PER_SHOT: number = 7; // 변하지 않는 숫자예요. class level 인스턴스를 만들때마다 생성되지 않아 메모리 줄여줌
    coffeeBeans: number = 0; // instance level

    //constructor는 오브젝트(인스턴스)를 만들때, 항상 처음에 호출되는 함수.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    
    //static은 멤버변수 뿐만아니라 함수에서도 적용이 됨니다. 만약 constructor을 호출하지 않고 새로운 커피기계를 만들고 싶을때
    static makeMachine(coffeeBeans:number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  const maker3 = CoffeeMaker.makeMachine(3)
}
