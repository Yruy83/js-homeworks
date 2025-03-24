
// Створити функцію, яка за номером місяця повертає його назву.

if (confirm('Почати тестування ?')) {

	function getMonthName(number) {
		let result;
		switch (number) {
			case 1:
				result = `${number}-ий місяць це Січень`;
				break;
			case 2:
				result = `${number}-ий місяць це Лютий`;
				break;
			case 3:
				result = `${number}-ій місяць це Березень`;
				break;
			case 4:
				result = `${number}-ий місяць це Квітень`;
				break;
			case 5:
				result = `${number}-ий місяць це Травень`;
				break;
			case 6:
				result = `${number}-ий місяць це Червень`;
				break;
			case 7:
				result = `${number}-ий місяць це Липень`;
				break;
			case 8:
				result = `${number}-ий місяць це Серпень`;
				break;
			case 9:
				result = `${number}-ий місяць це Вересень`;
				break;
			case 10:
				result = `${number}-ий місяць це Жовтень`;
				break;
			case 11:
				result = `${number}-ий місяць це Листопад`;
				break;
			case 12:
				result = `${number}-ий місяць це Грудень`;
				break;
			default :
			alert('Такого місяця не має');
			result = `${number} такого місяця не існує`;
			break;
		}

		return result;
	}

	let monthNumber = parseInt(prompt('Введіть номер місяця', ''));
	document.write(getMonthName(monthNumber));
}