let count = 0;
const CURRENT_NUMBER = document.getElementById("currentNumber");

function increment() {
    var btnSub = document.getElementById("subtrair");
    var btnAdd = document.getElementById("adicionar");

    if (count < 9) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
        btnSub.disabled = false;
        CURRENT_NUMBER.style.color = "black";
    } else if (count == 9) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
        btnAdd.disabled = true;
        CURRENT_NUMBER.style.color = "red";
    }
}

function decrement() {
    var btnSub = document.getElementById("subtrair");
    var btnAdd = document.getElementById("adicionar");

    if (count > 1) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
        btnAdd.disabled = false;
        CURRENT_NUMBER.style.color = "black";
    } else if (count == 1) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
        btnSub.disabled = true;
        CURRENT_NUMBER.style.color = "red";
    }
}
