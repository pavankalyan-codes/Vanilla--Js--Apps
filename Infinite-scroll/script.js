
const getRandomImage=() => {
  return fetch('https://picsum.photos/200/300?random=1');
}

const container=document.getElementById("image-container")

const addRow=() =>{
  for(let i=0;i<5;i++){
    let imgEl=document.createElement("img");
    imgEl.setAttribute("class","image-placeholder");
    getRandomImage()
    .then(data=>data.url)
    .then(url=>{
      imgEl.src=url;
      container.appendChild(imgEl);
    })
  } 
}

document.addEventListener('scroll', function(e) {
  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    addRow()
  }
});

function init(){
  for(let i=1;i<=15;i++){
    let imgEl=document.createElement("img");
    imgEl.setAttribute("class", "image-placeholder");
    container.appendChild(imgEl);
  }
  
  let elements=document.getElementsByClassName('image-placeholder');
    for(let imgEl of elements){
      getRandomImage()
      .then(data => data.url)
      .then(url =>{
        imgEl.src=url;
      })
    }
}
init();