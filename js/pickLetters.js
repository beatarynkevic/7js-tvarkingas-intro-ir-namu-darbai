function pickLetters(text, step) {
    //input validation
    if (typeof text !== 'string') {
        return 'Error: pirmoji reiksme ne teksto tipo.';
    }
    if (text === '') {
        return 'Error:tekstas negali buti tuscias.';
    }
    if (typeof step !== 'number') {
        return 'Error: antroji reiksme ne skaiciaus tipo.';
    }
    const size = text.length;

    if ( step > size) {
        return 'Error: zingsnis yra per didelis'

    }
    if (step === 0) {
        return 'Error: zingsnis negali buti nulinis.'
    }
    //logic
    let rez = '';
    /*for (let i = 0; i < size; i++) {
        if (i % step === step - 1) {
            rez += text[i];
        }
    }*/
    if (step > 0) {
        const firstLettersPosition = step - 1;
        for (let i = firstLettersPosition; i < size; i += step) {
            rez += text[i];
        }
     } else {
            const firstLettersPosition = size + step;
            for (let i = firstLettersPosition; i >= 0; i += 0) {
                rez += text[i];
            }
        }
    //post logic validation

    //return
    return rez;
}

console.log(pickLetters(1561, 2));
console.log(pickLetters('1561', '2'));
console.log(pickLetters('abc', 4));
console.log(pickLetters('abc',0));

console.log(pickLetters('abc',3), '->', 'c');
console.log(pickLetters('abcdefg',2), '->', 'bdf');
console.log(pickLetters('abcdefghijkl',3), '->', 'cfill');


console.log(pickLetters('abc', -3), '->', 'a');
console.log(pickLetters('abcdefg', -2), '->', 'fdb');
console.log(pickLetters('abcdefghijkl', -3), '->', 'jgda');


console.log(pickLetters('',3));

/*
aaaaaaaaaaaaaaaaa
*/