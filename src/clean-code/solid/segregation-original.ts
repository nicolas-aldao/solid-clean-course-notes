// una clase o componente no debería estar obligado a interfaces que no utilicen
interface Bird {
  fly(): number;
  eat(): void;
}

class Tucan implements Bird {
  public fly() {
    return 100;
  }
  public eat() {}
}

class Humminbird implements Bird {
  public fly() {
    return 200;
  }
  public eat() {}
}

class Ostrich implements Bird {
  public eat() {}
  // las clases o componentes no deberían estar obligados a usar interfaces o métodos que no utilicen
  public fly() {
    throw new Error("Ostrichs don't fly.");
  }
}

class Penguin implements Bird {
  public eat() {}
  public fly() {
    throw new Error("Penguins don't fly.");
  }
}
