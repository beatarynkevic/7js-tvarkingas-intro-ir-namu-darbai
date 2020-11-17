function bigNum (list) {
    //input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas'
    }

    const size = list.length;
    if (size === 0) {
        return 'Sarasas yra tuscias.'
    }
    //logic
    let biggestNumber = list[0];

    for (let i = 1; i < size; i++) {
        const num = list[0];
        
        //saraso elemento validacija
        if (typeof num !== 'number') {
            continue; //keyword, kuris naudojamas cikle,padaro : nueina i nauja cikla, praleides apacioje esancia logika
        }

        //logika
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    return 0;
    //return
}

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3 ]), '->', 3);

console.log(bigNum([]));
console.log(bigNum('pomidoras'));
console.log(bigNum(585));
console.log(bigNum(true));
console.log(bigNum(false));

console.log(bigNum([-5, 78, 14, 0, 18], '->', 78));
console.log(bigNum([69, 69, 69, 69, 66 ]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);

