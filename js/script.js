const btn = document.getElementById('calculate');
const btn_reset = document.getElementById('reset');

// Pulsante in attesa del click

btn.addEventListener('click', function() {


    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;

    //Calcolo prezzo

    let final_price = km * 0.21;
    let message = `<h2> Il prezzo del tup biglietto è pari a ${final_price.toFixed(2)}</h2>`;

    //Verifico ETA

    if(age == 1) {
        final_price *= 0.8;
        message = `<h2> Il prezzo del tup biglietto è pari a ${final_price.toFixed(2)}. Sei minorenne hai diritto ad uno sconto</h2>`;

    }
    else if (age == 2) {
        final_price *= 0.6;
         
    }

    //genero mesaggio

    console.log(document.getElementById('message').innerHTML);
    //messaggio nel DOM
    document.getElementById('message').innerHTML = message;

})

document.addEventListener('DOMContentLoaded', function () {
    let btn_reset = document.getElementById('btn_reset');

    btn_reset.addEventListener('click', function () {
        document.getElementById('km').value = '';
        document.getElementById('age').value = '';
        document.getElementById('message').innerHTML = '';
    });
});