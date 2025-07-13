'use strict';

class Storage {
	#items = [];
	constructor(item) {
		this.#items = item;
	}
	getItems() {
		return this.#items;
	};
	addItem(newItem) {
		this.#items.push(newItem);
	};
	removeItem(itemToRemove) {
		const x = this.#items.indexOf(itemToRemove);
		if (x != -1) { this.#items.splice(x,1) };
	}
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]