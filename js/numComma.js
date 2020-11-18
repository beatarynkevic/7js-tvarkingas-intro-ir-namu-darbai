function numComma(number, position) {
    return parseFloat(number.toFixed(position));
}

const num = 3.1415;
const rez = numComma(num, 2);

console.log(rez, '->', 3.14);