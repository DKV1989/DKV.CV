function bottles() {
    let output = "";

    for (let i = 99; i >= 0; i--) {

        if (i > 1) {
            output +=
                i + " bottles of beer on the wall, " +
                i + " bottles of beer. You take one down and pass it around, " +
                (i - 1) + " bottles of beer on the wall.<br></br>";
        }

        else if (i === 1) {
            output +=
                "1 bottle of beer on the wall, 1 bottle of beer. You take one down and pass it around, no more bottles of beer on the wall.<br><br>";
        }

        else {
            output +=
                "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }

    document.getElementById("placeholder").innerHTML = output;
}

//David Kenny-Vaughan, Week 9 Lab. 22.11.2025

