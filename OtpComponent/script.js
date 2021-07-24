var otp = [];
document.addEventListener("wheel", function(event) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});

const changeFocus = (box) => {
    document.getElementById(box).focus();
};

const submitOtp = () => {
    let otpStr = "";
    otp.forEach((digit) => {
        otpStr += parseInt(digit) + "";
    });
    alert(otpStr);
};

const enableSubmit = () => {
    console.log(otp);
    document.getElementById("submit-otp").classList.remove("disabled");
};

const disableSubmit = () => {
    document.getElementById("submit-otp").classList.add("disabled");
};
const isValidOtp = () => {
    console.log(otp);
    if (otp.length != 6) {
        disableSubmit();
        return false;
    }
    for (let i = 0; i < otp.length; i++) {
        if (otp[i] === -1) {
            disableSubmit();
            return false;
        }
    }
    enableSubmit();
    return true;
};
var input = document.getElementById("box1");

const validateInput = (bid, input, index) => {
    if (input > 9) {
        otp[index] = input[0];
        document.getElementById(bid).value = input[0];
    } else {
        otp[index] = -1;
    }
};

const checkForLeadingZeroes = (bid, input, index) => {
    input = input + "";
    if (input.length >= 2 && input[0] == "0") {
        otp[index] = input[input.length - 1];
        document.getElementById(bid).value = otp[index];
    }
};

document.getElementById("box1").addEventListener("input", function(e) {
    let box1 = document.getElementById("box1").value;
    if (box1 != "" && box1 <= 9) {
        checkForLeadingZeroes("box1", box1, 0);
        otp[0] = box1;
        changeFocus("box2");
    } else {
        validateInput("box1", box1, 0);
    }
    isValidOtp();
});
document.getElementById("box2").addEventListener("input", function(e) {
    let box2 = document.getElementById("box2").value;
    if (box2 != "" && box2 <= 9) {
        checkForLeadingZeroes("box2", box2, 1);
        otp[1] = box2;
        changeFocus("box3");
    } else {
        validateInput("box2", box2, 1);
    }
    isValidOtp();
});
document.getElementById("box3").addEventListener("input", function(e) {
    let box3 = document.getElementById("box3").value;
    if (box3 != "" && box3 <= 9) {
        checkForLeadingZeroes("box3", box3, 2);
        otp[2] = box3;
        changeFocus("box4");
    } else {
        validateInput("box3", box3, 2);
    }
    isValidOtp();
});
document.getElementById("box4").addEventListener("input", function(e) {
    let box4 = document.getElementById("box4").value;
    if (box4 != "" && box4 <= 9) {
        checkForLeadingZeroes("box4", box4, 3);
        otp[3] = box4;
        changeFocus("box5");
    } else {
        validateInput("box4", box4, 3);
    }
    isValidOtp();
});
document.getElementById("box5").addEventListener("input", function(e) {
    let box5 = document.getElementById("box5").value;
    if (box5 != "" && box5 <= 9) {
        checkForLeadingZeroes("box5", box5, 4);
        otp[4] = box5;
        changeFocus("box6");
    } else {
        validateInput("box5", box5, 4);
    }
    isValidOtp();
});
document.getElementById("box6").addEventListener("input", function(e) {
    let box6 = document.getElementById("box6").value;
    if (box6 != "" && box6 <= 9) {
        checkForLeadingZeroes("box6", box6, 5);
        otp[5] = box6;
        if (isValidOtp()) changeFocus("submit-otp");
    } else {
        validateInput("box6", box6, 5);
    }
    isValidOtp();
});

document.getElementById("box6").addEventListener("keydown", function(e) {
    if (["Backspace", "Delete"].includes(e.key)) {
        let box6 = document.getElementById("box6").value;
        if (box6 == "") {
            changeFocus("box5");
            otp[5] = -1;
            isValidOtp();
        }
    }
});

document.getElementById("box5").addEventListener("keydown", function(e) {
    if (["Backspace", "Delete"].includes(e.key)) {
        let box5 = document.getElementById("box5").value;
        if (box5 == "") {
            changeFocus("box4");
            isValidOtp();
        }
    }
});

document.getElementById("box4").addEventListener("keydown", function(e) {
    if (["Backspace", "Delete"].includes(e.key)) {
        let box4 = document.getElementById("box4").value;
        if (box4 == "") {
            changeFocus("box3");
            isValidOtp();
        }
    }
});

document.getElementById("box3").addEventListener("keydown", function(e) {
    if (["Backspace", "Delete"].includes(e.key)) {
        let box3 = document.getElementById("box3").value;
        if (box3 == "") {
            changeFocus("box2");
            isValidOtp();
        }
    }
});

document.getElementById("box2").addEventListener("keydown", function(e) {
    if (["Backspace", "Delete"].includes(e.key)) {
        let box2 = document.getElementById("box2").value;
        if (box2 == "") {
            changeFocus("box1");
            isValidOtp();
        }
    }
});