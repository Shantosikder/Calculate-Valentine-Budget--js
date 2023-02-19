document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('kitkat-quantity').value;
    const quantity = getInputValue('kitkat-quantity');
    const kitcatCost = quantity * 200;
    setInnerText('chocolate', kitcatCost);
    // document.getElementById('chocolate').innerText = kitcatCost;
    total();
});

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('rose-quantity');
    const roseCost = quantity * 100;
    setInnerText('rose', roseCost);
    // document.getElementById('rose').innerText = roseCost;
    total();
});

document.getElementById('diary-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('diary-quantity').value;
    const quantity = getInputValue('diary-quantity');
    const diaryCost = quantity * 100;
    setInnerText('diary', diaryCost);
    total();
    // document.getElementById('diary').innerText = diaryCost;
});

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
}

function total(){
    const chocolate = document.getElementById('chocolate').innerHTML;
    const rose = document.getElementById('rose').innerHTML;
    const diary = document.getElementById('diary').innerHTML;

    const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    // document.getElementById('total').innerHTML = totalSum;
    setInnerText('total',totalSum);
}

document.getElementById('promoApplybtn').addEventListener('click', function(){

    const promoCode = getInputValue('promo-code');
    if(promoCode == 101){
        const total = document.getElementById('total').innerHTML;
        const sum = total - parseInt(total)*0.1;
        // console.log(sum);
        setInnerText('all-total',sum);
    }else{
        alert('worng promo Code');
    }

});