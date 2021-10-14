let cardBgs=["radial-gradient(#1fe4f5, #3fbafe)","radial-gradient(#fbc1cc, #fa99b2)","radial-gradient(#76b2fe, #b69efe)","radial-gradient(#60efbc, #58d5c9)","radial-gradient(#f588d8, #c0a3e5)"]
const cardSheet=document.getElementById('card-sheet');
const openSheet=()=>{
    console.log("foo");
    cardSheet.style.height="100%"
}
const closeSheet=()=>{
    cardSheet.style.height="0%"
}