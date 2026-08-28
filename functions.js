// Beispiel ohne Funktion
    // Nach jeder Varaiablenänderung muss ein neuer console.log ausgeführt werden mit der Berechnung

    let discount = 50;
    let price = 500;

    // console.log((price - discount) * 1.19);

    price = 400;

    // console.log((price - discount) * 1.19);

// Funktion
    // Grundaufbau
        //Keyword   Funktionsname   Parameterbereich    Funktionskörper
        //function  myName          ()                  { }

        // Funktionsdefinition
        function logCalcPrice() {
            console.log((price - discount) * 1.19);
        }

        // Funktionscall
        // logCalcPrice();

        price = 300;

        // logCalcPrice();

    // Parameter
        // Parameter sind wie Variablen, aber nur für die Funktion
        // Außerhalb der Funktion sind Parameter nicht definiert

        function logCalcPricePara(ParaDiscount, ParaPrice) {
            console.log((ParaPrice - ParaDiscount) * 1.19);
        }

        // Im Funktionscall werden die Parameter definiert
        // logCalcPricePara(30, 725);

        // logCalcPricePara(12, 424);

    // Return
        // Mit return wird am Ende einer Funktion etwas ausgegeben
        // Ohne return wird nur die Funktion ohne Ausgabe ausgeführt, also undefined

        