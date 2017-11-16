var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfSubjects = 0 ;
var sumOfCredits = 0 ;
init();

function init() {
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateCredits);
}

function createInputBox(elementID) {
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementID;

    var labelElem = document.createElement("label");
    var text = document.createTextNode("Credit");
    labelElem.appendChild(text);
    labelElem.appendChild(inputElem);


    inputContainerElement.appendChild(labelElem);


}

function createBoxes(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {
     numberOfSubjects = document.getElementById("numberOfSubjects").value;
    createBoxes(numberOfSubjects);
}

function calculateCredits() {
    for (var i=1; i <= numberOfSubjects; i++) {
        var inputElemValue = document.getElementById("input" + i).value;
        console.log(inputElemValue);
        sumOfCredits +=  parseInt(inputElemValue) ;
    }
console.log(sumOfCredits);
    document.getElementById("sumOfCredits").innerHTML = sumOfCredits;
    document.getElementById("averageCredits").innerHTML = returnAverage();
}

function returnAverage() {
    console.log("total of subjects: ",numberOfSubjects);
    console.log("total of credits: ",sumOfCredits);
    console.log(parseInt(sumOfCredits) / parseInt(numberOfSubjects));
    return parseInt(sumOfCredits) / parseInt(numberOfSubjects);
}




