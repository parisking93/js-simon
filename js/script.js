// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Un alert() espone 5 numeri generati casualmente.
var arr = [];
for (var i = 0; i < 5;i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}

// Da li parte un timer di 30 secondi.
alert('questi sono i 5 numeri da ricordare: ' + arr);
var secondi = 30;
var timer = setInterval(function(){
    if (!secondi) {
        clearInterval(timer);
        // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        var count = 0;
        var arrRisposte = [];
        while(count < 5) {
            var numeroUtente = parseInt(prompt('dammi il numero '));
            arrRisposte.push(numeroUtente);
            count++;
        }
        var risultato = controllaValori(arr,arrRisposte);
        console.log(risultato);
        if (risultato) {
            alert('ti sei ricordato tutti i numeri.... BRAVO');
        } else {
            alert('mi dispiace hai sbagliato')
        }
    } else {
        console.log(--secondi + 1);
    }
},1000);















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


