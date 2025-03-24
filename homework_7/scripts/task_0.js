
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування ?')) {

	function getSeasonYear(monthNumber) {
		let season;

		if (monthNumber <= 2 || monthNumber === 12) {
			season = document.write(`Місяць за номером ${monthNumber} це зима`);
		}
		else if (monthNumber <= 5) {
			season = document.write(`Місяць за номером ${monthNumber} це весна`);
		}
		else if (monthNumber <= 8) {
			season = document.write(`Місяць за номером ${monthNumber} це літо`);
		}
		else if (monthNumber <= 11) {
			season = document.write(`Місяць за номером ${monthNumber} це осінь`);
		}
		else {
			alert('Такого місяця не існує');
		}
		return season;
	}

	let number = parseInt(prompt('Введіть номер місяця', ''));
	getSeasonYear(number);	
}