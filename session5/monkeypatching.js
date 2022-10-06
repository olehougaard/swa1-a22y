Number.prototype.power = function(n) {
    if (!Number.isInteger(n) || n < 0)
        return NaN
    if (n === 0)
        return 1
    else if (n % 2 === 0)
        return (this * this).power(n / 2)
    else   
        return this * this.power(n - 1)
}

let m = 2
console.log(m.power(10))

console.log((2).power(10))