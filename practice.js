// Aufgaben JS-Basics
    // 01 Aufgabe
    // Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt,
    // sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).
    // Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

        function fullName(firstName, lastName) {
            let myName = firstName + " " + lastName;
            return myName;
        }

        console.log(fullName("Patrick", "Wagner"));

    // 02 Aufgabe
    // Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt,
    // jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
    // Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

        function capitalizeLetters(letBig) {
            letBig = letBig.toUpperCase();
            return letBig;
        }

        console.log(capitalizeLetters("BanAnE"));
        
    // 03 Aufgabe
    // Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt
    // und die Anzahl der Zeichen in diesem String zurückgibt.
    // Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

        function countCharacters(getNumber) {
            number = getNumber.length;
            return number;
        }

        console.log(countCharacters("banane"));
        
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

        console.log(formatToCurrency(7.3548));

// Aufgaben DOM-Manipulation
    // Aufgabe 1
    // Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
    // Tipp: Im besten Fall bekommt der Button hier schon eine id.



    // Aufgabe 2
    // Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "Klick mich"


// Aufgaben zu setAttribut
    // Aufgabe 1
    // Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.

        // Done: <p id="practice_p">Practice</p>

    // Aufgabe 2
    // Füge mit JavaScript dem p-tag einen title hinzu.
    // Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen, mehr dazu z.B. hier:
    // https://www.w3schools.com/tags/att_global_title.asp

        document.getElementById('practice_p').setAttribute('title', "Eine Übung");

    // Aufgabe 3
    // Kannst du auch eine css class mit setAttribute hinzufügen?

        document.getElementById('practice_p').setAttribute('class', 'test_class');

    // Aufgabe 4
    // Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?
    // Hinweis: Füge hierzu vorher schon einmal eine andere class ein!

        // setAttribute("class", "test_class") für eine neue Klasse hinzu und überschreibt gegebenfalls andere schon vorhandene
        // classList.add("test_class") fügt, wenn schon vorhanden, die Klasse dem Tag zu und überschreibt ihn nicht wenn schon beinhaltet

        document.getElementById('practice_p').classList.add('test_class_two');

    // Aufgabe 5
    // Erstelle im CSS eine Klasse d_none, diese sollte "display:none;" beinhalten.
    // Bau nun eine Funktion, die die Klasse "d_none" mit classList.toggle() 
    // hinzufügt/entfernt bei einem beliebigen HTML Element.
    // Hinweis: Beliebig heißt hier, dass die id aus dem Parameter der Funktion genommen wird.

        function dispNone() {
            document.getElementById('practice_p').classList.toggle('d_none');
        }

        dispNone();

        // Wichtiger Tipp:
    // Du siehst, dass manchmal beides geht, sowohl setAttribute() als auch der direkte Zugriff.
    // Hierbei sollte dein Entwicklergeist geweckt sein. Wenn du nicht sicher bist, 
    // wie oder ob etwas geht, dann probier es aus!
    // Genau das macht dich zum Entwickler!!

// Aufgaben zu onkeyup/onkeydown
    // Aufgabe 1
    // Erstelle ein inputfeld mit einer selbst gewählten id

        // done -> <input id="prac_input" type="text" value="Hallo Welt!">

    // Aufgabe 2
    // Erstelle eine Funktion, die den Value dieses inputfeldes aus loggt.

        function pracInputLog(log) {
            document.getElementById('prac_input').setAttribute('value', log);
        }

    // Aufgabe 3
    // Vergleiche nun den log von onkeyup und onkeydown. Siehst du einen Unterschied?

        // Ja bei onkeydown wird beim drücken reagiert und onkeyup erst beim loslassen

// Aufgaben zu Arrays
    // Aufgabe 1: includes
    // Implementiere eine Funktion namens containsElement(array, element), 
    // die true zurückgibt, wenn element im array enthalten ist, andernfalls false.
    // Test:
    // console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
    // console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false



    // Aufgabe 2: indexOf
    // Implementiere eine Funktion namens findElementIndex(array, element), 
    // die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.
    // Test:
    // console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
    // console.log(findElementIndex([10, 20, 30, 40], 50)); // -1



    // Aufgabe 3: shift
    // Implementiere eine Funktion namens removeFirstElement(array), 
    // die das erste Element aus dem array entfernt und das neue Array zurückgibt.
    // Test:
    // console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
    // console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']



    // Aufgabe 4: unshift
    // Implementiere eine Funktion namens addElementToStart(array, element), 
    // die das element am Anfang des array hinzufügt und das neue Array zurückgibt.
    // Test:
    // console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
    // console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']



    // Aufgabe 5: slice
    // Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, 
    // das die Elemente von start bis end (nicht eingeschlossen) enthält.
    // Test:
    // console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
    // console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']



    // Aufgabe 6: join
    // Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, 
    // die aus den Elementen des array besteht, getrennt durch den separator.
    // Test:
    // console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"
    // console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"