// Aufgaben JS-Basics
    // 01 Aufgabe
    // Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt,
    // sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).
    // Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

        function fullName(firstName, lastName) {
            let myName = firstName + " " + lastName;
            return myName;
        }

        // console.log(fullName("Patrick", "Wagner"));

    // 02 Aufgabe
    // Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt,
    // jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
    // Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

        function capitalizeLetters(letBig) {
            letBig = letBig.toUpperCase();
            return letBig;
        }

        // console.log(capitalizeLetters("BanAnE"));
        
    // 03 Aufgabe
    // Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt
    // und die Anzahl der Zeichen in diesem String zurückgibt.
    // Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

        function countCharacters(getNumber) {
            number = getNumber.length;
            return number;
        }

        // console.log(countCharacters("banane"));
        
    // Knacker-Aufgabe
    // Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt
    // und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode,
    // um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.
    // Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

        function formatToCurrency(myCurrency) {
            currency = myCurrency.toFixed(2);
            finalCurrency = currency.replace(".",",") + "€";
            return finalCurrency;
        }

        // console.log(formatToCurrency(7.3548));

// Aufgaben DOM-Manipulation
    // Aufgabe 1
    // Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
    // Tipp: Im besten Fall bekommt der Button hier schon eine id.

    

    // Aufgabe 2
    // Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "Klick mich"