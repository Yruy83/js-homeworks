
// Створити окремі функції, які для 4 чисел знаходять:

/*
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення. 
 */

if (confirm('Почати тестування ?')) {

	function getSum(num1, num2, num3, num4) {
		return num1 + num2 + num3 + num4;
	}

	function getProduct(num1, num2, num3, num4) {
		return num1 * num2 * num3 * num4;
	}

	function getAverage(num1, num2, num3, num4) {
		return (num1 + num2 + num3 + num4) / 4;
	}

	function getMinValue2(num1, num2) {
		return num1 < num2 ? num1 : num2;
	}

	function getMinValue3(num1, num2, num3) {
		return getMinValue2(getMinValue2(num1, num2), num3);
	}

	function getMinValue4(num1, num2, num3, num4) {
		return getMinValue2(getMinValue3(num1, num2, num3), num4);
	}

	let firstNumber = parseInt(prompt('Введіть перше число', ''));
	let secondNumber = parseInt(prompt('Введіть друге число', ''));
	let thirdNumber = parseInt(prompt('Введіть третє число', ''));
	let fourthNumber = parseInt(prompt('Введіть четверте число', ''));

	document.write('<table>');
	document.write('<thead>');
	document.write('<tr>');
	document.write('<th>');
	document.write('</th>');
	document.write('<th>');
	document.write('Перше число');
	document.write('</th>');
	document.write('<th>');
	document.write('Друге число');
	document.write('</th>');
	document.write('<th>');
	document.write('Третє число');
	document.write('</th>');
	document.write('<th>');
	document.write('Четверте число');
	document.write('</th>');
	document.write('</tr>');
	document.write('</thead>');
	document.write('<tbody>');
	document.write('<tr>');
	document.write('<td>');
	document.write('Ваші числа');
	document.write('</td>');
	document.write('<td>');
	document.write(firstNumber);
	document.write('</td>');
	document.write('<td>');
	document.write(secondNumber);
	document.write('</td>');
	document.write('<td>');
	document.write(thirdNumber);
	document.write('</td>');
	document.write('<td>');
	document.write(fourthNumber);
	document.write('</td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td>');
	document.write('Сумма чотирьох чисел');
	document.write('</td>');
	document.write('<td colspan = "4";>');
	document.write(getSum(firstNumber, secondNumber, thirdNumber, fourthNumber));
	document.write('</td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td>');
	document.write('Добуток чотирьох чисел');
	document.write('</td>');
	document.write('<td colspan = "4";>');
	document.write(getProduct(firstNumber, secondNumber, thirdNumber, fourthNumber));
	document.write('</td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td>');
	document.write('Середнє арифметичне значення чотирьох чисел');
	document.write('</td>');
	document.write('<td colspan = "4";>');
	document.write(getAverage(firstNumber, secondNumber, thirdNumber, fourthNumber));
	document.write('</td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td>');
	document.write('Мінімальне з чотирьох чисел');
	document.write('</td>');
	document.write('<td colspan = "4";>');
	document.write(getMinValue4(firstNumber, secondNumber, thirdNumber, fourthNumber));
	document.write('</td>');
	document.write('</tr>');
	document.write('</tbody>');

	// ===============================================

	// function getMminValue (num1, num2, num3, num4) {
	// 	return Math.min(num1, num2, num3, num4);
	// }

	// // Функція для створення рядків

	// function getTableRow (name, value) {
	// 	document.write(`<tr><td>${name}</td><td colspan = "4";>${value}</td></tr>`);
	// }

	// let firstNumber = parseInt(prompt('Введіть перше число', ''));
	// let secondNumber = parseInt(prompt('Введіть друге число', ''));
	// let thirdNumber = parseInt(prompt('Введіть третє число', ''));
	// let fourthNumber = parseInt(prompt('Введіть четверте число', ''));

	// document.write('<table>');
	// document.write('<thead>');
	// document.write('<tr>');
	// 	document.write('<th>');
	// 	document.write('</th>');
	// document.write('<th>');
	// 	document.write('Перше число');
	// document.write('</th>');
	// document.write('<th>');
	// document.write('Друге число');
	// document.write('</th>');
	// document.write('<th>');
	// document.write('Третє число');
	// document.write('</th>');
	// document.write('<th>');
	// document.write('Четверте число');
	// document.write('</th>');
	// document.write('</tr>');
	// document.write('</thead>');
	// document.write('<tbody>');
	// document.write('<tr>');
	// document.write('<td>');
	// document.write('Ваші числа');
	// document.write('</td>');
	// document.write('<td>');
	// document.write(firstNumber);
	// document.write('</td>');
	// document.write('<td>');
	// document.write(secondNumber);
	// document.write('</td>');
	// document.write('<td>');
	// document.write(thirdNumber);
	// document.write('</td>');
	// document.write('<td>');
	// document.write(fourthNumber);
	// document.write('</td>');
	// document.write('</tr>');
	// document.write(getTableRow('Сумма чотирьох чисел', getSum(firstNumber, secondNumber, thirdNumber, fourthNumber)));
	// document.write(getTableRow('Добуток чотирьох чисел', getProduct(firstNumber, secondNumber, thirdNumber, fourthNumber)));
	// document.write(getTableRow('Середнє арифметичне значення чотирьох чисел', getAverage(firstNumber, secondNumber, thirdNumber, fourthNumber)));
	// document.write(getTableRow('Мінімальне з чотирьох чисел', getMminValue(firstNumber, secondNumber, thirdNumber, fourthNumber)));
}