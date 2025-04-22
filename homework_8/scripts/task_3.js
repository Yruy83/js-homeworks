
//Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування ?')) {
	const pupilsName = ['Володимир', 'Сашко', 'Іван', 'Оксана', 'Михаїл', 'Іван', 'Юля'];

	function getName(array, target) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] === target) {
				counter ++;
			}
		}
		return counter;
	}

	const quantityName = getName (pupilsName, 'Іван');
	document.write(`Кількість учнів з ім'ям Іван = ${quantityName}`);
}