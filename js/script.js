// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.getElementById('gioca').addEventListener('click', function(){
    // pulisco countdown se non è la prima volta che gioca 
    document.getElementById('countdown').innerHTML = "";
    // Un alert() espone 5 numeri generati casualmente.
    var arr = numRandUni(5,1,100);
    // Da li parte un timer di 30 secondi.
    alert('questi sono i 5 numeri da ricordare: ' + arr);
    var secondi = 30;
    var stopGame = false; 
    var timer = setInterval(function(){
        if (!secondi) {
            document.getElementById('countdown').innerHTML = "";
            clearInterval(timer);
            // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
            var count = 0;
            var arrRisposte = [];
            while(count < 5) {
                var numeroUtente = prompt('dammi il ' + (count + 1) + '°' + ' numero ');

                // controlli input 
                if (numeroUtente == null) {
                    count = 5;
                    stopGame = true;
                } else {
                    numeroUtente = parseInt(numeroUtente);
                    if (isNaN(numeroUtente)) {
                        alert('puoi inserire solo  numeri e non puoi lasiare il campo vuoto')
                    } else if (!arrRisposte.includes(numeroUtente)) {
                        arrRisposte.push(numeroUtente);
                        count++;
                    } else {
                        alert('non puoi inserire due volte lo stesso numero... per favore inserisci un altro numero');
                    }
                }
                // fine controlli input 
            }
            var risultato = controllaValori(arr,arrRisposte);
            if (risultato && !stopGame) {
                alert('ti sei ricordato tutti i numeri.... BRAVO');
            } else if(!risultato && !stopGame) {
                alert('mi dispiace hai sbagliato')

            } else {
                setTimeout(function() {
                    document.getElementById('countdown').innerHTML = "grazie per aver giocato!";
                },300)
            }
        } else {
            document.getElementById('countdown').innerHTML = (--secondi + 1);
        }
    },1000);

});





// FUNZIONI 

// funzione per creare un array di numeri random
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

// funzione per controllare se un array è uguale all'altro
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


