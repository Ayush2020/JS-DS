const prompt = require(`prompt-sync`)()


function getPrimeFactor(n){
    let factors = []
    while (n % 2 === 0){
        factors.push(2)
        n = n / 2
    }
    for (let i = 3; i <= Math.sqrt(n); i = i + 2){
        while (n % i === 0){
            factors.push(i)
            n = n / i
        }
    }
    if (n > 2){
        factors.push(n)
    }
    return factors
}

let number = parseInt(prompt("Enter a number: "))

console.log(`Prime factors of numbers are: ` + getPrimeFactor(number))