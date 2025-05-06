
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.


if (confirm('Почати тестування ?')) {

	const quantityElement = parseInt(prompt('Введіть кількість елементів', ''));

	let array = new Array (quantityElement);

	array.fill(5, 0, 5);
	array.fill(7,5);
	document.write(`Результат : ${array}`);
}