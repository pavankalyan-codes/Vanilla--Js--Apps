var pollResult = [];
window.addEventListener("load", function () {
  var random1 = getRandom(1, 100);
  var random2 = getRandom(1, 100);
  var random3 = getRandom(1, 100);
  var random4 = getRandom(1, 100);

  pollResult.push(random1);
  pollResult.push(random2);
  pollResult.push(random3);
  pollResult.push(random4);

  let sum = pollResult.reduce((sum, element) => {
    return sum + element;
  });

  pollResult = pollResult.map((element) => {
    return (element / sum) * 100;
  });
});
function select(opt) {
  let max=Math.max(...pollResult);
  console.log(max);

  let index=pollResult.indexOf(max);
  pollResult.forEach((el,ind)=>{
    if(ind!=index){
      document.getElementById("opt"+(ind+1)).style.width=el + "%";
    }
  })
  document.getElementById("opt"+(index+1)).classList.add("max-opted");
  document.getElementById("opt"+(index+1)).style.width=pollResult[index]+"%";

  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("card")[i].classList.remove("myhover");
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
