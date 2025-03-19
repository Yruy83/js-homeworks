
// Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).

/*
Запитати у користувача інтервал числовий.
 */

if (confirm('Почати тестування ?')) {
	let rightSide;
	let leftSide = 1;
	let middleValue;

	const User_End_Number = parseInt(prompt('Введіть число, кінцеву межу інтервалу. Початкова межа = "1"', ''));
	rightSide = User_End_Number;
	alert(`Загадайте число від 1 до ${User_End_Number}`);

	while (leftSide <= rightSide) {
		// middleValue = Math.floor((leftSide + rightSide) / 2);
		middleValue = Math.floor(leftSide + (rightSide - leftSide) / 2);
		if (confirm(`Ваше число більше за ${middleValue} ?`)) {
			leftSide = middleValue + 1;
		}
		else {
			rightSide = middleValue - 1;
		}
	}

	alert(`Ваше число ${leftSide}`);
	document.write(`Ваше число ${leftSide}`);
}