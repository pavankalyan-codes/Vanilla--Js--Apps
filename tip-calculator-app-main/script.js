var tipPercentage=5;
var customTipPercentage;
var totalBillElement;
var totalBill;
var noOfPeopleElement;
var noOfPeople;
var customTip;

var tipEach;
var totalEach;

window.onload = function(){
    totalBillElement=document.getElementById("bill");
    //var tipPercent=document.querySelector('input[name="tip-percentage"]');
    noOfPeopleElement=document.getElementById("ppl");

    customTip=document.getElementById("tip-custom");

    tipEach=document.getElementById("tip-each");
    totalEach=document.getElementById("total-each");

    totalBillElement.addEventListener("input", function(){
        totalBill=parseInt(totalBillElement.value);
        showBill();
    })

    noOfPeopleElement.addEventListener("input", function(){
        noOfPeople=parseInt(noOfPeopleElement.value);
        showBill();
    })

    customTip.addEventListener("change", function(){

        customTipPercentage=customTip.value;
        if(customTipPercentage && customTipPercentage>=0){
            customTip.classList.add("selected-custom-tip");
            uncheckRadioButtons();
            tipPercentage=customTipPercentage;
            showBill();
        }
    })

    
}

function showBill(){

    if(totalBill && tipPercentage && noOfPeople){





        let tipForEach=((totalBill*tipPercentage)/100)/noOfPeople;
        let billForEach=(totalBill)/noOfPeople;

        tipEach.textContent=parseFloat(tipForEach).toFixed(2);
        totalEach.textContent=parseFloat(billForEach).toFixed(2);

    }
}

function uncheckRadioButtons(){
    document.querySelector('input[name="tip-percentage"]:checked').checked = false;
}

function getTip(tip){
    if(tipPercentage===tip){
        return;
    }

    tipPercentage=tip;
    customTip.classList.remove("selected-custom-tip");
    customTip.value="";
    showBill();
}

function reset(){
    totalBillElement.value="";
    noOfPeopleElement.value="";
    document.getElementById("tip5").checked=true;
    customTip.classList.remove("selected-custom-tip");
    customTip.value="";
    totalBill="";
    tipPercentage="";
    noOfPeople="";
    tipEach.textContent="0.00";
    totalEach.textContent="0.00";

}


