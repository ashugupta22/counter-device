
function increment(){
    let counterExt = document.getElementById("counter")
    let currentValue = counterExt.innerText;
    let updatedValue = parseInt(currentValue) + 1;
    counterExt.innerText = updatedValue;
}

function decrement(){
    let counterExt = document.getElementById("counter");
    let currentValue = counterExt.innerText;
    let updatedValue =currentValue >0 ? parseInt(currentValue) - 1: 0;
    counterExt.innerText = updatedValue;

}

function reset(){
let counterExt = document.getElementById("counter");
counterExt.innerText = 0;
}