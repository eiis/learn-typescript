//'code'也可以作为类型 叫做字面量类型
const message: 'code' = 'code';

//字面量类型的意义 结合联合类型使用
type Alignment = 'left' | 'right' | 'center' |(string &{});
let align: Alignment = 'bottom';
align = 'right';
align = 'center';
export {};
