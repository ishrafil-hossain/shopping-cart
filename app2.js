function updatePrice(product, price, isAdd) {
    // debugger;
    const productNumberId = document.getElementById(product + '-number');
    const productNumberValue = productNumberId.value;
    let productNumber = parseInt(productNumberValue);
    if (isAdd) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productNumberId.value = productNumber;

    // case price 
    const casePriceId = document.getElementById(product + '-price');
    casePriceId.innerText = productNumber * price;

    updateTotalPrice();

}

function gettingProductNumber(productsId) {
    const productId = document.getElementById(productsId + '-number');
    const product = parseInt(productId.value);
    return product;
}

function updateTotalPrice() {
    const numberOfMobile = gettingProductNumber('mobile');
    const totalMobilePrice = numberOfMobile * 1219;
    const numberOfCase = gettingProductNumber('case');
    const totalCasePrice = numberOfCase * 59;

    const subTotal = totalMobilePrice + totalCasePrice;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}



// ---------------MOBILE------------------- 

// Mobile Plus Button 
document.getElementById('mobile-minus').addEventListener('click', function () {
    updatePrice('mobile', 1219, false);
});

// Mobile Plus Button 
document.getElementById('mobile-plus').addEventListener('click', function () {
    updatePrice('mobile', 1219, true);
});


// ---------------CASE------------------- 
// Case Minus Button 
document.getElementById('case-minus').addEventListener('click', function () {

    updatePrice('case', 59, false);


});

// Case Plus Button 
document.getElementById('case-plus').addEventListener('click', function () {
    updatePrice('case', 59, true);

});




