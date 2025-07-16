'use strict';

const categories = document.querySelector('ul#categories');
console.log(`Number of categories: ${categories.children.length}`);

const y = document.querySelectorAll('ul#categories li ul');
const x = y.forEach(element => {
	console.log(`Category: ${element.previousElementSibling.textContent}`);
	console.log(`Elements: ${element.childElementCount}`);
});


