// Clase básica

class Car {
  make: string = 'fiat uno'

  drive() {
    console.log(`Driving a ${this.make}`)
  }
}

let myCar = new Car()
myCar.drive()
