interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;


const obj: ColorfulCircle = {
  color: 'red',
  radius: 10
}


export { };

