{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    //class 안의 멤버 변수
    private static BEANS_GRAMM_PER_SHOT: number = 7; //외부에서 전혀 접근할 필요 ❌
    private coffeeBeans: number = 0; // instance level

    //constructor는 오브젝트를 만들때, 항상 처음에 호출되는 함수.
    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    //누군가가 constructor를 이용해 생성하는 것을 방지하고 대신 static한 함수를 이용해 만들수 있도록 유도한다.
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // coffeeBeans를 외부에서 바꾸는것이 아니라, 함수를 통해서 valid하게 커피빈을 채우는 함수를 만들자
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`gridn beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log('heating up...!');
    }
    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    clean(): void {
      console.log('cleaning the machine');
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateuerUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarisata {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateuerUser(maker);
  const pro = new ProBarisata(maker);

  amateur.makeCoffee();
  pro.makeCoffee();

  //   //encapsulation 을 통한 추상화
  //   const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   maker.fillCoffeeBeans(32);
  //   maker.makeCoffee(2);
  //   //interface를 통한 추상화
  //   const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  //   maker2.clean();
  //   maker2.fillCoffeeBeans(32);
  //   maker2.makeCoffee(2);
}
