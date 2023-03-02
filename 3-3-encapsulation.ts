{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    };
  
    class CoffeeMaker {
      //class 안의 멤버 변수
      private static BEANS_GRAMM_PER_SHOT: number = 7; //외부에서 전혀 접근할 필요 ❌
      private coffeeBeans: number = 0; // instance level
  
      //constructor는 오브젝트를 만들때, 항상 처음에 호출되는 함수.
      private constructor(beans: number) {
        this.coffeeBeans = beans;
      }
  
      //누군가가 constructor를 이용해 생성하는 것을 방지하고 대신 static한 함수를 이용해 만들수 있도록 유도한다.
      static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
      }
  
      // coffeeBeans를 외부에서 바꾸는것이 아니라, 함수를 통해서 valid하게 커피빈을 채우는 함수를 만들자
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
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
  
    //여기까지 문제는 무엇일까 ?
    // 외부로부터 정보를 은닉해야되는 상황. 다양한 레벨의 정보를 은닉할 수 있습니다.
    // 따라서 외부에 노출할수 있는 것은 무엇인지 클래스를 잘 디자인하는 것이 중요하겠죠?
    // public
    // private
    // protected //외부에서는 접근불가, but 상속한 자식은 접근 가능
  
    // const maker = new CoffeeMaker(32); //constructor가 private 으로 바뀜. 대신 아래와 같이 만들수 있음
    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = 3; // 외부에서 정보를 바꿔버릴수 있음..굉장히 위험한 상황
    // maker.coffeeBeans = -34 // invalid
  
    console.log(maker);
    maker.fillCoffeeBeans(35);
  
    // class User {
    //   private firstName: string;
    //   private lastName: string;
    //   get fullName(): string {
    //     return `${this.firstName} ${this.lastName}`;
    //   }
    //   constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //   }
    // } ---> 아래 코드 훨씬 깔끔!
  
    class User {
      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
      private internalAge = 4;
      get age(): number {
        return this.internalAge;
      }
      set age(num: number) {
        if (num < 0) {
          throw new Error('the value of age should be greater than 0');
        }
        this.internalAge = num;
      }
      constructor(public firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }
  
    const user = new User('Steve', 'Jobs');
    // 외부에서는 user의 internalage는 접근 할수 없지만, 대신 setter를 이용해서
    user.age = 6; //으로 세팅할수 있읍, 심지어 유효성 검사도 가능함
    console.log(user.fullName);
    user.firstName = 'elle';
    console.log(user.fullName); //why? ellie로 바꿨지만 fullname은 바뀌지 않았을까?
  }
  