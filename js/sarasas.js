const pazymiai = [7, 8, 2, 5, 6];


function skaiciavimas() {
    let suma = 0;
    let vidurkis = 0;
    for (let i = 0; i < pazymiai.length; i++) {
        const pazymis = pazymiai[i];
        suma += pazymis;
    }
    vidurkis = suma / pazymiai.length;
    return vidurkis;
}

console.log(skaiciavimas(pazymiai));