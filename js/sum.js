const pirmas1 = 2;
const antras1 = 2;
const suma1 = pirmas1 + antras1;
console.log(`${pirmas1} + ${antras1} = ${suma1}`);

function sumavimas(a, b) {
const suma =a + b;
console.log(`${a} + ${b} = ${suma}`);
}
sumavimas(2,5);

function pazymiuVidurkis(list) {
    let suma2 = 0;
    const kiekis = list.length;
    const vidurkis = suma2 / kiekis;

    console.log(`Vidurkis: ${vidurkis}`);
}

pazymiuVidurkis([5, 8, 9]);

function dauginimas(a) {
    const kvadratu = a * a;
    return kvadratu;
}

const duKv = dauginimas(2);
const ketKv = dauginimas(4);

console.log(duKv);
console.log(ketKv);
console.log(dauginimas(10));


function laipsnis(base, power) {
    let rez = 1;

    for (let i = 0; i < power; i++) {
        rez = rez * base;
    }

    return rez;
}

laipsnis(2, 3);
