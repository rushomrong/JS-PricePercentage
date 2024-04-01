// Provided pricing information
const mainProductPrice = 22.99; // Main product price
const buy2Price = 19.99; // Price when buying 2
const buy3Price = 17.99; // Price when buying 3
const comparedFirstPrice = 32.99;

// Calculate the save percentage for Buy 2 and Buy 3
const savePercentage2 = ((mainProductPrice - buy2Price) / mainProductPrice) * 100;
const savePercentage3 = ((mainProductPrice - buy3Price) / mainProductPrice) * 100;

// Calculate total prices for Buy 2 and Buy 3
const total2 = buy2Price * 2; // Total price for Buy 2
const total3 = buy3Price * 3; // Total price for Buy 3

// Calculate compare prices (main product price multiplied by 2 or 3)
const compare2 = mainProductPrice * 2; // Compare price for Buy 2
const compare3 = mainProductPrice * 3; // Compare price for Buy 3



const option1 = createOptionElement(false, `${mainProductPrice}€`, `32.99€`, `${mainProductPrice}€`, `32.99€`)

const option2 = createOptionElement(savePercentage2.toFixed(2),
  `${buy2Price}€`,
  `${comparedFirstPrice}€`,
  `${total2.toFixed(2)}€`,
  `${compare2.toFixed(2)}€`)


const option3 = createOptionElement(savePercentage3.toFixed(2),
  `${buy3Price}€`,
  `${comparedFirstPrice}€`,
  `${total3.toFixed(2)}€`,
  `${compare3.toFixed(2)}€`)



function modifyWidget() {


  const element = document.querySelectorAll('.price-new-form');
  if (element.length >= 2) {

    for (let i = 0; i < 3; i++) {
      element[i].innerHTML = [option1, option2, option3][i]
    }

  } else {
    // Retry after a delay if the element is not found yet
    setTimeout(modifyWidget, 500); // Retry after 1 second (adjust as needed)
  }
}

document.addEventListener('DOMContentLoaded', modifyWidget);


function createOptionElement(saveText, price, comparePrice, totalPrice, totalComparePrice) {

  return `<div class="offer">
  ${saveText ? `<p class="save-text">U BESPAART ${saveText}%</p>` : ''}
    <div class="price-block">
      <span class="compare-price">${comparePrice}</span>
      <span class="actual-price">${price}</span>
    </div>
    <div class="total-block">
      <span class="total-text">TOTAAL</span>
      <span class="compare-price">${totalComparePrice}</span>
      <span class="actual-price">${totalPrice}</span>
    </div>
    </div> `

}


document.addEventListener("DOMContentLoaded", function () {

  var video = document.querySelectorAll("video");
  if (video) {
    video.forEach(el => {
      el.setAttribute("playsinline", "");
    })
  }

});






===== New JavaScript ===

// Provided pricing information
const mainProductPrice = 22.99; // Main product price
const buy2Price = 19.99; // Price when buying 2
const buy3Price = 17.99; // Price when buying 3
const comparedFirstPrice = 32.99;

// Calculate the save percentage for Buy 2 and Buy 3
const savePercentage2 = ((mainProductPrice - buy2Price) / mainProductPrice) * 100;
const savePercentage3 = ((mainProductPrice - buy3Price) / mainProductPrice) * 100;

// Calculate total prices for Buy 2 and Buy 3
const total2 = buy2Price * 2; // Total price for Buy 2
const total3 = buy3Price * 3; // Total price for Buy 3

// Calculate compare prices (main product price multiplied by 2 or 3)
const compare2 = mainProductPrice * 2; // Compare price for Buy 2
const compare3 = mainProductPrice * 3; // Compare price for Buy 3

const option1 = createOptionElement(false, `${mainProductPrice}€`, `32.99€`, `${mainProductPrice}€`, `32.99€`)

const option2 = createOptionElement(savePercentage2.toFixed(2),
  `${buy2Price}€`,
  `${comparedFirstPrice}€`,
  `${total2.toFixed(2)}€`,
  `${compare2.toFixed(2)}€`)

const option3 = createOptionElement(savePercentage3.toFixed(2),
  `${buy3Price}€`,
  `${comparedFirstPrice}€`,
  `${total3.toFixed(2)}€`,
  `${compare3.toFixed(2)}€`)

// Additional variants
const buy4Price = 24.99; 
const buy5Price = 22.99;
const buy6Price = 19.99;


const savePercentage4 = ((mainProductPrice - buy4Price) / mainProductPrice) * 100;
const savePercentage5 = ((mainProductPrice - buy5Price) / mainProductPrice) * 100;
const savePercentage6 = ((mainProductPrice - buy6Price) / mainProductPrice) * 100;

