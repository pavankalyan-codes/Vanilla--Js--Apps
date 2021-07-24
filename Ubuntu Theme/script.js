var zindexCounter = 100;
var tooltipVisible = false;
const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);
const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
);
// document.getElementById("desktop").addEventListener(
//   "mousedown",
//   function (event) {

//     if ((event.buttons & 3) === 3) {
//       //Do something here
//     }
//   },
//   true
// );

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.getElementById("os").style.visibility = "hidden";
        document.getElementById("boot-loader").style.visibility = "visible";
        console.log(1);
    } else {
        setTimeout(() => {
            document.getElementById("os").style.visibility = "visible";
            document.getElementById("boot-loader").style.visibility = "hidden";
            console.log(2);
        }, 1500);
    }
};

window.onload = function() {
    var time = document.getElementById("time");

    document.oncontextmenu = rightClick;

    setInterval(function() {
        let current = new Date().toString().split(" ");
        time.textContent = current[0] =
            " " + current[1] + " " + current[2] + " " + current[4];
    }, 1000);

    document.getElementById("myrange").oninput = function() {
        console.log("fuck off" + this.value);
        var value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background =
            "linear-gradient(to right, #2f5bee 0%, #2f5bee " +
            value +
            "%, #fff " +
            value +
            "%, white 100%)";
    };

    document.getElementById("myrange1").oninput = function() {
        console.log("fuck off" + this.value);
        var value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background =
            "linear-gradient(to right, #2f5bee 0%, #2f5bee " +
            value +
            "%, #fff " +
            value +
            "%, white 100%)";
    };
};

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    console.log(elmnt.id);
    if (document.getElementById(elmnt.id + "-windowHeader")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(
            elmnt.id + "-windowHeader"
        ).onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        console.log(e);
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        elmnt.style.zIndex = zindexCounter++;
        // if (elmnt.offsetLeft - pos1 < 60) {
        //   document.getElementById("lbar").style.display = "none";
        // } else {
        //   document.getElementById("lbar").style.display = "";
        // }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function showToolTip() {
    console.log(tooltipVisible);

    if (!tooltipVisible) {
        document.getElementById("triangle").classList.remove("hide");
        document.getElementById("tip-info").classList.remove("hide");
    } else {
        document.getElementById("triangle").classList.add("hide");
        document.getElementById("tip-info").classList.add("hide");
    }
    tooltipVisible = !tooltipVisible;
}

function makeFullScreen(app) {
    if (document.getElementById(app).classList.contains("make-fullscreen")) {
        minimize(app);

        document.getElementById(app + "-content").classList.remove("mr-60");
    } else {
        document.getElementById(app).class;
        document.getElementById(app).classList.add("make-fullscreen");

        if (document.getElementById(app + "-iframe")) {
            document.getElementById(app + "-iframe").classList.add("iframe-full");
        }
        if (document.getElementById(app + "-content")) {
            document.getElementById(app + "-content").classList.add("mr-60");
        }

        if (document.getElementById(app + "-content")) {
            document.getElementById(app + "-content").classList.add("h-100");
        }

        if (app === "chrome") {
            document.getElementById(app + "-iframe").classList.add("h-87");
        }
    }
    document.getElementById(app + "-app").classList.add("h-96");
    console.log(app + "-app");
}

function updateZindex(app) {
    if (document.getElementById(app)) {
        document.getElementById(app).style.zIndex = zindexCounter++;
    }
}

function minimize(app) {
    if (app === "chrome") {
        document.getElementById(app + "-iframe").classList.remove("h-87");
    } else {
        document.getElementById(app).classList.remove("make-fullscreen");
    }
    document.getElementById(app).classList.remove("make-fullscreen");
    document.getElementById(app + "-iframe").classList.remove("iframe-full");
}

const openTerminal = () => {
    document.getElementById("contextMenu").style.display = "none";
    openApp("terminal");
};

