
// Дано масив елементів. Вивести на екран елементи, що більші за 100. Тут використати цикл for..of.

if (confirm('Почати тестування ?')) {

	const quantityElement = parseInt(prompt('Введіть кількість елементів масиву', ''));
	
	function getRandomElement (min = 0, max, quantity) {
		const randomArray = new Array ();
	//	const randomArray = new Array (quantity); так не вийде бо як виявилось метод ".push" не працює з порожніми(пустими) комірками(слотами)
		for (let i = 0; i < quantity; i++) {
		let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
		randomArray.push(randomNumber)
	}
	return randomArray;
}

const array = getRandomElement(0, 200, quantityElement);
// console.log(array.length)

function getNumberMore100 (array) {
	let newArray = [];
	for(let number of array) {
		if (number > 100) {
			newArray.push(number);
		}
	}
	return newArray
}
document.write(`Масив елементів : ${array}<br><br>`);
document.write(`Елементи, які більше 100 : ${getNumberMore100(array)}`);
}