//variables
const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((index) => {
  const image = document.createElement("img");
  image.src = `/images/${index}.jpg`;
  image.alt = `Sport photo ${index}`;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    //popup stuuf
  });

  gallery.appendChild(image);
});
