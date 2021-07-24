var deg = 0;
var secondsDeg = 0;
var minutedDeg = 0;
var hoursDeg = 0;

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 1500);
    }
};

const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const randomAngle = () => {
    return Math.floor(Math.random() * 360) + "deg";
};

function rotate() {
    if (deg == 360) deg = 0;
    let d = new Date();
    let hours = d.getHours(); // => 9
    let minutes = d.getMinutes(); // =>  30
    let seconds = d.getSeconds(); // => 51

    setTimeout(() => {
        document.getElementById("seconds-hand").style.transform =
            "rotate(" + ((90 + seconds * 6 + 1) % 360) + "deg)";
    }, 20);
    setTimeout(() => {
        document.getElementById("seconds-hand").style.transform =
            "rotate(" + ((90 + seconds * 6 - 1) % 360) + "deg)";
    }, 40);
    setTimeout(() => {
        document.getElementById("seconds-hand").style.transform =
            "rotate(" + ((90 + seconds * 6) % 360) + "deg)";
    }, 0);

    let hourChange =
        ((90 + (hours % 12) * 30) % 360) + ((minutes / 60) * 100 * 30) / 100;
    let minuteChange =
        ((90 + minutes * 6) % 360) + ((seconds / 60) * 100 * 6) / 100;

    document.getElementById("hours-hands").style.transform =
        "rotate(" + hourChange + "deg)";
    document.getElementById("minutes-hands").style.transform =
        "rotate(" + minuteChange + "deg)";

    if (seconds == 0) {
        let currentGradient =
            "linear-gradient(" +
            randomAngle() +
            "," +
            randomColor() +
            "," +
            randomColor() +
            ")";
        let body = document.getElementById("body");
        body.style.backgroundImage = currentGradient;
    }
    //secondsDeg += 6;
}

window.addEventListener("load", (event) => {
    currentGradient =
        "linear-gradient(" +
        randomAngle() +
        "," +
        randomColor() +
        "," +
        randomColor() +
        ")";
    let body = document.getElementById("body");
    body.style.backgroundImage = currentGradient;
    setInterval(() => {
        rotate();
    }, 1000);
});