// Some JavaScript to load the image and show the form. There is no actual backend functionality. This is just the UI

const form = document.querySelector("#img-form");
const img = document.querySelector("#img");
const outputPath = document.querySelector("#output-path");
const fileName = document.querySelector("#filename");
const widthInput = document.querySelector("#height");
const heightInput = document.querySelector("#width");

function loadImage(e) {
  const file = e.target.files[0];

  if (!isFileImage(file)) {
    alert("Please select an image file");
    return;
  }

  // Get original dimensions of the selected image
  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = () => {
    console.log("Loaded", this.width, this.height, file);
    widthInput.value = this.width;
    heightInput.value = this.height;
  };

  form.style.display = "block";
  document.querySelector("#filename").innerHTML = file.name;
}

function isFileImage(file) {
  const acceptedImageTypes = [
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  return file && acceptedImageTypes.includes(file["type"]);
}

document.querySelector("#img").addEventListener("change", loadImage);
