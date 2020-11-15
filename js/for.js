//Ciklo for panaudojimas
//1.prideti skaicius intervale
//0-100

let sum1 = 0;
const number1 = 100;
const start1 = 0;

for (let i = start1; i <= number1; i++ ) {
    sum1 = sum1 + i;
}
console.log(sum1);

let sum = 0;
const number = 30;
const start = -70;

for (let i = start; i <= number; i++ ) {
    sum = sum + i;
}
console.log(sum);

//2.abcdef -> fedcba

let letters = '';
const word = 'abcdef';

for (let i = word.length - 1; i >= 0; i--) {
    letters = letters + word[i];
}
console.log(letters);


//3.Kiek skaiciu intervale,kurie dalijasi be liekanos is 3, 5 ir 7 atskirai
//0-11 is 3


let output = '';

for (let a = 0; a <= 11; a++) {
    if (a % 3 === 0) {
        output = output + a;
    }
}


console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${output.length} vienetai `);

//8-31

let output1 = 0;
const begin = 8;
const finish = 31;

for (let a = begin; a <= finish; a++) {
    if (a % 5 === 0) {
        output1 = output1 + 1; 
    }
}


console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${output1} vienetai `);

//-18-18

let output2 = 0;
const begin2 = -18;
const finish2 = 18;

for (let a = begin2; a <= finish2; a++) {
    if (a % 7 === 0) {
        output2 = output2 + 1;
    }
}

console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${output2} vienetai `);