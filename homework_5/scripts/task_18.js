
// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

/*
Ввести лічильник який буде сумувати показники температури.
Створити цикл який перебирає від "1" до "12" місяців.
ВВести дані за місяць.
Порахувати та вивести середню температуру за 12 циклів.
 */

if (confirm('Почати тестування ?', '')) {

	let Totaltemperature = 0;
	let monthName = '';

	document.write(`<table>`);
	document.write(`<thead>`);
	document.write(`<tr>`);
	document.write(`<td>Номер місяця</td>`);
	document.write(`<td>Показники температури</td>`);
	document.write(`</tr>`);
	document.write(`<thead>`);
	document.write(`<tbody>`);

	for (let i = 1; i <= 12; i++) {
		switch (i) {
			case 1: monthName = 'Січні';
				break;
			case 2: monthName = 'Лютому';
				break;
			case 3: monthName = 'Березні';
				break;
			case 4: monthName = 'Квітні';
				break;
			case 5: monthName = 'Травні';
				break;
			case 6: monthName = 'Червні';
				break;
			case 7: monthName = 'Липні';
				break;
			case 8: monthName = 'Серпні';
				break;
			case 9: monthName = 'Вересні';
				break;
			case 10: monthName = 'Жовтні';
				break;
			case 11: monthName = 'Листопаді';
				break;
			case 12: monthName = 'Грудні';
				break;
		}
		document.write(`<tr>`)
		document.write(`<td>${monthName}</td>`)
		temperature = parseInt(prompt(`Введіть температуру в ${monthName}`, ''));
		document.write(`<td>${temperature}</td>`)

		Totaltemperature += temperature;
		document.write(`</tr>`)
	}

	const averageValue = Totaltemperature / 12;
	document.write(`</tbody>`)
	document.write(`<tfooter>`)
	document.write(`<tr>`)
	document.write(`<td>Середнє значення температурі за рік = </td>`);
	document.write(`<td>${averageValue}</td>`);
	document.write(`</tr>`)
	document.write(`</tfooter>`)
	document.write(`</tbody>`)
	document.write(`</table>`)
}