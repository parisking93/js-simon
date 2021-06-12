// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Un alert() espone 5 numeri generati casualmente.
var arr = numRandUni(5,1,100);
// Da li parte un timer di 30 secondi.
alert('questi sono i 5 numeri da ricordare: ' + arr);
var secondi = 5;
var timer = setInterval(function(){
    if (!secondi) {
        clearInterval(timer);
        // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

        var count = 0;
        var arrRisposte = [];
        while(count < 5) {
            var numeroUtente = parseInt(prompt('dammi un numero '));
            if (!arrRisposte.includes(numeroUtente)) {
                arrRisposte.push(numeroUtente);
                count++;
            } else {
                alert('non puoi inserire due volte lo stesso numero... per favore inserisci un altro numero');
            }
        }
        var risultato = controllaValori(arr,arrRisposte);
        if (risultato) {
            alert('ti sei ricordato tutti i numeri.... BRAVO');
        } else {
            alert('mi dispiace hai sbagliato')
        }
    } else {
        console.log(--secondi + 1);
    }
},1000);





function numRandUni(lunghezza,min,max) {
    var arr = [];
    var j = 0;
    while (j < lunghezza) {
        var randomNumber = Math.floor((Math.random() * ((max + 1) - min) + min));
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
            j++;
        } 
    }
    return arr;
}








function controllaValori(array1,array2) {
    var numeriUguali = 0;
    for(var i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            numeriUguali +=1;
            console.log(numeriUguali);
        }
    }
    if (numeriUguali == 5) {
        return true;
    } else {
        return false;
    }
}


