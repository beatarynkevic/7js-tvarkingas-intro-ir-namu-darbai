function bigNum(list) {
    //input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas'
    }

    const size = list.length;

    if (size === 0) {
        return 'Sarasas yra tuscias.'
    }

    //logic
    let biggestNumber = -Infinity;

    for (let i = 1; i < size; i++) {
        const num = list[i];

        //saraso elemento validacija
        if (typeof num !== 'number') {
            continue;
        }

        //logika
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    //post logic validation
    if (biggestNumber === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius.';
    }

    // return
    return biggestNumber;
}

// demo funkcija, skirta testams sudaryti
function sum(a, b) {
    return a + b;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(585));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([-Infinity, NaN, true, false, [], [8], [5, -9], 'ads', undefined]));
console.log(bigNum(sum));
console.log(bigNum([sum]));
console.log(bigNum({}));
console.log(bigNum([{}, {}, {}]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([77]), '->', 77);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([1, 2, 3, 2, 1]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-1, -2, -3, -4, 79, -6, -7, -8]), '->', 79);

console.log(bigNum([1, 2, 3, 2, 1, 'labas']), '->', 3);
console.log(bigNum([1, 2, 3, 'labas', 2, 1]), '->', 3);
console.log(bigNum(['labas', 1, 2, 3, 2, 1]), '->', 3);

console.log(bigNum(['labas', 'labas', 'labas', 'labas', -99999999999999]), '->', -99999999999999);
console.log(bigNum(['labas', 'labas', -99999999999999, 'labas', 'labas']), '->', -99999999999999);
console.log(bigNum([-99999999999999, 'labas', 'labas', 'labas', 'labas']), '->', -99999999999999);

console.log(bigNum([1, 2, 3, 2, 1, NaN]), '->', 3);
console.log(bigNum([1, 2, NaN, 3, 2, 1]), '->', 3);
console.log(bigNum([NaN, 1, 2, 3, 2, 1]), '->', 3);