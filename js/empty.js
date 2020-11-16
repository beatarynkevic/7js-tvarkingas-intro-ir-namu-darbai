function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(5));
console.log(tusciaFunkcija('abc'));

//daugyba

function multiply(a, b) {
    // input validation
    if (typeof a !== 'number') {
        console.log('ERROR: klaida!');
        return;
    }
    
    if (typeof b !== 'number') {
        console.log('ERROR: klaida!');
    }
    // function logic
    const rez =a * b;

    // function result
    return rez;
}
console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply('labas', 5));
console.log(multiply(true, false));
