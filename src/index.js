var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
	all: starWarsNames,
	random: random
};

function random(number) {
	if (number == undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];
		for (var i = number - 1; i >= 0; i--) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}