const openApp = (app) => {
    console.log(app);
    if (
        document.getElementById(app + "-active").classList.contains("active") &&
        document.getElementById(app + "-current").classList.contains("active")
    ) {
        return;
    } else if (
        document.getElementById(app + "-active").classList.contains("active")
    ) {
        document.getElementById(app).classList.remove("hide");
        updateZindex(app);
        document.getElementById(app + "-current").classList.add("active");
    } else {
        if (app === "chrome") {
            //alert("chrome");
            document.getElementById("desktop").innerHTML += chromeWindow();
        }
        if (app === "spotify") {
            //alert("spotify");
            document.getElementById("desktop").innerHTML += wipWindow(app);
        }
        if (app === "firefox") {
            //alert("firefox");
            document.getElementById("desktop").innerHTML += wipWindow(app);
        }
        if (app === "folder") {
            //alert("folder");
            document.getElementById("desktop").innerHTML += wipWindow(app);
        }
        if (app === "terminal") {
            //alert("terminal");
            document.getElementById("desktop").innerHTML += terminalWindow();

            document
                .getElementById("command")
                .addEventListener("keypress", function(e) {
                    if (e.key === "Enter") {
                        processCommand();
                    }
                });
        }
        if (app === "vscode") {
            //alert("vscode");
            document.getElementById("desktop").innerHTML += vscodeWindow();
        }
        updateZindex(app);
        document.getElementById(app + "-active").classList.add("active");
        document.getElementById(app + "-current").classList.add("active");
        dragElement(document.getElementById(app));
    }
};

const minimizeWindow = (app) => {
    document.getElementById(app).classList.add("hide");
    document.getElementById(app).classList.add("minimize-effect");

    document.getElementById(app + "-current").classList.remove("active");
    document;
};

const maximizeWindow = () => {
    document.getElementById("mydiv").classList.remove("hide");
};

function rightClick(clickEvent) {
    clickEvent.preventDefault();
}

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none";
}

function leftClick() {
    document.getElementById("rt-menu").classList.add("hide");
    document.getElementById("rtop-menu").classList.remove("border-btm");
    if (tooltipVisible) {
        showToolTip();
    }
    console.log("dfdf");
    hideMenu();
}
document.addEventListener(
    "contextmenu",
    function(ev) {
        if (ev.clientX < 60 || ev.clientY < 20) {
            return;
        }

        ev.preventDefault();

        var menu = document.getElementById("contextMenu");

        menu.style.display = "block";

        if (ev.pageY > 450) {
            if (ev.pageX > vh - 200) {
                menu.style.left = ev.pageX - 200 + "px";
            } else {
                menu.style.left = ev.pageX + "px";
            }

            menu.style.top = ev.pageY - 190 + "px";
        } else {
            if (ev.pageX > vh - 200) {
                menu.style.left = ev.pageX - 200 + "px";
            } else {
                menu.style.left = ev.pageX + "px";
            }

            menu.style.top = ev.pageY + "px";
        }

        return false;
    },
    false
);

function dashboardSearch() {
    //document.getElementById("overlay").classList.add("overlay");
}

function closeWindow(app) {
    var element = document.getElementById(app);
    document.getElementById(app + "-active").classList.remove("active");
    document.getElementById(app + "-current").classList.remove("active");

    console.log(app);
    console.log(element);
    element.parentNode.removeChild(element);
}

function getBrowserSearchbar() {
    return `<div id="sbar" class="hide">
    <div class="search-bar d-flex col-12 pad5" >
    <i class="fas fa-redo-alt broswer-icons col-1"></i>
    <i class="fas fa-home broswer-icons col-1"></i>

    <input
      type="text"
      id="search"
      class="col-9"
      value="www.google.com"
    />
    </div >
  </div >`;
}

function processCommand() {
    let command = document.getElementById("command").value;
    let commandOutput =
        `
    <div class="d-flex"> 
      <span class="terminal-text">PavanKalyan@Portfolio:~$</span><input readonly class="trans-inp white fw-normal ml2" value=` +
        command +
        `></input>
    </div>
    <div class="d-flex white fw-normal">
      ` +
        command +
        `: command not found
    </div>

  `;
    document.getElementById("cmdOutput").innerHTML += commandOutput;
    document.getElementById("command").value = "";
    var bash = document.getElementById("bash");
    bash.scrollTop = bash.scrollHeight;
}

