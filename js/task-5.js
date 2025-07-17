'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const myBody = document.querySelector('body');
const pushNewColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
pushNewColor.addEventListener('click', () => {
	textColor.textContent = `${getRandomHexColor()}`;
	myBody.style.backgroundColor = textColor.textContent;
})