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

function pazymiuVidurkis (list) {          
    //console.log(list);
    let suma = 0;
    const kiekis = list.length; //kiek skaiciu yra
   
    for (let i = 0; i < kiekis; i++) { // nusakome cikla ir kai ivyksta pirmas ciklas
        const pazymys = list[i];       // laiko savyje duomenis apie tai koks ura pirmas skaicius, antras, trecias
        console.log(list[i]); 
        suma = suma + pazymys;        //sumuoja pazymius

    }
    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturiu pazymiu...')
    } else {
        console.log(`Vidukis: ${vidurkis}`);
    }

}

pazymiuVidurkis([5, 8, 10]);
pazymiuVidurkis([5, 8]);
pazymiuVidurkis([0, 0, 0]);
pazymiuVidurkis([10, 10, 10, 10]);