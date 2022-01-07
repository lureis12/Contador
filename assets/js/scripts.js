var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber;
    var botao = document.getElementById("btn-soma");
    if (currentNumber > 5) {
        botao.disabled = true;
    } 
    
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    var botao2 = document.getElementById("btn-subtrair");
    if (currentNumber < 0) {
        botao2.disabled = true;
    }
}




