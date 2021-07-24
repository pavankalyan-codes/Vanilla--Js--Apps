var currentGradient = "";
const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const randomAngle = () => {
    return Math.floor(Math.random() * 360) + "deg";
};
const copyGrad = () => {
    document.getElementById("clip").style.animation = "fade-in 5s";
    setTimeout(function() {
        console.log("settinhg");
        document.getElementById("clip").style.animation = "";
    }, 5000);
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = currentGradient;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
};
const changeBg = () => {
    let c1 = randomColor();
    let c2 = randomColor();
    let angle = randomAngle();
    document.getElementById("angle").textContent = angle;
    document.getElementById("color1").textContent = c1;
    document.getElementById("color2").textContent = c2;

    currentGradient = "linear-gradient(" + angle + "," + c1 + "," + c2 + ")";
    document.getElementById("screen").style.backgroundImage = currentGradient;
};
window.addEventListener("load", changeBg);