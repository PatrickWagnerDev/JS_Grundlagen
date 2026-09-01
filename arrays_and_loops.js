// Arrays
    // Arrays sind Listen von Daten in einer Variablen und werden in [] geschrieben mit mit , getrennt
    // Es können hierbei verschiedene Datentypen sein
    
        let myList = [12, "Banana", true];

    // Wenn man ein Array in der Konsole ausgibt, sieht man das es im Endeffekt ein Objekt ist
    // Ein Array beginnt immer mit dem Key 0 und steigt linear auf mit 1, 2, 3 usw.
        
        function initArrays(){
            console.log(myList);    // -> [12,'Banana',true]
        }                           // -> Ausgeklappt:  0: 12    1: "Banana"     2: true

    // Dadurch kann durch die [] auch ein einzelnen Element mit Hilfe des Key ausgelesen werden
        
        function initArrays(){
            console.log(myList[1]);     // -> Banana
        }

    // So können auch einzelne Elemente ausgetauscht werden auch an der Stelle 0

        function initArrays(){
            myList[0] = "No Banana";
            console.log(myList[0]);     // -> No Banana
        }

    // Eine einstiegsfreundliche Erklärung:
    // https://www.w3schools.com/js/js_arrays.asp