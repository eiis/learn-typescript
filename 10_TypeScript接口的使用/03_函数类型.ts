// type Fn = (n1: number, n2: number) => number;
interface Fn {
  (n1: number, n2: number): number;
}

function calc(num1: number, num2: number, Fn: Fn) {
  return Fn(num1, num2);
}
const add: Fn = (num1, num2) => {
  return num1 + num2;
};

calc(10, 20, add);
