
// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm('Почати тестування ?')) {

	const element = parseInt(prompt('Введіть кількість елементів масиву', ''));

	const halfArray = Math.ceil(element / 2);

	const array = new Array (element).fill(1, 0, halfArray+1).fill(7, halfArray);

	document.write(`${array}`);
}