var stack=[];
var output="";
var theme=1;
const outputElement=document.getElementById('output');
const themeSwitcher=document.getElementById('themeSwitcher');
const validKeys=['1','2','3','4','5','6','7','8','9','0','.','/','*','+','-','Enter','=','Backspace']
var rootColors = document.querySelector(':root');

var theme1={
    "--page-bg": "#3b4664",
    "--btn-bg": "white",
    "--btn-text-color": "black",
    "--normal-btn-shadow": "rgb(122 119 119)",
    "--text-btn-bg": "#647299",
    "--text-btn-shadow": "#465069",
    "--equal-btn-bg": "#d13e2f",
    "--equal-btn-shadow": "#ad2617",
    "--keypad-bg":"#181f32",
    "--output-bg":"#181f32",
    "--page-text-color":"white",
  } 

var theme2={
    "--page-bg": "#e6e6e6",
    "--btn-bg": "white",
    "--btn-text-color": "black",
    "--normal-btn-shadow": "rgb(122 119 119)",
    "--text-btn-bg": "#388186",
    "--text-btn-shadow": "#465069",
    "--equal-btn-bg": "#d13e2f",
    "--equal-btn-shadow": "#ad2617",
    "--keypad-bg": "#d3cdcd",
    "--output-bg": "#eeeeee",
    "--page-text-color": "black",
};

var theme3={
    "--page-bg": "#18052a",
    "--btn-bg": "#331b4d",
    "--btn-text-color": "#fce43e",
    "--normal-btn-shadow": "#8b1eff",
    "--text-btn-bg": "#55087c",
    "--text-btn-shadow": "#a800ff",
    "--equal-btn-bg": "#00decf",
    "--equal-btn-shadow": "#13948b",
    "--keypad-bg": "#1e0935",
    "--output-bg": "#1e0935",
    "--page-text-color": "#fce43e",
    "--output-btn-textcolor":"white"
};

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(validKeys.includes(keyName)){
        compute(keyName.toLowerCase());
    }
  }, false);
  
function init(){
    outputElement.innerHTML="";
}
function compute(token){
    if(output.length>=42){
        return;
    }
    switch(token){  
        case 'reset':
            output ="";
            outputElement.style.fontSize="20px";
            break;
        case 'del':
        case 'backspace':
            console.log(output);
            output =output.substring(0,output.length-1);
            break;
        case '*':
        case 'x':
            output+='x';
            break;
        case 'enter':
        case '=':
            console.log(output);
            try{
                output = eval(output.replaceAll('x','*')).toString();
            }
            catch(err){
                console.log(err);
            }
            break;
        default:
            output +=token;
    }
    if(output || output===""){
        outputElement.innerHTML=output;
        if(outputElement.scrollWidth > outputElement.clientWidth){
            outputElement.style.fontSize="12px";
        }
    }
    
}

function toggleTheme(){
    switch(theme){
        case 1:
            themeSwitcher.className="";
            themeSwitcher.classList.add("center-toggle");
            theme=2;
            Object.keys(theme2).forEach(key=>{
                rootColors.style.setProperty(key, theme2[key]);
            })
            break;
    
        case 2:
            themeSwitcher.className="";
            themeSwitcher.classList.add("right-toggle");
            theme=3;
            Object.keys(theme3).forEach(key=>{
                rootColors.style.setProperty(key, theme3[key]);
            })
            break;

        case 3:
            themeSwitcher.className="";
            theme=1;
            Object.keys(theme1).forEach(key=>{
                rootColors.style.setProperty(key, theme1[key]);
            })
            break;
    }
}