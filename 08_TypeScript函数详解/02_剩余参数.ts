//传进来的参数会放在nums数组中
function sum(...nums: number[]) {
  console.log(nums);
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(20, 30));
console.log(sum(20, 30, 40));
console.log(sum(20, 30, 40, 50));
export {};
