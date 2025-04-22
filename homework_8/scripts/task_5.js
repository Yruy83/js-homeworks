
// Дано послідовність оцінок учня. Підрахувати кількість:

/*
двійок
кількість хороших оцінок (добре, відмінно);
кількість оцінок, які нижче середнього.
 */

if (confirm('Почати тестування ?')) {

	//------функція яка створює випадковий масив оцінок.

	function getRandomMarks (length, min = 2, max = 5) {
		const arrayMarks = [];
		let randomNumber = 0;
		for (let i = 0; i <= length; i++ ) {
			randomNumber = min + Math.floor(Math.random() * (max - min +1));
			arrayMarks.push(randomNumber);
		}
		return arrayMarks;
	}


//------функція яка підріховує кількість "двійок".

	function getBadMarks (array) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] === 2) {
				counter ++;
			}
		}
		return counter;
	}

//------функція яка підріховує хороших оцінок (добре, відмінно).

	function getGoodMarks (array) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] === 4 || array[i] === 5) {
				counter ++;
			}
		}
		return counter;
	}

//------функція яка підріховує середній бал.

	function getAverageMark (array) {
		let sumMarks = 0;
		for (let i =0; i < array.length; i++) {
			sumMarks += array[i];
		}
		return sumMarks/array.length;
	}

//------функція яка підріховує кількість оцінок, які нижче середнього.

	function getAverageQuantity (array) {
		const averageMark = getAverageMark (array);
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] < averageMark) {
				counter ++;
			}
		}
		return counter;
	}

	const dataMarks = getRandomMarks (20); // випадковий масив оцінок.
	const badMarks = getBadMarks (dataMarks); // кількість двійок.
	const goodMarks = getGoodMarks (dataMarks); // кількість хороших оцінок (добре, відмінно).
	const average = getAverageMark (dataMarks); // середній бал
	const lessThanAverageMark = getAverageQuantity (dataMarks); // кількість оцінок, які нижче середнього.
	document.write(`Оцінки учня : ${dataMarks}<br>`);
	document.write(`Кількість двійок : ${badMarks}<br>`);
	document.write(`Кількість хороших оцінок (добре, відмінно) : ${goodMarks}<br>`);
	document.write(`Середній бал : ${average.toFixed(1)}<br>`);
	document.write(`Кількість оцінок, які нижче середнього : ${lessThanAverageMark}<br>`);
	// const marks = [5, 4,5,4,3,4,4,3,2,2,5,2, 3, 4 ,3 ,2 ,5];
	// document.write(`${marks}`);
}