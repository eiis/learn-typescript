const message = 'code';

// const flag = Boolean(message);
// console.log(flag);

//!!转成boolean类型
const flag = !!message;
console.log(flag);

//?? 逻辑操作符
const name: string | null = 'why';

//如果name有值就为name的值   没有就使用??后面的值
const content = name ?? 'hello world';
console.log(content);

export {};
