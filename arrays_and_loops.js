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

    // Entries
        // Die Daten können auch extern vergeben werden und an präzise Positionen gesetzt werden
        // So eine Situation sollte vermieden werden

            const cars = [];

            cars[0] = "Saab";
            cars[2] = "BMW";

            console.log(cars);      // -> ['Saab', empty, 'BMW'] -> Es hat dennoch eine Länge von 3 auch wenn 1:empty
        
    // pop() und push()
        // mit push können weiter Elemente dem Arrag hinten dran hinzugefügt werden

            const fruits = ["Banana", "Orange", "Apple", "Mango"];

            fruits.push("Kiwi");

            console.log(fruits);
            
        // mit pop wird vom Array etwas hinten weg genommen und gegebenfalls einer neuen Var übergeben

            let singleFruit = fruits.pop();

            console.log(fruits);
            console.log(singleFruit);
            
        // Hier die W3Schools Links zu dem Thema:
        // push: https://www.w3schools.com/jsref/jsref_push.asp
        // pop: https://www.w3schools.com/jsref/jsref_pop.asp

        