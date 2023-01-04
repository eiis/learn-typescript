let hs: string = '1';

//利用unknown做过渡
let a: number = hs as unknown as number;

console.log(a);