function newfolder() {
    console.log("opening");
}

function openTopMenu() {
    console.log("checking");
    document.getElementById("rtop-menu").classList.add("border-btm");
    document.getElementById("rt-menu").classList.remove("hide");
}

function terminalWindow() {
    return `<div  id="terminal" class="custom-width">
    <div id="terminal-windowHeader" onclick="callDragElement('terminal')" class="window-header">
      <div class="win-icons">
        <i class="fas fa-times-circle ucolor" onclick="closeWindow('terminal')"></i>
        <i class="fas fa-minus-circle" onclick="minimizeWindow('terminal')"></i>

        <i class="far fa-square" onclick="makeFullScreen('terminal')"></i>
      </div>
    </div>
    <div id="terminal-app" class="app">
      <div id="bash" class="h-100 ubuntu-color d-flex flex-column of-auto">
        <div id="cmdOutput"></div>
        <div class="d-flex">
          <span class="terminal-text">PavanKalyan@Portfolio:~$</span>
          <input id="command" type="text" />
        </div>
        <div id="cmd-response"></div>
      </div>
    </div>
  </div>`;
}

function callDragElement(app) {
    updateZindex(app);
    dragElement(document.getElementById(app));
}

function chromeWindow() {
    return `<div id="chrome" class="custom-width">
    <div id="chrome-windowHeader" onclick="callDragElement('chrome')" class="window-header">
      <div class="win-icons">
        <i class="fas fa-times-circle ucolor" onclick="closeWindow('chrome')"></i>
        <i class="fas fa-minus-circle" onclick="minimizeWindow('chrome')"></i>

        <i class="far fa-square" onclick="makeFullScreen('chrome')"></i>
      </div>
    </div>
    <div id="chrome-app" class="h-100 app">
      <div id="sbar" class="">
        <div class="search-bar d-flex col-12 pad5">
          <i class="fas fa-redo-alt broswer-icons col-1"></i>
          <i class="fas fa-home broswer-icons col-1"></i>

          <input
            type="text"
            id="search"
            class="col-9"
            value="www.google.com"
          />
        </div>
      </div>

      <div class="h-94 br-5 whitecolor" id="chrome-content">
        <iframe
          class=""
          id="chrome-iframe"
          src="https://www.google.com/webhp?igu=1"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>`;
}

function openHome() {
    openApp("folder");
}

function openChrome() {
    openApp("chrome");
}

function wipWindow(appname) {
    return (
        `<div id="` +
        appname +
        `" class="custom-width">
    <div id="` +
        appname +
        `-windowHeader" onclick="callDragElement('` +
        appname +
        `')" class="window-header">
      <div class="win-icons">
        <i class="fas fa-times-circle ucolor" onclick="closeWindow('` +
        appname +
        `')"></i>
        <i class="fas fa-minus-circle" onclick="minimizeWindow('` +
        appname +
        `')"></i>

        <i class="far fa-square" onclick="makeFullScreen('` +
        appname +
        `')"></i>
      </div>
    </div>
    <div id="` +
        appname +
        `-app" class="app">

        <div class="wip-content">
        <div><image src="./` +
        appname +
        `.png" alt="sample icon" /></div>
            <div>Coming Soon</div>
        </div>
       
      
    </div>
  </div>`
    );
}

function vscodeWindow() {
    return `<div id="vscode" class="custom-width">
    <div id="vscode-windowHeader" onclick="callDragElement('vscode')" class="window-header">
      <div class="win-icons">
        <i class="fas fa-times-circle ucolor" onclick="closeWindow('vscode')"></i>
        <i class="fas fa-minus-circle" onclick="minimizeWindow('vscode')"></i>

        <i class="far fa-square" onclick="makeFullScreen('vscode')"></i>
      </div>
    </div>
    <div id="vscode-app" class="app">
      <div id="vscode-content" class="h-100 whitecolor">
        <iframe id="vscode-iframe" src="https://github1s.com/pavankalyan-codes/30-Days-30-Projects/tree/master/8%20Ubuntu%20Theme" frameborder="0"></iframe>
      </div>
    </div>
  </div>`;
}