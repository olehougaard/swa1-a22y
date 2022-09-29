function identity<T>(x: T): T {
    return x
}

let a = 7
let b = identity(a)

function concat<T>(a: T[], b:T[]): T[] {
    return a.concat(b)
}

function len(a: any[]): number {
    return a.length
}

type Geometry = {
    width(): number,
    height(): number,
    rotate(degrees: number): Geometry,
    move(x: number, y: number): Geometry,
    mirror(): Geometry
}

type MR = {
    rotate(degrees: number): MR,
    move(x: number, y: number): MR
}

function translate<T extends {rotate(d:number):T, move(x:number, y:number): T}>
    (g: T, degrees: number, x: number, y: number): T {
    return g.rotate(degrees).move(x, y)
}
