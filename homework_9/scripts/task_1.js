

// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування ?')) {

	const element = parseInt(prompt('Введіть кількість елементів', ''));

	function getArray (quantity) {
		let array = new Array (quantity);
		array.fill (0);
		return array;
	}

	const userArray = getArray (element);
	console.log(userArray.length);
	document.write(`Кількість елементів масиву : ${element}<br><br>`);
	document.write (`Масив з вказаною кількістю елементів : ${userArray}`);
}