const plusPhone = document.getElementById('phone-plus');

plusPhone.addEventListener('click', function () {
    const inputField = document.getElementById('phone-qty');
    const prevQty = getQty(inputField);
    const updatedQty = updateQty(inputField, prevQty, true);
    const totalPhoneCost =  updatePhoneCost(updatedQty)
    showTotalCost()
})


const minusPhone = document.getElementById('phone-minus')

minusPhone.addEventListener('click', function () {
    const inputField = document.getElementById('phone-qty')
    const prevQty = getQty(inputField);
    const updatedQty = updateQty(inputField, prevQty, false);
    const totalPhoneCost =
        updatePhoneCost(updatedQty);
        showTotalCost()
})



// get Quantity
function getQty(inputField) {
    return parseInt(inputField.value)
}


// show updated cost
function updatePhoneCost(updatedQty) {
    const cost = updatedQty * 1219;
    document.getElementById('phone-cost').innerText = cost;
    return cost
}


// update Quantity
function updateQty(inputField, prevQty, isPlus) {
    let updatedQty;
    if (isPlus) {
        updatedQty = prevQty + 1;

    } else if (prevQty <= 1) {
        updatedQty = 1;
    }
    else {
        updatedQty = prevQty - 1;
    }
    inputField.value = updatedQty
    return updatedQty;
}


// case 

const casePlus = document.getElementById('case-plus')
   
casePlus.addEventListener('click', function () {

 const inputField = document.getElementById('case-qty');
    const prevQty = getQty(inputField);
    const updatedQty = updateQty(inputField,prevQty,true);

    const totalCaseCost =  updateCaseCost(updatedQty);
    showTotalCost()
})



const caseMinus = document.getElementById('case-minus');


caseMinus.addEventListener('click',function(){
const inputField  = document.getElementById('case-qty')
    const prevQty = getQty(inputField);
    const updatedQty = updateQty(inputField,prevQty,false);
    const totalCaseCost = updateCaseCost(updatedQty)
    showTotalCost();
    
})

// update case quantity

function updateCaseCost(qty) {
    const cost = qty * 59;
    document.getElementById('case-cost').innerText = cost
    return cost;
}


function showTotalCost(){
    const subTotalElem = document.getElementById('sub-total')
const phoneCostElem = document.getElementById('phone-cost')
const phoneCost =  parseInt(phoneCostElem.innerText);

const caseCostElem = document.getElementById('case-cost');
const caseCost = parseInt(caseCostElem.innerText);

const subTotal = phoneCost + caseCost;

subTotalElem.innerText = subTotal;

let tax = subTotal*.1;
tax = tax.toFixed(2);
document.getElementById('tax').innerText = tax;

const total = document.getElementById('total');
total.innerText = subTotal + tax
}