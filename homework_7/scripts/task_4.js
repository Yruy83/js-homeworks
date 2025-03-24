
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Почати тестування ?')) {

	function getNumberOperation(num1, num2, num3) {

		let evenNumber = 0;
		let positivNumber = 0;
		let bigNumber = 0;

		if (num1 % 2 === 0) {
			evenNumber ++;
		}
		if (num2 % 2 === 0) {
			evenNumber ++;
		}
		if (num3 % 2 === 0) {
			evenNumber ++;
		}

		if (num1 > 0) {
			positivNumber ++;
		}
		if (num2 > 0) {
			positivNumber ++;
		}
		if (num3 > 0) {
			positivNumber ++;
		}

		if (num1 > 100) {
			bigNumber ++;
		}
		if (num2 > 100) {
			bigNumber ++;
		}
		if (num3 > 100) {
			bigNumber ++;
		}

		return document.write(`Кількість парних чисел = ${evenNumber}<br> Кількість додатніх чисел = ${positivNumber}<br> Кількість чисел більше 100 = ${bigNumber}`);
	}

	let firstNumber = parseInt(prompt('Введіть перше число', ''));
	let secondNumber = parseInt(prompt('Введіть друге число', ''));
	let thirdNumber = parseInt(prompt('Введіть третє число', ''));
	getNumberOperation(firstNumber, secondNumber, thirdNumber);
}