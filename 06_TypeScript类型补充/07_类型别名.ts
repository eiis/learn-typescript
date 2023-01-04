//type用于定义类型别名

type IDType = string | number | boolean;
type PonitType = {
  x: number;
  y: number;
  z?: number;
};
function printId(id: IDType) {}

function printPoint(point: PonitType) {}
export {};
