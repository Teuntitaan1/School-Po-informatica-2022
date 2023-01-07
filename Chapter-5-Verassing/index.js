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

// alles voor de string reverser

function ReverseStringFunction(str) {
    // Step 1. Use the split() method to return a new array
    var SplitString = str.split(""); // var splitString = "hello".split("");

    var ReverseArray = SplitString.reverse(); 
    var JoinArray = ReverseArray.join(""); 
    return str.split("").reverse().join("");
}


function ReverseString() {
    if (!document.getElementById("StringToReverse").value == "") {
        document.getElementById("ReverseOutput").innerHTML += `${ReverseStringFunction(document.getElementById("StringToReverse").value)}<br>`;
    }
}

//alles voor de rekenmachine 
function EvalString() {
    var Output = "";
    try {
        Output = eval(document.getElementById("StringToEval").value);
    } catch {
        Output = "Error, er zit een fout in de input.";
    }
    if (!document.getElementById("StringToEval").value == "") {
    document.getElementById("CalcOutput").innerHTML += `${document.getElementById("StringToEval").value} = ${Output}<br>`;
    }
}