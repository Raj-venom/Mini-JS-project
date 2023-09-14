var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectLocation = rect.getBoundingClientRect(); // getting all detail of rectangle top, left, width, button 
  //   console.log(rectLocation)    

  var insideRectLoc = details.clientX - rectLocation.left; // current location of mouse

  // if mouse is in left
  if (insideRectLoc < rectLocation.width / 2) {
    var redIntensity = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRectLoc
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redIntensity}, 0, 0)`,
      ease: Power4,
    });

    // same as up
    // rect.style.background = `rgb(${redIntensity}, 0, 0)`;
  }
  // if mouse is in right
  else {
    var blueIntensity = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      insideRectLoc
    );

    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueIntensity})`,
      ease: Power4,
    });

    // same as up
    // rect.style.background = `rgb(0, 0,${blueIntensity})`;
  }
});

// to change the background color of rectangle to normal white after mouse leave the rectangle
rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: `white`,
  });
});
