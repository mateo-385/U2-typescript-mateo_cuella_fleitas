// Enum

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

function getColor(color: Color): string {
  return `The color is ${color as Color}`
}

console.log(getColor(Color.Red))
