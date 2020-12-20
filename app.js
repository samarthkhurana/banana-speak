// var declaration of i/o & processing

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var clearButton = document.querySelector("#clear-button");

// link of the translation api used

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// function for taking input

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// server issues

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again later")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

function clearClickHandler(event) {
    txtInput.value = "";
    outputDiv.innerText = "";
}

clearButton.addEventListener('click',clearClickHandler);
btnTranslate.addEventListener("click", clickHandler);