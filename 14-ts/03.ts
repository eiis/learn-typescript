let sum = (a: number, b: number, ratio?: number) => {
  ratio = ratio || 0.8;
  return (a + b) * ratio;
};

console.log(sum(1, 2));
