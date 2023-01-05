// Alles voor de increment button
var Incrementer = 0;
function Increment() {
    Incrementer++;
    document.getElementById("IncrementP").innerHTML = `Je hebt de knop ${Incrementer} keer ingedrukt.`;
}

var SecondsOnPage = 0;
setInterval(function () {
    SecondsOnPage++; document.getElementById("HowLongOnPageP").innerHTML = `Je bent al ${SecondsOnPage} seconden op deze pagina!`;
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    document.getElementById("CurrentTime").innerHTML = `Het is vandaag: ${currentDate}`;

}, 1000);

var Theme = "zwart";
ChangeTheme();
function ChangeTheme() {
    if (Theme == "wit") {
        
        Theme = "zwart";
        document.getElementById("BlackWhiteChanger").classList.add("black");
        document.getElementById("BlackWhiteChangerButton").classList.add("black");
        document.getElementById("BlackWhiteChangerP").classList.add("black");  
        
        document.getElementById("BlackWhiteChanger").classList.remove("white");
        document.getElementById("BlackWhiteChangerButton").classList.remove("white");
        document.getElementById("BlackWhiteChangerP").classList.remove("white");
        
    }
    else {
        Theme = "wit";
        document.getElementById("BlackWhiteChanger").classList.remove("black");
        document.getElementById("BlackWhiteChangerButton").classList.remove("black");
        document.getElementById("BlackWhiteChangerP").classList.remove("black");

        document.getElementById("BlackWhiteChanger").classList.add("white");
        document.getElementById("BlackWhiteChangerButton").classList.add("white");
        document.getElementById("BlackWhiteChangerP").classList.add("white");  
        
    }

    document.getElementById("BlackWhiteChangerP").innerHTML = `Het huidige kleurenthema is: ${Theme}`;
}