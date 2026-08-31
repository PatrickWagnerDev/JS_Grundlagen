// Scopes
    // Scopes definieren wer auf welche Variablen zugreifen kann
    // eine Variable direkt im Script ohne etwas herum ist global und für alle Nutzbar
    // Eine Variable in einer Funktion ist nur in dieser Funktion und weiter darin nutzbar
    // Variablen können weiter nach innen verwendet werden, aber nicht nach außen

    function scopeTest() {
        let testScopeVar = "Hello World!";
        if(true){
            console.log(testScopeVar);
        }
        console.log(testScopeVar);
    }