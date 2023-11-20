/*Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.*/


const parolaUtente = prompt('inserisci una parola')

function isPolindroma (parola){
    
    let isParolaPol = parola.length;


    for (let i = 0; i < isParolaPol / 2; i ++){
        if (parola[i] !== parola[isParolaPol - 1 - i]){
            return false
        } else {
            return true
        }
    }
    
}

if (isPolindroma(parolaUtente)){
    console.log('la parola è polindroma')
} else {
    console.log('la parola non è polindroma')
}