const container = document.getElementById("container");
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yes-btn"); 
const nobtn = document.querySelector(".no-btn"); 
const envelope = document.querySelector(".envelope");

yesbtn.addEventListener("click", () => {
  question.innerHTML = "TE AMOOOOOOO";
  envelope.style.display = "block";
});

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

nobtn.addEventListener("mouseover", (e) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;

  const btnHeight = nobtn.getBoundingClientRect().height;
  const btnWidth = nobtn.getBoundingClientRect().width;

  const newTop = getRandomNumber(0, containerHeight - btnHeight);
  const newLeft = getRandomNumber(0, containerWidth - btnWidth);

  nobtn.style.position = "absolute";  // Necesario para el movimiento dentro del contenedor
  nobtn.style.top = newTop + "px";
  nobtn.style.left = newLeft + "px";
});