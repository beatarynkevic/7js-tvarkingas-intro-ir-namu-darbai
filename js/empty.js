//1.Funkcija pavadinimu 'tusciaFunkcija':
//a.nepriima jokiu kintamuju - reiskia ,kad skliaustai tusti
//b.neatlieka jokios vidines logikos
//c. grazina boolean tipo reiksme 'false'

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());
//test
console.log(tusciaFunkcija(5));
console.log(tusciaFunkcija('asdsf'));

//2.Funkcija pavadinimu 'daugyba':
//a.priima du skaičiaus tipo kintamuosius
//b.atskirame kintamajame įsimena sandaugos reikšmę
//c.gražina saudaugos rezultatą

/*TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
 */

function multiply(a, b) {
    
    //input validation

    //jeigu a nera skaicius, tai rodom klaida
    if (typeof a !== 'number') {
        console.error('Error: pirmoji reiksme yra neteisinga');
        return false;
    }                                                             // a||b netinka, nes turime tiksliai zinoti, kur nesutampa 

    if (isNaN(a)) { 
        console.log('Error: pirmoji reikmse ne normalus')
        return false;
    }

    //jeigu b nera skaicius, tai rodom klaida
    if (typeof b !== 'number') {
        console.error('Error: antroji reiksme yra neteisinga');
        return false;
    }

    if (isNaN(b)) { 
        console.log('Error: pirmoji reikmse ne normalus')
        return false;
    }

    //function logic
    const rez = a * b;

    // function result
    return rez;
}

console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(-2, 5));

console.log(multiply(8, 'labas'));
console.log(multiply(false, false));
console.log(multiply(2, true));
console.log(multiply(NaN, 1));
console.log(multiply(2, Infinity));