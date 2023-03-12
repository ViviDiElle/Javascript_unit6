function saluto() {
document.querySelector("h1").innerText="Benvenuto utente!";
}

function background() {
    document.querySelector("body").classList.add("background-color-bg");
}

function indirizzo() {
    let intestazione = "Indirizzo salvato :  "
    let inputValore = document.querySelector('input').value;
    let indirizzoCompleto = intestazione + inputValore;
    console.log(indirizzoCompleto);

    let idIndirizzo = document.getElementById ("input-indirizzo")
    let idTesto = document.createElement ('div')
    idTesto.innerHTML = indirizzoCompleto;
    idTesto.setAttribute("id", "testo-indirizzo")
    idIndirizzo.appendChild(idTesto)
}