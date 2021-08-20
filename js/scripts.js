//function for specification picker
function optionSelector(costFiled, price){
    const extraMemoryCost = document.getElementById(costFiled);
    extraMemoryCost.innerText = price;
    totalPrice();
}

//pricefinder
function priceFinder(filedValue){
    const priceField = document.getElementById(filedValue).innerText;
    const value = parseInt(priceField);
    return value;
}

// setting string field
function displayString( stringId , output){
    const totalField = document.getElementById(stringId);
    totalField.innerText = output;
}

//total price calculator
function totalPrice(){
    const basePrice = priceFinder('base-price');
    const memoryCost = priceFinder('extra-memory');
    const storageCost = priceFinder('extra-storage');
    const deliveryCost = priceFinder('delivery-charge');
    const totalPrice = basePrice+memoryCost+storageCost+deliveryCost;
    displayString('total-price' , totalPrice);
    displayString('final-price' , totalPrice)
}

//memory
document.getElementById('16GB-memory-btn').addEventListener('click', function(){
    optionSelector('extra-memory',180);
});
document.getElementById('8GB-memory-btn').addEventListener('click', function(){
    optionSelector('extra-memory',0);
});

//storage
document.getElementById('256gb-ssd').addEventListener('click', function(){
    optionSelector('extra-storage',0);
});
document.getElementById('512gb-ssd').addEventListener('click', function(){
    optionSelector('extra-storage',100);
});
document.getElementById('1tb-ssd').addEventListener('click', function(){
    optionSelector('extra-storage',180);
});

//deivary
document.getElementById('normal-delivary').addEventListener('click', function(){
    optionSelector('delivery-charge',0);
});
document.getElementById('fast-delivary').addEventListener('click', function(){
    optionSelector('delivery-charge',20);
});

//coupon Code tester

document.getElementById('coupon-apply-btn').addEventListener('click', function(){
    const couponCode = document.getElementById('coupon-input')
 
    if(couponCode.value == 'stevekaku'){
        const currentPrice=document.getElementById('final-price');
        const value= parseInt(currentPrice.innerText)
        const discountedPrice =value - ((value/100)*20);
        currentPrice.innerText = discountedPrice;
        couponCode.value = '';
}
});