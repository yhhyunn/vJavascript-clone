const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad() {
  console.log("finish");
}

function paintIamge(imgNumber) {
  const image = new Image();
  image.src = `Pics/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //   image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintIamge(randomNumber);
}

init();
