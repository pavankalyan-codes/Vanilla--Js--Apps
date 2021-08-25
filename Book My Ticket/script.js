var rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
var rowIndex = 10;
booked = [];
window.onload = function () {
  while (true) {
    let random = getRandom();
    if (!booked.includes(random)) {
      booked.push(random);
    }
    if (booked.length === 5) break;
  }



  let seatsElement = document.getElementsByClassName("cheap")[0];
  //insert  cheap rows
  for (let i = 0; i < 4; i++) {
    // seatsElement.innerHTML +=
    //   '<div class="numbering">' + rows[rowIndex--] + "</div>";
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute(
      "class",
      "myrow d-flex mt-2 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let leftNode = document.createElement("div");
    leftNode.setAttribute("class", "d-flex left");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      leftNode.appendChild(seat);
    }

    let gapNode = document.createElement("div");
    gapNode.setAttribute("class", "gap");

    let rightNode = document.createElement("div");
    rightNode.setAttribute("class", "d-flex right");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      rightNode.appendChild(seat);
    }
    rowNode.appendChild(numberNode);
    rowNode.appendChild(leftNode);
    rowNode.appendChild(gapNode);
    rowNode.appendChild(rightNode);
  }

  //insert gold rows
  seatsElement = document.getElementsByClassName("gold")[0];
  for (let i = 4; i < 10; i++) {
    // seatsElement.innerHTML +=
    //   '<div class="numbering">' + rows[rowIndex--] + "</div>";
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute(
      "class",
      "myrow d-flex mt-2 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let leftNode = document.createElement("div");
    leftNode.setAttribute("class", "d-flex left");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      leftNode.appendChild(seat);
    }

    let gapNode = document.createElement("div");
    gapNode.setAttribute("class", "gap");

    let rightNode = document.createElement("div");
    rightNode.setAttribute("class", "d-flex right");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      rightNode.appendChild(seat);
    }
    rowNode.appendChild(numberNode);
    rowNode.appendChild(leftNode);
    rowNode.appendChild(gapNode);
    rowNode.appendChild(rightNode);
  }

  seatsElement = document.getElementsByClassName("platinum")[0];
  for (let i = 10; i < 11; i++) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute(
      "class",
      "myrow d-flex mt-4 mb-4 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let lineLeft = document.createElement("div");
    lineLeft.setAttribute("class", "d-flex left ");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      lineLeft.appendChild(seat);
    }
    let gapNode = document.createElement("div");
    gapNode.setAttribute("class", "gap");
    let lineCenter=document.createElement("div");
    lineCenter.setAttribute("class","seat");
    let lineCenter1=document.createElement("div");
    lineCenter1.setAttribute("class","seat");
    gapNode.appendChild(lineCenter);
    gapNode.appendChild(lineCenter1);
    let lineRight = document.createElement("div");
    lineRight.setAttribute("class", "d-flex left ");
    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      lineRight.appendChild(seat);
    }

    rowNode.appendChild(numberNode);
    rowNode.appendChild(lineLeft);
    rowNode.appendChild(gapNode);
    rowNode.appendChild(lineRight);
  }
  //insert lounge rows

  var seats = document.getElementsByClassName("seat");
  var seatId = 1;

  for (let i = 0; i < seats.length; i++) {
    let element = seats[i];
    if (booked.includes(seatId)) {
      element.classList.add("sold");
    }
    element.setAttribute("id", seatId);
    element.onclick = function () {
      if (!element.classList.contains("selected")) {
        element.classList.add("selected");
      } else if (element.style.background === "rgb(124, 116, 116)") {
        element.classList.add("selected");
      } else {
        element.classList.add("seat");
        element.classList.remove("selected");
        //element.style.background = "#7c7474";
      }
    };
    seatId++;
  }
  document.getElementById("spinr").style.display = "none";
};

function getRandom() {
  return Math.floor(Math.random() * (264 - 1)) + 1;
}
function bookSeat(id) {}
