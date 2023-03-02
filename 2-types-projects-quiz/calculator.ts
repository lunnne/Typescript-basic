/**
 * Let's make a calculator 🧮
 */

type Operator = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(operator: string, a: number, b: number): number {
  switch (operator) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
      break;
    case 'divide':
      return a / b;
      break;
    case 'remainder':
      return a % b;
      break;
    default:
      throw new Error('unknown command'); //default!!
  }
}

//

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
