// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Un alert() espone 5 numeri generati casualmente.
var arr = [];
for (var i = 0; i < 5;i++) {
    arr.push(' ' + (Math.floor(Math.random() * 5) + 1) + ' ')
}

// Da li parte un timer di 30 secondi.
alert('questi sono i 5 numeri da ricordare: ' + arr);
var secondi = 5;
var timer = setInterval(function(){
    console.log(--secondi + 1);
    if (!secondi) {
        clearInterval(timer);
        // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    }
},1000);













