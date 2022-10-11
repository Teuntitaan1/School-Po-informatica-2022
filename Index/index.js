// haalt de laatst gekozen thema uit de localstorage en update de website naar dat thema, als de key "Theme" niet bestaat zet hij het thema automatisch naar "light"
CurrentTheme = localStorage.getItem("Theme");
if (CurrentTheme == null) {
    CurrentTheme = "light";
} 
ChangeTheme();

// elke keer dat de user zijn systeemsettings veranderd vangt de browser hem hier op
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    CurrentTheme = event.matches ? "dark" : "light";
    console.log(`Systeemsettings verandering gedetecteerd, verander kleurenthema naar ${CurrentTheme}!`);
    ChangeTheme();
});
// deze wordt uitgevoerd wanneer de user de knop indrukt
function ToggleButtonClicked() {
    // draait de kleur om van wit naar zwart of andersom
    CurrentTheme = CurrentTheme == "light" ? "dark" : "light"; 
    ChangeTheme();
}

// deze functie update de body tag naar de juiste stand, hier hangt het hele document vanaf
function ChangeTheme() {
    
    if (CurrentTheme == "dark") {
        
        if (document.body.classList.contains("DarkTheme") != true) {
            document.body.classList.add("DarkTheme"); 
        }

    }
    else {
        document.body.classList.remove("DarkTheme")
    }
    // updated de local storage met het huidige thema zodat, in het geval dat de gebruiker de site verlaat deze bewaard blijft
    localStorage.setItem("Theme", CurrentTheme);
}

