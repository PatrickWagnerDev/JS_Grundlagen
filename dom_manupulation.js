// DOM-Manipulation
    // Es kann z. B. in einer HTML eine ID angesprochen werden
    // Variable     zieht aus dem Dokument die folgende ID      Wählt den Inhalt des Tags mit der ID

        let myTitle =   document.getElementById('website_title')    .innerHTML;

    // Kann dann normal ausgegeben werden

        console.log(myTitle);

    // .innerHTML kann alternativ auch direkt an die Variable geschrieben werden

        console.log(myTitle.innerHTML);

    // Kann aber auch der Inhalt in der HTML ändern

        myTitle.innerHTML = "neuer Titel";

    // Hier noch Dokumentationen zu den Basics von DOM
    // https://www.w3schools.com/js/js_htmldom.asp
    // https://wiki.selfhtml.org/wiki/JavaScript/DOM

    // Wenn es so geschrieben wird, wird der Inhalt als HTML interpretiert, also hier als ein p-Tag

        document.getElementById('test_div').innerHTML = '<p>test</p>';      // -> test

    // Hier wird es einfach als Text interpretiert, da es als Text angegeben wird

        document.getElementById('test_div').innerText = '<p>test</p>';      // -> <p>test</p>

    // Klassen anpassen
    // Klassen im style können auch mit JS angepasst werden

    // über .classList sprichst du die Liste an Klassen im style (im HTML) an
    // mit add kannst du dann dem Element mit der gewählten ID die Klasse zuordnen

        document.getElementById('test_div').classList.add('green_bg');

    // man kann mit remove auch Klassen entfernen

        document.getElementById('test_div').classList.remove('green_bg');

    // toggle ist eine Mischung aus add und remove, wenn es drin ist nimmt es es raus sonst anders herum

        document.getElementById('test_div').classList.toggle('green_bg');