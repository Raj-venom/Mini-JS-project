
const text = document.querySelector(".color-code");
const btn = document.querySelector(".btn");


function changeColor(){

    let randomNumber = Math.floor(Math.random() * 16777215);
    let colorcode = "#" + randomNumber.toString(16);

    // to change background color
    document.body.style.backgroundColor = colorcode;
    // to change color code text
    text.innerHTML = colorcode;

    // to change button color according to background
    btn.style.backgroundColor= colorcode;

    

    console.log( randomNumber , colorcode)
}


btn.addEventListener("click", changeColor)
text.addEventListener("click", changeColor)




// initial call or fuction call after realoding page
changeColor()