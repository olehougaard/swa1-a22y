// Higher-order functions

type Pet = { type: string, name: string, age: number }

const pets: Pet[] = [
    {type: 'dog', name:'Fido', age: 7}, 
    {type: 'cat', name: 'Hannibal', age: 2}, 
    {type: 'dog', name: 'Rover', age: 3},
    {type: 'dragon', name: 'Fluffykins', age: 673}]

function getNames(ps: Pet[]): string[] {
    let names: string[] = []
    for(let p of ps) {
        names.push(p.name)
    }
    return names
}

function getAges(ps: Pet[]): number[] {
    let names: number[] = []
    for(let p of ps) {
        names.push(p.age)
    }
    return names
}

function map<T, U>(xs: T[], f: (_:T) => U): U[] {
    let names: U[] = []
    for(let x of xs) {
        names.push(f(x))
    }
    return names
}

const getNames2 = (ps: Pet[]) => map(ps, p => p.name)
const getAges2 = (ps: Pet[]) => map(ps, p => p.age)

const getNames3 = (ps: Pet[]) => ps.map(p => p.name)
const getAges3 = (ps: Pet[]) => ps.map(p => p.age)

const dogs = pets.filter(p => p.type === 'dog')

const dogAges = pets
    .filter(p => p.type === 'dog')
    .map(p => p.age)

function sum(ns: number[]): number {
    let sum = 0
    for(let n of ns)
        sum += n
    return sum
}

const avg = (ns: number[]) => sum(ns) / ns.length

function reduce<T, U>(ns: T[], update: (_: U, __:T) => U,  init: U): U {
    let result = init
    for(let n of ns)
        result = update(result, n)
    return result
}

const avgDogAge = pets
    .filter(p => p.type === 'dog')
    .map(p => p.age)
    .reduce((sum, a) => sum + a, 0) / pets.length


