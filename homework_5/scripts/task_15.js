
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

let slotQuantity = 4; // Кількість комбінацій картинок.
let randomNumber;     // Генерація випадкових чисел.
let wayPicture = '';  // Шлях до картинки.
let rezult = '';      // Результат виграшу (якщо три однакові в ряд).
let prizeMoney = '';  // Кількість виграних грошей.

document.write('<table style="border-collapse:separate;">')
document.write('<tbody>')
document.write('<tr>')

for (let i = 0; i < 3; i++) {
	randomNumber = 1 + Math.floor(Math.random()*(slotQuantity - 1 +1))
	rezult += randomNumber;
	switch (randomNumber) {
		case 1 : wayPicture = (`../img/bell.webp`);
		break;
		case 2 : wayPicture = (`../img/cherries.webp`);
		break;
		case 3 : wayPicture = (`../img/plum.webp`);
		break;
		case 4 : wayPicture = (`../img/watermelon.webp`);
		break;
	}

	document.write(`<td><img src="${wayPicture}" width="100px" height="100px"></td>`);
}
document.write('</tr>');

switch (rezult) {
	case '111' : prizeMoney = 'Ви виграли 100 грн.';
	break;
	case '222' : prizeMoney = 'Ви виграли 200 грн.';
	break;
	case '333' : prizeMoney = 'Ви виграли 500 грн.';
	break;
	case '444' : prizeMoney = 'Ви виграли 1000 грн.';
	break;
}
document.write('<tr>');
document.write('<td>Ваш виграш</td>');
document.write(`<td colspan="2">${prizeMoney}</td>`);
document.write('</tr>');
document.write('</tbody>');
document.write('</table>');

// Зробив помилку коли "rezult" на самому початку присвоїв значення "0". Тоді виходило,що "дзвінок" + "дзвінок" + "кавун" давало в результаті виграш в 200 грн. ))))))