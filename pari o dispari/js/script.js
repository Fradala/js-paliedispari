/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto.*/


let userNumber = parseInt(prompt('scegli un numero da 1 a 5'))

console.log(userNumber)

function randomNumber (minNumber, maxNamber){
    return Math.floor(Math.random () * (maxNamber - minNumber + 1) + minNumber)
    
}



let aiNumber = randomNumber(1, 5)
console.log(randomNumber (1, 5))


const somma = userNumber + aiNumber
console.log(somma)


function oddOrEven (number){
    if (number % 2 === 0){
        return 'pari'
    } else {
        return 'dispari'
    }
}
const variabile = oddOrEven(somma);
console.log(variabile)

if (somma % 2  === 0 ){
    console.log('ha vinto il bot')
} else {
    console.log(' ha vinto la persona')
}



