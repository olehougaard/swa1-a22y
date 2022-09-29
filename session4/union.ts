function inc(x: number | string): number | string {
    if (typeof x === "number") {
        // narrowing to x: number
        return x + 1
    } else {
        return x + " "
    }
}

let ss = ['a', 'b', 'c']
let ns = [1, 2, 3]
let s: (number | string)[] = (ss as (number|string)[]).concat(ns)

function color(name: "Red" | "Green" | "Blue"): number {
    switch(name) {
        case "Red": return 0xff0000;
        case "Green": return 0xff00;
        case "Blue": return 0xff;
    }
}
