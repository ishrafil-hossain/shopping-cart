// this is practice purpose File.It's doesn't effect this project 
function updatePrice(id, isAdd) {
    // debugger;
    const caseNumberId = document.getElementById(id);
    const caseNumberValue = caseNumberId.value;
    let caseNumber = parseInt(caseNumberValue);
    if (isAdd) {
        caseNumber = caseNumber + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = caseNumber - 1;
    }
    caseNumberId.value = caseNumber;
    if (id == 'case-number') {
        // case price 
        const casePriceId = document.getElementById('case-price');
        casePriceId.innerText = caseNumber * 59;
    }
    else {
        //Mobile Price 
        const mobilePriceId = document.getElementById('mobile-price');
        mobilePriceId.innerText = caseNumber * 1219;
    }
}



// ---------------MOBILE------------------- 

// Mobile Plus Button 
document.getElementById('mobile-minus').addEventListener('click', function () {
    updatePrice('mobile-number', false);
});

// Mobile Plus Button 
document.getElementById('mobile-plus').addEventListener('click', function () {
    updatePrice('mobile-number', true);
});


// ---------------CASE------------------- 
// Case Minus Button 
document.getElementById('case-minus').addEventListener('click', function () {

    updatePrice('case-number', false);


});

// Case Plus Button 
document.getElementById('case-plus').addEventListener('click', function () {
    updatePrice('case-number', true);

});

