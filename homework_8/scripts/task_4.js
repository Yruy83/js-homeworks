
//Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :

/*
починаються на букву «А»;
перша і остання літери співпадають;
складаються з більше ніш 5 символів;
 */

if (confirm('Почати тестування ?')) {

	const autoNumbers = ['ВО2865ВТ', 'КА2313НК', 'АА2885НА', 'ВЕ8180ВВ', 'АН4035НХ', 'АА3739ІТ', 'К13ВА', 'СВ2515АС', 'А158Р'];

	// console.log(autoNumbers[0][0]);
	// console.log(autoNumbers[0].length)

//-------функція яка знаходить кількість літер "А" на початку номерного знаку.

	function getLetter (array, target) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i][0] === target) {
				counter ++;
			}
		}
		return counter;
	}

//-------функція яка повертає кількість номері в яких співпадає перша та остання літера номерного знаку.

	function getMatchLetter (array) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i][0] === array[i][array[i].length-1]) {
				counter ++;
			}
		}
		return counter;
	}

//-------функція яка повертає кількість номері в яких символів номерного знаку більше ніш 5  .

	function getMoreFiveSymbols (array) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i].length > 5) {
				counter ++;
			}
		}
		return counter;
	}

	const totalMatchLetter = getLetter (autoNumbers, 'А');
	const matchSymbol = getMatchLetter (autoNumbers);
	const more5Symbol = getMoreFiveSymbols (autoNumbers);

	document.write(`${autoNumbers}<br><br>`);
	document.write(`Кількість номерів, які починаються на букву «А» = ${totalMatchLetter}<br><br>`);
	document.write(`Кількість номерів, в яких співпадає перша та остання літера номерного знаку = ${matchSymbol}<br><br>`);
	document.write(`Кількість номерів, в яких символів номерного знаку більше ніш 5 = ${more5Symbol}<br><br>`);
}