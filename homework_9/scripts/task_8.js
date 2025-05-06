
// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування ?')) {

	const autoNumbers = ['ВО2865ВТ', 'КА2313НК', 'АА2885НА', 'ВЕ8180ВВ', 'АН4035НХ', 'АА3739ІТ', 'К13ВА', 'СВ2515АС', 'А158Р'];

	function getNewArray (array) {
		const newArray = [];
		for( let item of array) {
			if (item[0] === 'А') {
				newArray.push(item);
			}
		}
		return newArray;
	}

	const modifyArray = getNewArray (autoNumbers);

	document.write(`Масив початкових номерів : ${autoNumbers}<br><br>`);
	document.write(`Масив номерів, які починаються на "А" : ${modifyArray}`);
}