const total4 = buy4Price * 1;
const total5 = buy5Price * 2;
const total6 = buy6Price * 3;

const compare4 = mainProductPrice * 1;
const compare5 = mainProductPrice * 2;
const compare6 = mainProductPrice * 3;

const option4 = createOptionElement(savePercentage4.toFixed(2),
  `${buy4Price}€`,
  `${comparedFirstPrice}€`,
  `${total4.toFixed(2)}€`,
  `${compare4.toFixed(2)}€`);

const option5 = createOptionElement(savePercentage5.toFixed(2),
  `${buy5Price}€`,
  `${comparedFirstPrice}€`,
  `${total5.toFixed(2)}€`,
  `${compare5.toFixed(2)}€`);

const option6 = createOptionElement(savePercentage6.toFixed(2),
  `${buy6Price}€`,
  `${comparedFirstPrice}€`,
  `${total6.toFixed(2)}€`,
  `${compare6.toFixed(2)}€`);

function modifyWidget() {
  const element = document.querySelectorAll('.price-new-form');
  if (element.length >= 5) {
    for (let i = 0; i < 6; i++) {
      element[i].innerHTML = [option1, option2, option3, option4, option5, option6][i]
    }
  } else {
    // Retry after a delay if the element is not found yet
    setTimeout(modifyWidget, 500); // Retry after 1 second (adjust as needed)
  }
}

document.addEventListener('DOMContentLoaded', modifyWidget);

function createOptionElement(saveText, price, comparePrice, totalPrice, totalComparePrice) {
  return `<div class="offer">
  ${saveText ? `<p class="save-text">U BESPAART ${saveText}%</p>` : ''}
    <div class="price-block">
      <span class="compare-price">${comparePrice}</span>
      <span class="actual-price">${price}</span>
    </div>
    <div class="total-block">
      <span class="total-text">TOTAAL</span>
      <span class="compare-price">${totalComparePrice}</span>
      <span class="actual-price">${totalPrice}</span>
    </div>
    </div> `
}

document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelectorAll("video");
  if (video) {
    video.forEach(el => {
      el.setAttribute("playsinline", "");
    })
  }
});







=== Old Code DE price percentage ==

// Provided pricing information
const mainProductPrice = 22.99; // Main product price
const buy2Price = 19.99; // Price when buying 2
const buy3Price = 17.99; // Price when buying 3

// Calculate the save percentage for Buy 2 and Buy 3
const savePercentage2 = ((mainProductPrice - buy2Price) / mainProductPrice) * 100;
const savePercentage3 = ((mainProductPrice - buy3Price) / mainProductPrice) * 100;

// Calculate total prices for Buy 2 and Buy 3
const total2 = buy2Price * 2; // Total price for Buy 2
const total3 = buy3Price * 3; // Total price for Buy 3

// Calculate compare prices (main product price multiplied by 2 or 3)
const compare2 = mainProductPrice * 2; // Compare price for Buy 2
const compare3 = mainProductPrice * 3; // Compare price for Buy 3



const option1 = createOptionElement(false, `${mainProductPrice}€`, `${(mainProductPrice + 10).toFixed(2)}€`, `${mainProductPrice}€`, `${(mainProductPrice + 10).toFixed(2)}€`)

const option2 = createOptionElement(Math.round(savePercentage2),
  `${buy2Price}€`,
  `${mainProductPrice}€`,
  `${total2.toFixed(2)}€`,
  `${compare2.toFixed(2)}€`)


const option3 = createOptionElement(Math.round(savePercentage3),
  `${buy3Price}€`,
  `${mainProductPrice}€`,
  `${total3.toFixed(2)}€`,
  `${compare3.toFixed(2)}€`)



function modifyWidget() {


  const element = document.querySelectorAll('.price-new-form');
  if (element.length >= 2) {

    for (let i = 0; i < 3; i++) {
      element[i].innerHTML = [option1, option2, option3][i]
    }

  } else {
    // Retry after a delay if the element is not found yet
    setTimeout(modifyWidget, 500); // Retry after 1 second (adjust as needed)
  }
}

document.addEventListener('DOMContentLoaded', modifyWidget);


function createOptionElement(saveText, price, comparePrice, totalPrice, totalComparePrice) {

  return `<div class="offer">
  ${saveText ? `<p class="save-text">Sie sparen ${saveText}%</p>` : ''}
    <div class="price-block">
      <span class="compare-price">${comparePrice}</span>
      <span class="actual-price">${price}</span>
    </div>
    <div class="total-block">
      <span class="total-text">Gesamt</span>
      <span class="compare-price">${totalComparePrice}</span>
      <span class="actual-price">${totalPrice}</span>
    </div>
    </div> `

}
