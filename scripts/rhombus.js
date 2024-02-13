function calculateRhombusArea() {
  const diagonal1 = getInputValueById("rhombus-d1");
  const diagonal2 = getInputValueById("rhombus-d2");

  const area = 0.5 * diagonal1 * diagonal2;
  setInnerTextById("rhombus-area", area);

  const displayOutput = document.getElementById("output");
  const p = document.createElement("p");
  p.innerText = "Rhombus area: "+ area + " "+"cm²";
  displayOutput.appendChild(p);
}
