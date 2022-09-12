
var translate = document.querySelector("#translate");

var textInput = document.querySelector("#usr-input");

translate.addEventListener("click", eventHandler);

function eventHandler() {
    console.log(textInput.value);
}
