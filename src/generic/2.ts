type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання:
const topObject = {
  name: "Object1",
  position: 1,
  color: "Red",
  weight: 10,
};

const bottomObject = {
  name: "Object2",
  position: 2,
  color: "Blue",
  weight: 5,
};

const result = compare(topObject, bottomObject);
console.log(result);
export{}