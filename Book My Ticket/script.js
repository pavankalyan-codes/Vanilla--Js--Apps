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

  console.log(booked);

  let seatsElement = document.getElementsByClassName("cheap")[0];
  //insert  cheap rows
  for (let i = 0; i < 4; i++) {
    // seatsElement.innerHTML +=
    //   '<div class="numbering">' + rows[rowIndex--] + "</div>";
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute(
      "class",
      "myrow d-flex justify-content-between mt-2 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let leftNode = document.createElement("div");
    leftNode.setAttribute("class", "d-flex justify-content-between left");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      leftNode.appendChild(seat);
    }

    let gapNode = document.createElement("div");
    gapNode.setAttribute("class", "gap");

    let rightNode = document.createElement("div");
    rightNode.setAttribute("class", "d-flex right justify-content-between");

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
      "myrow d-flex justify-content-between mt-2 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let leftNode = document.createElement("div");
    leftNode.setAttribute("class", "d-flex justify-content-between left");

    for (let j = 1; j <= 12; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      leftNode.appendChild(seat);
    }

    let gapNode = document.createElement("div");
    gapNode.setAttribute("class", "gap");

    let rightNode = document.createElement("div");
    rightNode.setAttribute("class", "d-flex right justify-content-between");

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
    // seatsElement.innerHTML +=
    //   '<div class="numbering">' + rows[rowIndex--] + "</div>";
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute(
      "class",
      "myrow d-flex justify-content-between mt-4 mb-4 w-100"
    );
    rowDiv.setAttribute("id", rowIndex);
    seatsElement.appendChild(rowDiv);

    let rowNode = document.getElementById(rowIndex);

    let numberNode = document.createElement("div");
    numberNode.textContent = rows[rowIndex--];
    numberNode.setAttribute("class", "numbering");

    let line = document.createElement("div");
    line.setAttribute("class", "d-flex justify-content-between left w-100");

    for (let j = 1; j <= 24; j++) {
      let seat = document.createElement("div");
      seat.setAttribute("class", "seat");
      line.appendChild(seat);
    }

    rowNode.appendChild(numberNode);
    rowNode.appendChild(line);
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
