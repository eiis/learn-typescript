




let s = "hello";
let n: typeof s;

//
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;


/**
 * 
 * @param a 
 * @param b 
 * @returns 
 */
function add(a: number, b: number): number {
  return a + b;
}

type M = ReturnType<typeof add>
