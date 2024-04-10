import {
  Tesla,
  Audi,
  Toyota,
  Honda,
  Volvo,
  Vehicle,
  Ford,
} from "./liskov-solution-b";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    // acá podemos verificar que se cumple el principio de
    // sustitución de liskov, si quisiéramos reemplazar por ej el arreglo en vez de que sea Vehicle sea de
    // Tesla el código seguiría funcionando.
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(2),
  ];

  printCarSeats(cars);
})();
