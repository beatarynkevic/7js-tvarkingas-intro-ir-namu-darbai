//1.Kintamuju inicijavimas

//Data types
//Number

const age = 25;
console.log(age);

const luckyNumber = 13;
const income = 100;

//String

const city = 'Vilnius';
console.log(city);

const name = 'Beata';
const lastName = 'Rynkevic';

//Array

const math = [8,5,2,10,9];
console.log(math);

const names = ['Beata','Edita','Karolina','Demante','Ana']; //0,1,2,3,4
console.log(names);

//2.Veikmai su kintamaisiais

//Susumuoti skaiciaus tipo kintamuosius
const sum = age + luckyNumber + income;
console.log(sum);

//Sujungti teksto tipo kinstamuosius, kad tarp ju butu tarpas

const about = name + ' ' + lastName + ' ' + city;
console.log(about);

//Apskaiciuoti sarasu verte, salyga: 1-2+3-4+5

let numbers = 0;
numbers = numbers + math[0];
numbers = numbers - math[1];
numbers = numbers + math[2];
numbers = numbers - math[3];
numbers = numbers + math[4];
console.log(numbers);

/*Sujungti sarasu vertes, kuriu tipas yra tekstas,
salyga: nuo gali iki pradzios, o tarp ju kablelis ir tarpas*/

let friends = '';
friends = friends + names[4];
friends = friends + ', ' + names[3];
friends = friends + ', ' + names[2];
friends = friends + ', ' + names[1];
friends = friends + ', ' + names[0];
console.log(friends);
