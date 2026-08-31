// Numbers

    let myDivision = 10/5;
        let myMulti = 10*5;
            let myAddition = 10+5;
                let mySubtraction = 10-5;
                    let myPow = 2**3;

    console.log(myDivision);
        console.log(myMulti);
            console.log(myAddition);
                console.log(mySubtraction);
                    console.log(myPow);

// Strings

    let myConcat = "Hello " + "World!";     // Strings können mit Plus zusammengeführt werden, mit Minus kommt ein Fehler

    console.log(myConcat);

// Stings + Numbers

    let myCombination = "5" + 5;    // mit einem Plus wird es zu einem String

    console.log(myCombination);

    let myCombinationAlt = 5 - "5";    // mit einem Minus versucht es eine Number daraus zu machen

    console.log(myCombinationAlt);

// W3Schools Doku dazu, besonders Interessant die Escape Characters
// https://www.w3schools.com/js/js_strings.asp

// Strings sind auch Objecte

    let myTestString = "hallo  ";

    // Man kann auch Strings Funktionen geben durch einen .

    console.log(myTestString.length);   // -> 7 (es werden bei length alle Zeichen mitgezählt auch die Leerzeichen)
    
    // Man kann auch anders Funktionen an Strings knüpfen
    // z. B. trim() kürzt bei einem String automatisch vorne und hinten die Leerzeichen weg

    myTestString = myTestString.trim();

    console.log(myTestString.length);   // -> 5 (die Leerzeichen wurden durch trim() entfernt)

// W3Schools Doku zu length und trim()
// length: https://www.w3schools.com/jsref/jsref_length_string.asp
// trim(): https://www.w3schools.com/jsref/jsref_trim_string.asp
// String Reference: https://www.w3schools.com/jsref/jsref_obj_string.asp