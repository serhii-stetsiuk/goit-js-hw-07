'use strict';

const userNameInput = document.querySelector('#name-input');
const userNameElem = document.querySelector('#name-output');
userNameInput.addEventListener('input', (text) => {
	userNameInput.value.trim().length != 0 ? userNameElem.textContent = text.currentTarget.value.trim() : userNameElem.textContent = 'Anonymous' ;
})