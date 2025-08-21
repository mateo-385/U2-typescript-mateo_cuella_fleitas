// Interfaces y clases

interface Shape {
  area(): number
}

class Circle implements Shape {
  radio: number
  constructor(radio: number) {
    this.radio = radio
  }
  area(): number {
    return Math.PI * this.radio * this.radio
  }
}

const circle = new Circle(10)
console.log(circle.area())
