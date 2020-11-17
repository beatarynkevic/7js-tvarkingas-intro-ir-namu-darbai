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

function laipsnis(base, power) {
    let rez = 1;

    for (let i = 0; i < power; i++) { //0= 1*2; 1=2*2; 2=4*2;
        rez *= base;
    }
    return rez;
}
console.clear();

laipsnis(2, 3);

function faktorialas(n) {
    let rez = 1;

    for (let i = 1; i <= n; i++) { //1=1*1 2=1*2 3=2*3 4=6*4 5=24*5
        rez = rez * i;
    }
    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);
const f4 = faktorialas(4);
const f5 = faktorialas(5);

console.log(f0, '->', 1);
console.log(f1, '->', 1);
console.log(f2, '->', 2);
console.log(f3, '->', 6);
console.log(f4, '->', 24);
console.log(f5, '->', 120);

function lyginisFaktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if ( i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

// 1 * 2 * 4 * 6 * 8
const lf0 = lyginisFaktorialas(0);
const lf1 = lyginisFaktorialas(1);
const lf2 = lyginisFaktorialas(2);
const lf3 = lyginisFaktorialas(3);
const lf4 = lyginisFaktorialas(4);
const lf5 = lyginisFaktorialas(5);
const lf6 = lyginisFaktorialas(6);
const lf7 = lyginisFaktorialas(7);

console.log(lf0, '->', 1);
console.log(lf1, '->', 1);
console.log(lf2, '->', 2);
console.log(lf3, '->', 2);
console.log(lf4, '->', 8);
console.log(lf5, '->', 8);
console.log(lf6, '->', 48);
console.log(lf7, '->', 48);