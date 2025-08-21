// Herencia de clases

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

class ElectrictCar extends Car {
  batteryLife: number

  constructor(make: string, battery: number) {
    super(make)
    this.batteryLife = battery
  }

  charge() {
    return console.log('The car is charged')
  }
}

let newElectrictCar = new ElectrictCar('tesla', 100)
newElectrictCar.charge()
