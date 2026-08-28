// Booleans
// Es geht entweder false oder true

    let myCondition = false;

    myCondition = true;

    // console.log(myCondition);

// Operators
    // Not-Operator "!"

        let myConNot = !true;   // sagt das etwas nicht ist, also hier = false

        myConNot = !false;

        // console.log(myConNot);

    // Or-Operator "||"

        let myConOr = true || true || false;     // wenn nur 1 true, dann ist es true

        myConOr = false || false;

        // console.log(myConOr);

    // And-Operator "&&"

        let myConAnd = true && false && true;  // wird nur zu true, wenn alles true ist

        myConAnd = true && true;
        
        // console.log(myConAnd);

    // Übung zu Not-Or-And

        // console.log(true && false);     // false

        // console.log(true || false);     // true

        // console.log(false && true);     // false

        // console.log(true && (false || true));       // true

        // console.log((true && false) || true);       // true

        // console.log(!(true && false));      // true

        // console.log(!(false || true));      // false

        // console.log(!(true && (false || true)));        // false

        // console.log((true && !(false || true)) || (false && (true || false)));      // false

        // console.log((true || !(false && true)) && (!(true || false) || (false && true)));       // false

    // LoseEquality-Operator "=="

        let myConLE =   45 == 47;     // Testet ob exakt gleich, OHNE Typen -> false

        myConLE =       45 == 45;         // -> true

        myConLE =       45 == "45";       // -> true

        // console.log(myConLE);

    // StrictEquality-Operator "==="

        let myConSE =  45 === 47;     // Testet ob exakt gleich, MIT Typen -> false

        myConSE =      45 === 45;         // -> true

        myConSE =      45 === "45";       // -> false

        // console.log(myConSE);

    // NotLoseEquality-Operator "!="

        let myConNLE =   45 != 47;     // Testet ob nicht gleich, OHNE Typen -> true

        myConNLE =       45 != 45;         // -> false

        myConNLE =       45 != "47";       // -> true

        // console.log(myConNLE);

    // NotStrictEquality-Operator "!=="

        let myConNSE =  45 !== 47;     // Testet ob nicht gleich, MIT Typen -> true

        myConNSE =      45 !== 45;         // -> false

        myConNSE =      45 !== "47";       // -> true

        // console.log(myConNSE);

    // Größer-/Kleiner-Operator "<", ">", "<=" und ">="

        let myConGr =   34 > 132;       // Größer Abfrage -> false

        let myConSm =   34 < 132;       // Kleiner Abfrage -> true

        let myConGrGl =   34 >= 34;       // Größer-Gleich Abfrage -> true

        let myConSmGl =   34 <= 12;       // Kleiner-Gleich Abfrage -> false

        // console.log(myConGr);
        // console.log(myConSm);
        // console.log(myConGrGl);
        // console.log(myConSmGl);

    // Übung zu Lose-/Strikt-Equality und Bigger/Smaller

        // console.log(5 <= 10);       // true

        // console.log(15 == 15);      // true

        // console.log(20 > 10);       // true

        // console.log((7 <= 7) == (5 < 10));      // true

        // console.log((10 > 5) == (3 < 2));       // false

        // console.log((12 >= 8) && (8 < 9));      // true

        // console.log((3 == 3) || (10 > 20));     // true

        // console.log((6 != 6) || (15 <= 20));    // true

        // console.log((7 < 5) == !(10 >= 10));    // true

        // console.log((4 >= 4) && (8 < 15) && (3 == 3));      // true

//"if", "else" und "else if"

    let myIfCon = false;
    let myIfConTwo = true;

    if(myIfCon){                                
        // console.log("Hello World! if Teil");        // Wird ausgeführt wenn "myIfCon" ist true
    } else {
        // console.log("Hello World! else Teil");      // Wird ausgeführt wenn "myIfCon" ist false
    }

    if(myIfCon){
        // console.log("Hello World! if Teil");        // Wird ausgeführt wenn "myIfCon" ist true
    } else if(myIfConTwo){
        // console.log("Hello World! else-if Teil");   // Wird ausgeführt wenn "myIfCon" ist false und "myIfConTwo" ist true
    } else {
        // console.log("Hello World! else Teil");      // Wird ausgeführt wenn alles false
    }

    if(!myIfCon){
        // console.log("Hello World! if Teil");        // Wird ausgeführt wenn "myIfCon" ist false wegen Not-Operator "!"
    } else {
        // console.log("Hello World! else Teil");      // Wird ausgeführt wenn "myIfCon" ist true
    }

    // Übung für if else

        // if (5 <= 10) {
        //     console.log("a");       // a
        // }

        // if (15 == 15) {
        //     console.log("b");       // b
        // }

        // if (20 > 10) {
        //     console.log("c");       // c
        // }

        // if (7 <= 7) {
        //     console.log("a");
        // } else {                    // a
        //     console.log("b");
        // }

        // if (10 > 5) {
        //     console.log("a");
        // } else if (3 < 2) {
        //     console.log("b");       // a
        // } else {
        //     console.log("c");
        // }

        // if (12 >= 8 && 8 < 9) {
        //     console.log("a");
        // } else {                    // a
        //     console.log("b");
        // }

        // if (3 == 3) {
        //     console.log("a");
        // } else if (10 > 20) {
        //     console.log("b");       // a
        // } else {
        //     console.log("c");
        // }

        // if (6 != 6) {
        //     console.log("a");
        // } else if (15 <= 20) {
        //     console.log("b");       // b
        // } else {
        //     console.log("c");
        // }

        // if (7 < 5) {
        //     console.log("a");
        // } else if (!(10 >= 10)) {
        //     console.log("b");       // c
        // } else {
        //     console.log("c");
        // }

        // if (4 >= 4 && 8 < 15 && 3 == 3) {
        //     console.log("a");                   // a
        // } else {
        //     console.log("b");
        // }