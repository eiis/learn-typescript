// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Left);
