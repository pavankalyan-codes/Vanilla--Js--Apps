// var stub = [
//     [0, 8, 0, 0, 0, 9, 7, 4, 3],
//     [0, 5, 0, 0, 0, 8, 0, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [8, 0, 0, 0, 0, 5, 0, 0, 0],
//     [0, 0, 0, 8, 0, 4, 0, 0, 0],
//     [0, 0, 0, 3, 0, 0, 0, 0, 6],
//     [0, 0, 0, 0, 0, 0, 0, 7, 0],
//     [0, 3, 0, 5, 0, 0, 0, 8, 0],
//     [9, 7, 2, 4, 0, 0, 0, 5, 0],
// ];

var stub = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

window.addEventListener("load", (event) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // el = el.innerHTML + `<div class="item"></div>`;+
            let br = j % 3 == 2 && j != 8 ? " br" : "";
            let bb = i % 3 == 2 && i != 8 ? " bb" : "";

            let bl = j % 3 == 0 && j != 0 ? " bl" : "";
            let bt = i % 3 == 0 && i != 0 ? " bt" : "";
            let el = document.getElementById("board");
            el.innerHTML +=
                `<div class="item` +
                br +
                bb +
                bl +
                bt +
                `"><input type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);setValue(this.value,` +
                i +
                "," +
                j +
                `)"  #mycell class="cell" maxlength="1" id="` +
                i +
                "" +
                j +
                `" /></div>`;
        }
    }
    fillData();
});

function fillData() {
    // var rows = sudokuData.split(" ");
    let index = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            //stub[i][j] = rows[i][j];
            let val = document.getElementById(i + "" + j);
            val.value = stub[i][j];
            //val.value = index++;
            //row.push(val);
        }
    }
}

function rowCheck(val, pos) {
    let row = parseInt(pos.split("")[0]);
    for (let i = 0; i < 9; i++) {
        if (stub[row][i] == val) {
            return false;
        }
    }
    return true;
}

function colCheck(val, pos) {
    let col = parseInt(pos.split("")[1]);
    for (let i = 0; i < 9; i++) {
        if (stub[i][col] == val) {
            return false;
        }
    }
    return true;
}

function gridCheck(val, pos) {
    let x = parseInt(pos.split("")[0]);
    while (x % 3 != 0) x--;
    let y = parseInt(pos.split("")[1]);
    while (y % 3 != 0) y--;
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            if (stub[i][j] === val) {
                return false;
            }
        }
    }
    return true;
}

function isValid(ele, pos) {
    let check1 = rowCheck(ele, pos);
    if (!check1) return false;
    let check2 = colCheck(ele, pos);
    if (!check2) return false;
    let check3 = gridCheck(ele, pos);
    if (!check3) return false;
    return true;
}

function solve() {
    let button = document.getElementById("solve");
    button.textContent = "Backtracking...";
    let emptyCells = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            //stub[i][j] = document.getElementById(i + "" + j).value;
            if (stub[i][j] == 0) {
                emptyCells.push(i + "" + j);
            }
        }
    }

    let index = 0;
    flag = 0;
    while (index < emptyCells.length) {
        let pos = emptyCells[index];
        let x = parseInt(pos.split("")[0]);
        let y = parseInt(pos.split("")[1]);
        for (let ele = stub[x][y] + 1; ele <= 9; ele++) {
            if (stub[x][y] + 1 <= 9 && isValid(ele, pos)) {
                flag = 0;
                setTimeout(() => {
                    document.getElementById(x + "" + y).value = ele;
                    document.getElementById(pos).style.background = "green";
                }, 0);

                stub[x][y] = ele;
                break;
            } else {
                flag = 1;
            }
        }
        if (index >= 1 && flag == 1) {
            index--;
            stub[x][y] = 0;
            setTimeout(() => {
                document.getElementById(x + "" + y).value = 0;
                document.getElementById(x + "" + y).style.background = "red";
            }, 0);
        } else index++;
    }

    setTimeout(() => {
        button.textContent = "Solve";
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                document.getElementById(i + "" + j).style.background = "black";
            }
        }
    }, 0);
}

function setValue(value, i, j) {
    stub[i][j] = parseInt(value);
}

function checkValidity() {
    //alert("hey");
}

function validBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (!isValid(stub[i][j], i + "" + j)) return false;
        }
    }
    return true;
}