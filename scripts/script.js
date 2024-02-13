let serialNum = 1;
//triangle area
function triangleCalculationArea(){
    // get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    //get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // area of triangle
    const area = 0.5 * base * height;
    console.log(area);

    // display area of triangle
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Triangle area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);
    
}

// rectangle area
function calculateRectangleArea(){
    // get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    
    // get rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    
    // rectangle area
    const area = width * length;

    // display rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Rectangle area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);
}

// parallelogram area
function calculateParallelogramArea(){
    
    const base = getInputValueById('parallelogram-base');
    
    const height = getInputValueById('parallelogram-height');

    const area = base * height;
    console.log("Area of parallelogram" ,area);

    setInnerTextById('parallelogram-area', area);

    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Parallelogram area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// rhombus area
function calculateRhombusArea() {
    const diagonal1 = getInputValueById("rhombus-d1");
    const diagonal2 = getInputValueById("rhombus-d2");
  
    const area = 0.5 * diagonal1 * diagonal2;
    setInnerTextById("rhombus-area", area);
  
    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Rhombus area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);
  }

// pentagon area
function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);

    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Pentagon area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// ellipse area
function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area',area);

    const displayOutput = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = serialNum +". "+  "Ellipse area: "+ area + " "+"cm²";
    serialNum++;
    displayOutput.appendChild(p);
}
