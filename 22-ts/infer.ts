
// type F<T> = T extends Array<infer U> ? U : T
type F<T> = T extends (infer U)[] ? U : T

/**
 * 类型推断只能在放在类型参数的位置，所以只能Array<infer T>
 * 不能infer U[]   但是可以(infer U)[]
 */

/**
 * infer用来提取嵌套类型的元素类型
 */
const arr: Array<F<Array<string>>> = ['1']
//       ^?


const a: F<Array<number>> = 1
//     ^?

/**
 * 函数返回类型(arg1: T1, arg2: T2, ..., argn: Tn) => R
 */
type getReturnType<T> = T extends (...args: any) => infer R ? R : any;

type Num = getReturnType<() => number>;
//     ^?

type Str = getReturnType<(x: string) => string>;


/**
 * 内置的获取函数返回类型ReturnType
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;


export { };

