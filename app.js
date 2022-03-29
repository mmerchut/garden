const btnBlueberryAdd = document.querySelector('.blueberryAdd');
const btnBlueberryMinus = document.querySelector('.blueberryMinus');

let blueberryQuantity = 0;

function blueberrySummary() {
    let price = (blueberryQuantity * 0.03).toFixed(2) + "zł";
    console.log(price);
}

function blueberryAdd(){
    blueberryQuantity++;
    console.log(blueberryQuantity);
    blueberrySummary()
}

function blueberryMinus() {
    blueberryQuantity--;
    console.log(blueberryQuantity);
    blueberrySummary()
}

btnBlueberryAdd.addEventListener('click', blueberryAdd);
btnBlueberryMinus.addEventListener('click', blueberryMinus);