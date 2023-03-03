{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //외부에서 전혀 접근할 필요 ❌
    private coffeeBeans: number = 0; // instance level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return { ...coffee, hasSugar: true };
    }
  }
  const machines = [new CoffeeMachine(16), new CaffeLatteMachine(16, 'Z'), new SweetCoffeeMaker(16), new CoffeeMachine(16), new CaffeLatteMachine(16, 'Z'), new SweetCoffeeMaker(16)];
  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });
}
