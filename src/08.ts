// Clase con constructor

class Car {
  make: string

  constructor(make: string) {
    this.make = make
  }

  drive() {
    console.log(`Driving a ${this.make}`)
  }
}

let myCar = new Car('fiat uno')
myCar.drive()
