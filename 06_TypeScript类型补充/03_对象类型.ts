// Point :x/y ->对象类型
//z为可选的
//type 别名
type pointType = { x: number; y: number; z?: number };
function printPoint(point: pointType) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}
printPoint({ x: 123, y: 456 });
printPoint({ x: 123, y: 456, z: 789 });
export {};
