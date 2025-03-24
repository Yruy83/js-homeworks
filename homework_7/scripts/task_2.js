
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати тестування ?')) {

	function getWeekDay(day) {
		// return day <= 5 ? 'робочий день' : 'вихідний день';
		return day <= 5;
	}

	let numberDay = parseInt(prompt('Ведіть номер дня', ''));
	// const result = getWeekDay (numberDay);
	// document.write(`День ${numberDay} це ${result}`);
	if (getWeekDay(numberDay)) {
		document.write(`День ${numberDay} це робочий день`);
	}
	else {
		document.write(`День ${numberDay} це не робочий день`);
	}

	// ===============================================


	// function getWeekDay(day) {
	// 	let userDay;
	// 	if (day <= 5) {
	// 		userDay = document.write(`День ${numberDay} - це робочий день`);
	// 	}
	// 	else if (day > 7) {
	// 		document.write(`День ${numberDay} - такого дня не має`);
	// 	}
	// 	else {
	// 		userDay = document.write(`День ${numberDay} -вихідний день`);
	// 	}
	// 	return userDay;
	// }

	// let numberDay = parseInt(prompt('Ведіть номер дня', ''));
	// getWeekDay(numberDay);
}