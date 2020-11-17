//Funkcija pavadinimu skaitmenu kiekis skaiciuje

function numLength(num) {
    //input validation
    if (type !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ('' + num === 'NaN') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    //logic
    const textNum = '' + num;
    let size = textNum.length;
    if (num < 0) {
        console.log ('radau minusa');
        size--; //penktaas matematinis operatorius %
    }
    if (num % 1 !== 0) {
        size--;
    }
    //return
    return size;
}
console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(Infinity));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(4e7), '->', 8);
console.log(numLength(3, 1415), '->', 1);
console.log(numLength(-5), '->', 1);
console.log(numLength(-3, 1415), '->', 1);
console.log(numLength(2.2), '->', 2);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-3.1415), '->', 5);
console.log('------------');

