
// type Exact<T, Shape> = T extends Shape
//   ? Exclude<keyof T, keyof Shape> extends never
//   ? T
//   : never
//   : never;

// type ExactShape = { id: string };

// declare const returnWhatIWant: (
//   func: () => Exact<{ id: string }, ExactShape>
// ) => Exact<{ id: string }, ExactShape>;

/**
 * 
 */
type Strictly<T, Shape> = Shape & {
  [key in keyof T]: key extends keyof Shape ? T[key] : never;
};

declare const returnWhatIWant: <T>(func: () => Strictly<T, { id: string }>) => T;

/**
 * ts使用的是鸭子类型或者叫结构类型
 * 因为{
    id: '1',
    notRequired: 'foo'
  }满足{
    id:string
  }
  所以不会报错
 */

/**
 * 为什么没有显示的指定泛型参数类型
 * 因为你指定了泛型参数,Strictly<T, { id: string }>的T就是你指定的泛型参数,经过Strictly不会报错
 * 如果不指定泛型参数,泛型参数根据你传入的函数返回值的类型类推断
 * 这样经过Strictly就会变成{
 * id:number,
 * notRequired:never
 * }
 */

returnWhatIWant(() => (
  {
    id: '1',
    notRequired: 'foo'  // TypeScript will now error here
  }
));


let value: unknown;
/**
 * 类型断言的语法不能用于赋值操作
 */
// (value as string) = 'hello';
value = 'hello';

(value as string).toUpperCase()
if (typeof value === 'string') {
  value.toUpperCase();  // OK, 因为现在我们确定了 value 的类型为 'string'
}
