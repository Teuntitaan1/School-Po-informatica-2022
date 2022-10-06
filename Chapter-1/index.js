var Startvalue = 0;

// deze runt pas nadat de pagina is geladen, anders bestaat clickcounter nog niet
window.onload = function settext() {
    document.getElementById("Clickcounter").innerText = `Je hebt de knop ${Startvalue} keer ingedrukt!`;
}
// doet de startvalue variabel + 1 en update de text zodat het klopt
function Increment() {
    Startvalue += 1;
    document.getElementById("Clickcounter").innerText = `Je hebt de knop ${Startvalue} keer ingedrukt!`;
}



