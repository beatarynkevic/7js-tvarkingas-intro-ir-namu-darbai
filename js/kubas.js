function laipsnis(base, power) {
    let rez = 1;
    for (let i = 0; i < power; i++) { 
        rez = rez * base;
    }
    return rez;
}

const kubas = laipsnis(2, 3);
console.log(kubas);

console.log(Math.pow(3, 3)); 