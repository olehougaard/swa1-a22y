type House = {
    getAddress(): string
}

function createHouse(address: string): House {
    function getAddress() { return address }
    return { getAddress }
}

type Colored = {
    getColor(): number
}

function createColored(color: number): Colored {
    function getColor() { return color }
    return { getColor }
}

function ColoredHouse(address: string, color: number): Colored & House {
    return { ...createHouse(address), ...createColored(color) }
}

let ch = ColoredHouse("Over there", 0xff0000)
console.log(ch.getAddress())
console.log(ch.getColor())

