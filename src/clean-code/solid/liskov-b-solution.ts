export abstract class Vehicle { // al ser abstracta todos las clases que hereden de esta van a
  // tener que implementar las firmas de los métodos declarados acá
  // getNumberOfSeats():number {
  //     throw Error('Method not implemented');
  // }
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Volvo extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
