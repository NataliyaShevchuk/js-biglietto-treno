const userKm = prompt ("Ciao quanti km vuoi percorrere oggi?");
const userAge = prompt ("Quanti anni hai?");
const price = Math.round(userKm * .21)

console.log("Km che il passeggero desidera percorrere:", userKm);
console.log("L'età del passeggero:", userAge);


if (userAge < 18 ){
    console.log("Se il passeggero è minorenne, pagherà:", ( price * .8));
} else if (userAge >= 65 ){
    console.log("Se il passeggero è over 65, pagherà:", ( price * .6));
}




// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Formula percentuale = prezzo - (prezzo * sconto / 100)
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.