
// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm('Почати тестування ?')) {

	//------- функція для заповнення масиву з оцінками рандомними числами від "2" до "5"

	function getRandomArray(length, min = 2, max = 5) {
		const marks = [];

		for (let i = 0; i < length; i++) {
			let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
			marks.push(randomNumber);
		}

		return marks;
	}

	//------ функція для визначення середнього балу в масиві marks.

	function getAverageValue(userMarks) {
		let sum = 0;

		for (let i = 0; i < userMarks.length; i++) {
			sum += userMarks[i];
		}
		return sum / userMarks.length;
	}

	//------функція для визначення категорії учня.

	function getCategory(userMarks) {
		let userCategory = '';
		let minMark = Math.min(...userMarks)
		if (minMark === 2) {
			userCategory = 'Двійочник';
		}
		else if (minMark === 3) {
			userCategory = 'Трійочник';
		}
		else if (minMark === 4) {
			userCategory = 'Хорошист';
		}
		else {
			userCategory = 'Відмінник';
		}

		return userCategory;
	}

	//------функція для створення таблиці виводу інформації.

	function getTable(n1) {
		document.write('<table>');
		document.write('<tbody>');
		document.write('<tr>');
		document.write('<td>Назви предметів</td>');
		for (let i = 1; i <= n1; i++) {
			document.write(`<td>Предмет №${i}</td>`);
		}
		document.write('</tr>');
		document.write('<tr>');
		document.write(`<td>Оцінки по предметам</td>`);
		for (let j = 0; j < userMarks.length; j++) {
			document.write(`<td>${userMarks[j]}</td>`);

		}
		document.write('</tr>');
		document.write('<tr>');
		document.write('<td>Середня оцінка</td>');
		document.write(`<td colspan="${n1}">${userAverageMarks.toFixed(1)}</td>`);
		document.write('</tr>');
		document.write('<tr>');
		document.write('<td>Категорія учня</td>');
		document.write(`<td colspan="${n1}">${userCategory}</td>`);
		document.write('</tr>');
		document.write('</tbody>');
		document.write('</table>');
	}


	const numberSubject = parseInt(prompt('Введіть кількість навчальних предметів', ''));

	const userMarks = getRandomArray(numberSubject);
	const userAverageMarks = getAverageValue(userMarks);
	const userCategory = getCategory(userMarks);

	getTable(numberSubject);
}

// Версія для вводу оцінок з клавіатури.

// if (confirm('Почати тестування ?')){
// 	//----функція для введення оцінок вручну.

// function getSubjectMarks(quantitySubject) {
// 	let arr = [];
// 	let message;
// 	for (let i = 1; i <= quantitySubject; i++) {
// 	 message = parseInt(prompt(`Ведіть оцінку ${i}-го предмету`, ''));
// 	 arr.push( message);
// 	}
// 	return arr;
// }

// //------ функція для визначення середнього балу в масиві arr.

// function getAverageValue(userMarks) {
// 	let sum = 0;

// 	for (let i = 0; i < userMarks.length; i++) {
// 		sum += userMarks[i];
// 	}
// 	return sum / userMarks.length;
// }

// //------функція для визначення категорії учня.

// function getCategory(userMarks) {
// 	let userCategory = '';
// 	let minMark = Math.min(...userMarks)
// 	if (minMark === 2) {
// 		userCategory = 'Двійочник';
// 	}
// 	else if (minMark === 3) {
// 		userCategory = 'Трійочник';
// 	}
// 	else if (minMark === 4) {
// 		userCategory = 'Хорошист';
// 	}
// 	else {
// 		userCategory = 'Відмінник';
// 	}

// 	return userCategory;
// }

// 	//------функція для створення таблиці виводу інформації.

// 	function getTable(n1) {
// 		document.write('<table>');
// 		document.write('<tbody>');
// 		document.write('<tr>');
// 		document.write('<td>Назви предметів</td>');
// 		for (let i = 1; i <= n1; i++) {
// 			document.write(`<td>Предмет №${i}</td>`);
// 		}
// 		document.write('</tr>');
// 		document.write('<tr>');
// 		document.write(`<td>Оцінки по предметам</td>`);
// 		for (let j = 0; j < userMarks.length; j++) {
// 			document.write(`<td>${userMarks[j]}</td>`);

// 		}
// 		document.write('</tr>');
// 		document.write('<tr>');
// 		document.write('<td>Середня оцінка</td>');
// 		document.write(`<td colspan="${n1}">${userAverageMarks.toFixed(1)}</td>`);
// 		document.write('</tr>');
// 		document.write('<tr>');
// 		document.write('<td>Категорія учня</td>');
// 		document.write(`<td colspan="${n1}">${userCategory}</td>`);
// 		document.write('</tr>');
// 		document.write('</tbody>');
// 		document.write('</table>');
// 	}

// const numberSubject = parseInt(prompt('Введіть кількість навчальних предметів', ''));

// const userMarks = getSubjectMarks(numberSubject);
// const userAverageMarks = getAverageValue(userMarks);
// const userCategory = getCategory(userMarks);

// getTable(numberSubject);
// }