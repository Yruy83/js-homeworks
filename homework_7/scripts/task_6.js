
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати тестування ?')) {

	function getRow (row, column, label) {
		document.write('<table>');
		document.write('<tbody>');
		for (let i = 1; i <= row; i++) {
			document.write('<tr>');
			for (let j = 1; j <= column; j++) {
				document.write(`<td>${label}</td>`);
			}
			document.write('</tr>');
		}
		document.write('</tbody>');
	document.write('</table>');
	}

	let rowQuantity = parseInt(prompt('Введіть кількість рядків', ''));
	let columnquantity = parseInt(prompt('Введіть кількість стовпців', ''));
	let message = prompt('Введіть повідомлення', '');

	getRow(rowQuantity, columnquantity, message);
}