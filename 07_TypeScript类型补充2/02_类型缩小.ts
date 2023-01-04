//类型缩小 Type Narrowing

//typeof 类型缩小
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toLowerCase());
  } else {
    console.log(id);
  }
}

//平等类型缩小(=== == !== !=)
type Direction = 'left' | 'right' | 'top' | 'bottom';
function printDirection(direction: Direction) {
  if (direction === 'right') {
    console.log(direction);
  } else {
  }
}

//instanceof
type Time = string | Date;
function printTime(time: Time) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}
export {};
//in
