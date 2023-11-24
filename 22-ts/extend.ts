interface BasicAddress {
  name?: string;
  street?: string;
  city?: string;
  country?: string;
  postalCode?: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string
}

const obj: AddressWithUnit = {
  unit: 'hangzhou'
}

console.log(obj)


//extend 多种类型 只有接口可以继承
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle { }

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

console.log(cc);


export { };
