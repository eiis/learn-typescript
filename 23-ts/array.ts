

/**
 * 在配置中noImplicitAny为true
 * 不导出推断为any[]类型,导出推断为never[]类型
 * 这样做的原因可能是为了防止在没有明确类型的情况下导出一个可以接受任何类型元素的数组，
 * 这可能会导致类型安全问题
 */
const arr1 = []
//      ^?const const arr1: any[]


export const arr2 = []
//            ^?const arr2: never[]


arr1.push(1)

arr2.push(1)

