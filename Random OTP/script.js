function random() {
  return Math.floor(Math.random() * 10) + "";
}

var time = 29;
var percent = 99;

function setOtp() {
  let dupa1 = document.getElementById("cipa1");
  dupa1.dataset.num = random();

  let dupa2 = document.getElementById("cipa2");
  dupa2.dataset.num = random();

  let dupa3 = document.getElementById("cipa3");
  dupa3.dataset.num = random();

  let dupa4 = document.getElementById("cipa4");
  dupa4.dataset.num = random();

  let dupa5 = document.getElementById("cipa5");
  dupa5.dataset.num = random();

  let dupa6 = document.getElementById("cipa6");
  dupa6.dataset.num = random();
}

window.addEventListener("load", function () {
  setOtp();
  displayTimer();
  setInterval(function () {
    setOtp();
  }, 30000);
});

function displayTimer() {
  var myTimer = setInterval(function () {
    let currentPercent = (time / 30) * 100;
    if (time < 0) {
      //clearInterval(myTimer);
      //   document.getElementsByClassName("timer-text")[0].textContent =
      //     "Time up!!!";
      document
        .getElementsByClassName("timer-border")[0]
        .style.setProperty("--p", 100);
      currentPercent = 99;
      time = 29;
      //   document.getElementById("count-down").style.background =
      //     "linear-gradient(#ccc, #ccc) content-box,linear-gradient(var(--v), #f2f2f2 50%, transparent 0) 0 /min(100%, (50 - var(--p)) * 100%),linear-gradient(var(--v), transparent 50%, #ff0000 0) 0 /min(100%, (var(--p) - 50) * 100%),linear-gradient(to right, #f2f2f2 50%, #ff0000 0)";

      //return;
    }

    document
      .getElementsByClassName("timer-border")[0]
      .style.setProperty("--p", currentPercent);
    document.getElementsByClassName("time")[0].textContent = time--;
  }, 1000);
}
