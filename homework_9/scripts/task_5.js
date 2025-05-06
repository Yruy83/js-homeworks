
// Дано масив елементів. Знайти добуток додатних елементів. Тут використати цикл for..of.

if (confirm('Почати тестування ?')) {

	const quantityElement = parseInt(prompt('Введіть кількість елементів масиву', ''));

	function getRandomNumber (min, max, length) {
		let array = [];
		for (let i = 0; i < length; i++) {
			let randomNum = min + Math.floor(Math.random() * (max-min +1));
			array.push(randomNum);
		}
		return array;
	}

	function getProductElement (array) {
		let result = 1;
		let hasPositiveElement = false;
		for (let element of array) {
			if (element > 0) {
				result *= element;
				hasPositiveElement = true;
			}
		}
		return hasPositiveElement ? result : 'Не має додатних елементів масиву';
	}

	const startArray = getRandomNumber (-10, 10, quantityElement);
	const productArray = getProductElement (startArray);
	document.write(`Масив чисел : ${startArray}<br>`);
	document.write(`Добуток всіх додатних елементів : ${productArray}`);

}
