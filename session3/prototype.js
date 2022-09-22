const p = {x: 100}
const o = {y: 200}
Object.setPrototypeOf(o, p) // p is the prototype of o

console.log(p.x)
console.log(o.y)
console.log(o.x)
console.log()

p.x = 111

console.log(p.x)
console.log(o.y)
console.log(o.x)
console.log()

o.x = 222
console.log(p.x)
console.log(o.y)
console.log(o.x)
console.log()

console.log(o.__proto__ === p)
