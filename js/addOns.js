let totalAmount= 690;
let addAmount = 100;

function updateTotalAmount(){
    let checkbox=document.getElementById('additionalService')
    let totalAmountElement = document.getElementById('totalAmount');
    if(checkbox.checked){
        totalAmount+=addAmount;
    }
    else{
        totalAmount=690;
    }
    totalAmountElement.textContent = `Rs ${totalAmount}.00`;
}

