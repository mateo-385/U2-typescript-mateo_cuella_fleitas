// Genéricos (básico)

function identity<T>(valor: T): T {
  return valor
}

const num = identity<number>(42)
const str = identity<string>('hola')
const bool = identity<boolean>(true)
const arr = identity<number[]>([1, 2, 3])

console.log(num)
console.log(str)
console.log(bool)
console.log(arr)
