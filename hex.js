const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const prev = document.getElementById("prev");
const color = document.querySelector(".color");
const heading = document.getElementById("heading");
const headingPrev = document.querySelector(".headingPrev");
const copy = document.getElementById("copy");
const prevColor = [];

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  heading.style.color = hexColor;
  color.style.color = hexColor;
  prevColor.push(hexColor);
});

prev.addEventListener("click", function () {
  let previousHex = prevColor.pop();
  document.body.style.backgroundColor = prevColor[prevColor.length - 1];
  color.textContent = prevColor[prevColor.length - 1];
  color.style.color = prevColor[prevColor.length - 1];
  headingPrev.style.color = prevColor[prevColor.length - 1];
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

copy.addEventListener("click", function copyToCB() {
  let copyHex = document.getElementById("copy").value;
  navigator.clipboard.writeText(prevColor[prevColor.length - 1]).then(() => {
    alert("Copied: " + prevColor[prevColor.length - 1]);
  });
});
