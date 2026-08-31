// DOM-Manipulation
    // Es kann z. B. in einer HTML eine ID angesprochen werden
    // Variable     zieht aus dem Dokument die folgende ID      Wählt den Inhalt des Tags mit der ID
    let myTitle =   document.getElementById('website_title')    .innerHTML;

    // Kann dann normal ausgegeben werden
    // console.log(myTitle);

    // .innerHTML kann alternativ auch direkt an die Variable geschrieben werden
    // console.log(myTitle.innerHTML);

    // Kann aber auch der Inhalt in der HTML ändern
    myTitle.innerHTML = "neuer Titel";

