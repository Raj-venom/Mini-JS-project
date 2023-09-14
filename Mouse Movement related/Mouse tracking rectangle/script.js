window.addEventListener("mousemove", function (details) {

    let rect = document.querySelector("#rect");

    let size = rect.getBoundingClientRect().width /2

    // console.log(size)

    let val = 70;
  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    val + size ,
    window.innerWidth - (val + size),
    details.clientX
  );

//   console.log(xval)

  gsap.to("#rect", {
    left: xval + "px",
    ease: Power3,
  });
});
