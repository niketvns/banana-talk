
var fBody = document.querySelector("body");
var translate = document.querySelector("#translate");

var textInput = document.querySelector("#usr-input");

var outText = document.querySelector("#outText");

translate.addEventListener("click", eventHandler);

function eventHandler() {
    console.log(textInput.value);
    outText.innerHTML = textInput.value + " This is JavaScript Text";
    fBody.style.backgroundColor = ""
}




