//Phase I

function madLib(verb, adj, noun){
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`
}

function isSubstring(searchString, subString){
    return searchString.includes(subString)
}

//Phase II

function fizzBuzz(array) {
    let res = []
    
    array.forEach(ele => {
        if (ele % 3 === 0 ^ ele % 5 === 0) {
            res.push(ele)
        }
    })

    return res
}


function isPrime(num) {
    if (num < 2) return false;

    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true
}


function sumOfNPrimes(n) {
    let final = 0;
    let count = 0;
   
    for(let i = 2; count < n; i++) {
        if (isPrime(i)) {
            final += i;
            count += 1;
        }
    }
    
    return final;
}
