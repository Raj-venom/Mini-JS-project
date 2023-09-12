const text = document.querySelector(".color-code");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");

// Declared colorcode outside the function to use colorCode out side the function also
let colorcode = "";

function changeColor() {

    let randomNumber = Math.floor(Math.random() * 16777215);
    colorcode = "#" + randomNumber.toString(16);
   

  // to change background color
  document.body.style.backgroundColor = colorcode;
  // to change color code text
  text.innerHTML = colorcode;

  // to change button color according to background
  btn.style.backgroundColor = colorcode;


  console.log(randomNumber, colorcode);


}

// click event to change color
btn.addEventListener("click", changeColor);
text.addEventListener("click", changeColor);

// to copy text
img.addEventListener("click", copy);

function copy() {
  navigator.clipboard.writeText(colorcode);
}

// initial call or fuction call after realoding page
changeColor();
