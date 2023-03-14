console.log(this);

//window를 가르킴 
function simpleFunc() {
  console.log(this);
} 
window.simpleFunc(); 
console.clear();

//class를 가르킴 
class Counter {
  count = 0;
  increase = () => {
    // console.log(this);
  }; // arrow function 을 이용하면, bind 키워드를 써주지 않아도 된다.
}
const counter = new Counter();
counter.increase();
const caller = counter.increase; // undefined 
//이럴 때, this를 잃어 버리지 않기 위해서 bind를 해준다. 
//const caller = counter.increase.bind(counter);

caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this는 bob을 가르킴 
