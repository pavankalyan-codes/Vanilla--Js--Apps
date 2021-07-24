var modes = {
    pom: 25,
    sb: 5,
    lb: 15,
};
var pattern = ["pom", "sb", "pom", "sb", "pom", "lb"];
var patterIndex = 0;
var messages = {
    pom: "Please take a break of 5 minutes and come back",
    sb: "You have completed your break. Go back to work",
    lb: "You have completed your long break. Go back to work",
};
var isPaused = false;
var currMin = 24;
var currSec = 59;
var currentMode = "pom";
var intervalId;
var msg = new SpeechSynthesisUtterance();
msg.text = "Time over";
window.addEventListener("load", function() {
    startPomodoro();
});

function getPercentage() {
    if (currMin <= -1) return 0;
    if (currMin <= 0 && currSec <= 0) return 0;
    return ((currMin * 60 + currSec) / (modes[currentMode] * 60)) * 100;
}

function startPomodoro() {
    intervalId = setInterval(() => {
        let progress = getPercentage();

        let timeLeft = appendZeroes(currMin) + ":" + appendZeroes(currSec);
        if (progress <= 0) {
            document.getElementById("progress").style.setProperty("--p", 0);
            document.getElementById("time").textContent = "00:00";
            speakText();
            clearTimer(intervalId, "from pomodoro");
        } else {
            document.getElementById("time").textContent = timeLeft;
            document.getElementById("progress").style.setProperty("--p", progress);
        }
        decrementSecond();
    }, 1000);
}

function decrementSecond() {
    currSec--;
    if (currSec == 0) {
        currMin--;
        currSec = 59;
    }
}

function clearTimer(id, from) {
    clearInterval(id);
}

function changeMode(mode) {
    if (currentMode === mode) {
        return;
    } else {
        clearTimer(intervalId, "changeMode");
        currentMode = mode;
        makeCurrentActive();
        currMin = modes[currentMode] - 1;
        currSec = 59;

        setTimeout(() => {
            startPomodoro();
        });
    }
}

document.addEventListener("keyup", function(e) {
    pauseTimer();
});

function makeCurrentActive() {
    Object.keys(modes).forEach((mode) => {
        if (mode === currentMode)
            document.getElementById(mode).classList.add("active");
        else {
            if (document.getElementById(mode).classList.contains("active")) {
                document.getElementById(mode).classList.remove("active");
            }
        }
    });
}

function pauseTimer() {
    if (!isPaused) {
        clearTimer(intervalId);
        isPaused = !isPaused;
        document.getElementById("info-text").textContent = "RESUME";
    } else {
        resume();
        document.getElementById("info-text").textContent = "PAUSE";
        isPaused = !isPaused;
    }
}

function resume() {
    intervalId = setInterval(() => {
        let progress = getPercentage();
        let timeLeft = appendZeroes(currMin) + ":" + appendZeroes(currSec);
        if (progress <= 0) {
            document.getElementById("progress").style.setProperty("--p", 0);
            document.getElementById("time").textContent = "00:00";

            speakText();

            clearTimer(intervalId);
        } else {
            document.getElementById("time").textContent = timeLeft;
            document.getElementById("progress").style.setProperty("--p", progress);
        }

        decrementSecond();
    }, 1000);
}

function appendZeroes(val) {
    if (val <= 9) return "0" + val;
    return val;
}

function speakText() {
    currMin = modes[currentMode] - 1;
    currSec = 59;
    let oldMode = currentMode;
    let newMode = pattern[++patterIndex % 6];
    msg.text = messages[oldMode];
    changeMode(newMode);
    window.speechSynthesis.speak(msg);
}