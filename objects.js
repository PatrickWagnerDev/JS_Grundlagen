// Objects
// Objekte sind Key/Value Pairs
    // Variabel     Variablename        Objectindicator     Key     Cut     Value   Trennung zum nächsten Object
        let         myFancyObject   =   {                   age     :       32      , 
            height : 178,
            name : "Patrick",
            myScore : function(Numb){
                Numb += 10;
                return Numb;
            }
        }

    // Variante 1
    // Mit einem . nach dem Namen des Objects kann ein Key ausgewählt werden
    // Daraufhin wird das zugehörige Value ausgegeben

        // console.log(myFancyObject.age);     // -> 32
        // console.log(myFancyObject.myScore(3));    // -> 13
        

    // Variante 2
    // Das gleiche wie Variante 1 nur mit ["..."]

        // console.log(myFancyObject["height"]);     // -> 178