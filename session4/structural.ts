type ObjectType = {
    x: number,
    y: number
}

type ObjectType2 = {
    x: number,
    y: number
}

function sum(o: ObjectType2): number {
    return o.x + o.y
}

let obj: ObjectType = {
    x: 100,
    y: 200
}

// Legal:
sum(obj)
