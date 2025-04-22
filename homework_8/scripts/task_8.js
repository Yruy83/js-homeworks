
// Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm('Почати тестування ?')) {

	//-----------функція для випадкових чисел від "-500" до "500".
	const min = -500;
	const max = 500;
	const length = 15;
	const arrayRandomNum = getRandomNumbers(min, max, length);
	document.write(`Набір випадкових чисел від "-500" до "500" : ${arrayRandomNum}<br>`);

	function getRandomNumbers(min, max, length) {
		const array = [];
		let randomNum = 0;
		for (let i = 0; i < length; i++) {
			randomNum = min + Math.floor(Math.random() * (max - min + 1));
			array.push(randomNum);
		}
		return array;
	}

	let winResult = 0;
	do {
		const userNumber = prompt('Введіть номер елемента від "1" до "15", для виходу нажміть відміна', '');
		if (userNumber === null || userNumber === '') {
			break;
		}
		const parseUserNumber = parseInt(userNumber) - 1;
		if (parseUserNumber < 0 || parseUserNumber >= length) {
			alert('Не коректний номер елементу');
			document.write(`Не коректний номер елементу : ${userNumber}<br>`);
			continue;
		}
		winResult +=  arrayRandomNum[parseUserNumber];
	} while (true);

	document.write(`Сумма виграшу : ${winResult}<br>`);
}