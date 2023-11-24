class Point {
  x: number;
  y: number;

  constructor() {
    this.x = 10
    this.y = 10
  }
}

const pt = new Point()
pt.x = 11;
console.log(`${pt.x}, ${pt.y}`);
