
// Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Почати тестування ?')) {

	const names = ['Юля', 'Оксана', 'Віктор', 'Галина', 'Дмитро', 'Каріна', 'Даріна', 'Максим', 'Юрій'];

	
	const newArray = names.map((element, index, arr) => arr[index][0]);
	
	document.write(`${names}<br><br>`);
	document.write(`${newArray}`);
	
	
	// const newArray = [];
	
	// names.forEach((el, i, arr) => {
	// 	newArray.push(arr[i][0]);
	// });
}