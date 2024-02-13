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
    
}