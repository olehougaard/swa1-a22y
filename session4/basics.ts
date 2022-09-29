let x = 7

// x = "seven" ERROR

function inc(x?: number): number {
    return (x ?? 0) + 1
}

function incAlt(x = 0) {
    return x + 1
}

let a = [1, 2, 3]

a.push(7)
// a.push("seven") ERROR

// Always type empty array explicitly
let b: number[] = []
