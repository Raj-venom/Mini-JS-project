const center = document.querySelector(".center");
var val;

// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

// center.addEventListener("mousemove", function pop(details) {
//   console.log(details.clientX, details.clientY);

//   let div = document.createElement("div");
//   div.classList.add("imgdiv");

//   div.style.left = details.clientX + "px";
//   div.style.top = details.clientY + "px";

//   document.body.appendChild(div);

//   setTimeout(function () {
//     div.remove();
//   }, 2000);

// });

const link = function () {
  val = Math.floor(Math.random() * 4);

  function value() {
    if (val == 0) {
      return "water";
    }
    if (val == 1) {
      return "fire";
    }
    if (val == 2) {
      return "nature";
    }
    if (val == 3) {
      return "sun";
    }
    if (val == 4) {
      return "star";
    }
  }
  let link = `https://source.unsplash.com/150x200/?technology,${value()}`;

  return link;
};

// let val = setInterval(()=>url,100)
// console.log(val)

center.addEventListener(
  "mousemove",
  throttleFunction((details) => {
    console.log(details.clientX, details.clientY);

    // Creating new div while moving the mouse inside .center
    let div = document.createElement("div");

    // adding one imgdiv class which will get pop up while moving the mouse
    div.classList.add("imgdiv");

    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    // Creating new element Img
    let img = document.createElement("img");

    img.classList.add("popimg");

    // giving source link to img element
    // img.setAttribute("src", link())
    img.setAttribute("src", link());

    // adding img to div
    div.appendChild(img);

    // adding div to body
    document.body.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }, 400)
);
