function kjopBillett() {
    //variabel for å sjekke om det er noe feil
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();

    let error = 0;
    //  sjekker om det er en tall
    if (isNaN(Number(antall))) {
        alert("Ikke et tall");
        error = true;
    } else if (Number(antall) < 1) {
        alert("velg antall");
        error = true;
    }
    //sjekker om det er en gyldig epost
    if (!epost.includes("@")) {
        alert("uglyding epost")
        error = true;
    }


    //      objekt med alle inputene
    const person = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
    }       // oppretter en array med alle inputene som prukes til feil melding

    for (let i in person) {
        if (person[i] === " ") {
            document.getElementById(i + "feilmelding").innerHTML = "Må skrive noe inn i " + i;
            error = true;
        } else {
            document.getElementById(i + "feilmelding").innerHTML = "";

        }

    }          // hvis det ikke er noen feil så ligges objektene til i arrayet
    if (!error) {
        // sender objekter til serveren
        $.post("/lagre", person, function () {
            hentAlle();
        });

        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");


    }
}

function hentAlle() {
    $.get("/hent", function (data) {
        visKjop(data);
    });
}


//lager tabel
function visKjop(data) {

    let ut = "<table id='table'><tr>" + "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    for (let i of data) {
        ut += "<tr>"
            + "<td>" + i.film + "</td><td>" + i.antall + "</td><td>"
            + i.fornavn + "</td><td>" + i.etternavn + "</td><td>"
            + i.telefonnr + "</td><td>" + i.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("boks").innerHTML = ut;

}

// sletter value
function slett() {
    $.get("/slett", function () {
        hentAlle();
    });

}


