
// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 

/*
Вивести ширину поля.
Вивести висоту поля.
Ввести кількість пострілів користувача.
Розташувати корабель випадковим чином.
Запитати у користувача номер рядка пострілу.
Запитати у користувача номер колонки пострілу.
Якщо номер рядка та номер колонки пострілу співпадають то корабель потоплено.

 */

if (confirm('Почати тестування ?')) {

	const columnNumber = parseInt(prompt('Введіть кількість колонок', ''));
	const rowNumber = parseInt(prompt('Введіть кількість рядків',''));
	const ammunitionNumber = parseInt(prompt('Введіть кількість боєприпасів',''));
	let userColNum;
	let userRowNum;

	const randomColNumber = 1 + Math.floor(Math.random()*columnNumber);
	const randomRowNumber = 1 + Math.floor(Math.random()*rowNumber);

	for (let i = 1; i <= ammunitionNumber; i++) {
		userColNum = parseInt(prompt('Введіть номер колонки для пострілу',''));
		userRowNum = parseInt(prompt('Введіть номер рядка для пострілу',''));

		// if (userColNum !== randomColNumber && userRowNum !== randomRowNumber) {
		// 	z = (`<td style="background-color:blue;"></td>`)
		// }
		// else {
		// 	z = (`<td></td>`)
		// }

		if (userColNum === randomColNumber && userRowNum === randomRowNumber) {
			document.write('Ви потопили корабель');
			break;
		}
		else {
			alert(`Ви не попали по кораблю, у вас залишилось ${ammunitionNumber - i} спроб`);
		}
	}
	document.write(`Позиція корабля по вісі Х : ${randomColNumber}`);
	document.write(`Позиція корабля по вісі Y : ${randomRowNumber}`);

// 	document.write('<table>');
// 	document.write('<tbody>');
// 	for (let row = 1; row <= rowNumber; row++) {
// 		document.write('<tr>');
// 		for (let col = 1; col <= columnNumber; col++) {
// 			document.write(`${z}`)
// 			// z
// 		}
// 		document.write('</tr>');
// }
// 	document.write('</tbody>');
// 	document.write('</table>');
}
