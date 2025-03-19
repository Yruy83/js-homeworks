
// Написати програму, яка показуватиме на екрані піднесене до квадрату число, що вводиться користувачем. Користувач вирішує самостійно – виходити з програми або продовжувати ввід. (Підказка: потрібно запустити нескінчений цикл, в тілі якого передбачити його переривання у випадку настання певної умови).

if (confirm('Почати тестування ?')) {

	/*
	Задати нескінченний цикл for (;;)
	Ввести число.
	Підносити це число до квадрату.
	Поставити умову чи хоче користувач продовжити роботу, якщо так продовжуємо нескінченний цикл якщо ні робимо преривання циклу за допомогою "Break"
	 */

	document.write('<table>');
	document.write('<thead>');
	document.write('<tr>');
	document.write('<th>Число користувача</th>');
	document.write('<th>Число користувача в квадраті</th>');
	document.write('</tr>');
	document.write('</thead>');
	document.write('<tbody>');

	for (; ;) {
		document.write('<tr>');
		let userNumber = parseInt(prompt('Введіть число яке потрібно піднести до квадрату', ''));
		document.write(`<td>${userNumber}</td>`);
		let rezult = Math.pow(userNumber, 2);
		document.write(`<td>${rezult}</td>`);
		alert(`Число ${userNumber} в квадраті буде ${rezult}`);
		if (confirm('Продовжити роботу программи?')) {
		}
		else {
			break;
		}
		document.write('</tr>');
	}
	document.write('</tbody>');
	document.write('</table>');
}