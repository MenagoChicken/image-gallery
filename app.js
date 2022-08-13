//variables
const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const backButton = document.querySelector(".portfolio-btn");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((index) => {
  const immageDiv = document.createElement("div");
  immageDiv.classList.add("imageContainer");

  const image = document.createElement("img");
  image.src = `/images/${index}.jpg`;
  image.alt = `Sport photo ${index}`;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    //popup stuff
    backButton.style.visibility = "hidden";
    popup.style.transform = "translateY(0)";
    selectedImage.src = `/images/${index}.jpg`;
  });

  immageDiv.appendChild(image);
  gallery.appendChild(immageDiv);
});

popup.addEventListener("click", () => {
  backButton.style.visibility = "";
  popup.style.transform = "translate(-100%)";
  popup.src = "";
  popup.alt = "";
});
