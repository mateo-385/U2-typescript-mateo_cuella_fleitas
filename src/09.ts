// Clase con propiedades privadas

class Car {
  private make: string

  constructor(make: string) {
    this.make = make
  }

  drive() {
    console.log(`Driving a ${this.getMake()}`)
  }

  getMake() {
    return this.make
  }
}

let myCar = new Car('fiat uno')
myCar.drive()
