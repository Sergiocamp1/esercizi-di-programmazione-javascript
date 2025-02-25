/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

// Definiamo anno di nascita
var yearOfBirth = 1989;

// Definiamo anno corrente

var currentYear = 2025;

// Definiamo variabile con operazione per rivelare l'età

var age = currentYear - yearOfBirth;
console.log(`eta =  ${age}`);

//Definiamo variabile con operazione per rivelare quanti anni mancano per arrivare a 100

var remainingYears = (100 - age);
console.log(`anni mancanti = ${remainingYears}`);