console.log(Math.pow(2, 3)); //daugina kubu

function dauginimas(num) {
    const suma = num * num;
    return suma;
}
const duKv = dauginimas(2); //efektyviau

console.log(duKv);
console.log(dauginimas(4));
console.log(dauginimas(-3));
console.log(dauginimas(10));


function multiply(a, b) {
    // input validation
    if (typeof a !== 'number') {
        console.error('ERROR: pirmoji reiksme ne skaiciaus tipo.');
        return false;
    }
    // if ('' + a === 'NaN') {
    if (isNaN(a)) {
        console.error('ERROR: pirmoji reiksme ne normalus skaicius.');
        return false;
    }

    if (typeof b !== 'number') {
        console.error('ERROR: antroji reiksme ne skaiciaus tipo.');
        return false;
    }
    // if ('' + b === 'NaN') {
    if (isNaN(b)) {
        console.error('ERROR: antroji reiksme ne normalus skaicius.');
        return false;
    }

    // function logic
    const rez = a * b;

    // function result
    return rez;
}


console.log(multiply(8, 'labas'));
console.log(multiply('labas', 'ate'));
console.log(multiply('labas', true));
console.log(multiply(87, true));
console.log(multiply(87, false));
console.log(multiply(false, false));
console.log(multiply(true, false));
console.log(multiply(true, true));
console.log(multiply(45, []));
console.log(multiply(45, [2]));
console.log(multiply(45, [2, 5, 6]));
console.log(multiply(-2));
console.log(multiply());
console.log(multiply(2, NaN));
console.log(multiply(NaN, 2));

console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(-2, 5));
console.log(multiply(-2, -5));
console.log(multiply(2, Infinity));
console.log(multiply(Infinity, Infinity));
