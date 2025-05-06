
// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('почати тестування ?')) {

	const quantityElement = parseInt(prompt('Введіть кількість елементів масиву', ''));

	function getRandomArray (min, max, length) {
		const array = [];
		for (let i=0; i < length; i++) {
			let randomNumber = min + Math.floor(Math.random()*(max-min+1));
			array.push(randomNumber)
		}
		return array;
	}

	function getModifyArray (array) {
		const modArray = array.map((element, index, arr) => arr[index] > 1000 ? Number((element * 0.7).toFixed(2)) : element);
		return modArray;
	}

	const startArray = getRandomArray (100, 2000, quantityElement);
	const changedArray = getModifyArray (startArray);

	document.write(`Початковий масив цін : ${startArray}<br><br>`);
	document.write(`Масив цін зі знижкою 30% : ${changedArray}`);
}