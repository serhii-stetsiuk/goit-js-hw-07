'use strict';
const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formElem);
	let userInfo = {};
	if (formElem.email.value.length === 0 || formElem.password.value.length === 0) { alert('All form fields must be filled in'); return; }  else
	{
		userInfo = {
			email: formData.get('email').trim(),
			password: formData.get('password').trim()
		}
	};
	console.log(userInfo);
	formElem.reset();
})