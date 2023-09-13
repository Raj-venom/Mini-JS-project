const api =
  "https://api.qr-code-generator.com/v1/create?access-token=dEWZeG0USvMEE6_EoncY9Xnfc-q_cPDxp5YdZxsSIl9hp5iW7BEvGLeouwH37R8V&qr_code_text=";

const btn = document.querySelector(".btn");
const img = document.querySelector(".img");

const genertor = document.querySelector(".generate");

function qr() {
  let val = genertor.value;

  // to Prevent from generating qr when no enty is done
  // it helps to generate only if input is done
  if (val != "Name:  Age:  Address:") {
    console.log(val);
    console.log("test");

    let qrImg = api + val;
    img.src = qrImg;
    console.log(qrImg);
  } else {
    console.log("Enter input field to generate qr!");
  }
}
