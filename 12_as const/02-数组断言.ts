function hd() {
  let a = 'coder';
  let b = (x: number, y: number): number => x + y;
  return [a, b] as const;
}

const [n, m] = hd();
console.log(m(1, 3));
