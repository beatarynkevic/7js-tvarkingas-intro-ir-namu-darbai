const wordList = ['labas', 'rytas', 'Lietuva'];

/*
Einame per zodziu sarasa 
    Pasiimu viena konkretu zodi
    Pasiruosiu kintamaji naujam atvirkstiniam zodziui
    Einu per to zodzio raides
        Pasiimu to zodzio raide
        Pasidedu is priekio atvirkstiniam zodziui
    Atspausdinu atvr. zodi
*/

for (let w = 0; w < wordList.length; w++) {
    const word = wordList[w];
    let backward = '';
    console.log(word);

    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;
    }
    console.log(backward);
}

//const pirmas1 = 21;
//const antras2 = 41;
//const suma2 = pirmas1 + antras2;
//console.log(`${pirmas1} + ${antras2} = ${suma2}`);

function sumavimas(a, b, c, d) {
    const suma = a + b + c +d;
    console.log(`${a} + ${b} + ${c} + ${d} = ${suma}`);
}

sumavimas(2, 5, 3, 6);

console.clear();

function pazymiuVidurkis (list) {          
    //console.log(list);
    let suma = 0;
    const kiekis = list.length; //kiek skaiciu yra
   
    for (let i = 0; i < kiekis; i++) { // nusakome cikla ir kai ivyksta pirmas ciklas
        const pazymys = list[i];       // laiko savyje duomenis apie tai koks ura pirmas skaicius, antras, trecias
        suma = suma + pazymys;        //sumuoja pazymius

    }
    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturiu pazymiu...')
    } else {
        console.log(`Vidurkis: ${vidurkis}`);
    }

}

pazymiuVidurkis([5, 8, 10]);
pazymiuVidurkis([5, 8]);
pazymiuVidurkis([0, 0, 0]);
pazymiuVidurkis([10, 10, 10, 10]);

function kvadratu(num) {
    const rez = num * num;
    return rez;
}

const duKv = kvadratu(2);
const trysKv = kvadratu(3);

console.log(duKv);
console.log(trysKv);

function laipsnis(base, power) {
    let rez = 1;

    for (let i = 0; i < power; i++) {
    rez = rez * base;
    }
    return rez;
}

const kubas3 = laipsnis(3, 3);
console.log(3, '->', kubas3);

const kubas2 = laipsnis(2, 3);
console.log(2, '->', kubas2);

console.clear();

function faktorialas(n) {
    let rez = 1;

    for (let i = 1; i <= n; i++) { //nuo 1 iki n-tojo imtinai
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
        if (i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

//  1 * 2 * 4* 6 * 8
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