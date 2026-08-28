// Beispiel ohne Funktion
    // Nach jeder Varaiablenänderung muss ein neuer console.log ausgeführt werden mit der Berechnung

    let discount = 50;
    let price = 500;

    // console.log((price - discount) * 1.19);

    price = 400;

    // console.log((price - discount) * 1.19);

// Funktion
    //Keyword   Funktionsname   Parameterbereich    Funktionskörper
    //function  myName          ()                  { }

    function logCalcPrice() {
        console.log((price - discount) * 1.19);
    }

    // logCalcPrice();

    price = 300;

    // logCalcPrice();

    