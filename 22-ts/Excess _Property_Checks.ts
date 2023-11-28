interface SquareConfig {
  color: string;
  width: number;
}

function createSquare(config: Partial<SquareConfig>): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

const obj = {
  color: 'red', 
  width: 10
}
const mySquare = createSquare(obj)


export{}
