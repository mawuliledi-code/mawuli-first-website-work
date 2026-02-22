// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Joyiah Ventures";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/ghacem.png") {
    myImage.setAttribute("src", "images/ghacem-cement.png");
  } else {
    myImage.setAttribute("src", "images/ghacemm.png");
  }
});
