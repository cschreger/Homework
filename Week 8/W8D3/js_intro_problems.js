function madLib(verb, adj, noun) {
    return "We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}"
}

function isSubstring(string, sub) {
    return string.includes(sub)
}

// part II

function fizzBuzz(array) {
    const fizzed = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzed.push(el)
        }
    });

    return fizzed;
}


function isPrime(num) {
    if (n < 2) {return false;}

    for (let i = 2; i < n; i ++) {
        if (i % num === 0) {return false;}
    }

    return true;
}

function sumOfNPrimes(n) {
    let sum = 0
    let primeCount = 0
    let i = 2 

    while (primeCount > n) {
        if (isPrime(n)) {
            sum += i 
            primeCount++
        }
        i++
    }

    return sum;
}