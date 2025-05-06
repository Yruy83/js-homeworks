
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm('Почати тестування ?')) {

	const quantityElement = parseInt(prompt('Введіть кількість елементів масиву', ''));
	const tax = 20;
//	----- функція створення масиву та заповнення його випадковими числами. 
	function getRandomArray (min, max, length) {
		const array = [];
		for (let i = 0; i < length; i++) {
		let randomNumber = min + Math.floor(Math.random() * (max - min +1));
		array.push(randomNumber);
		}
		return array;
	}

	// -------фнкція яка вираховує величину сплаченого податку.

	// function getTaxPaid (array) {
	// 	const  = [];
	// 	let result = 0;
	// 	for (let i = 0; i < array.length; i++ ) {
	// 		result = ((array[i] * 1.2) - array[i]).toFixed(2);
	// 		taxArray.push(result); 
	// 	}
	// 	return taxArray;
	// }

	function getTaxPaid(array) {
		let taxArray = array.map((element) => Number(((element * 1.2) - element).toFixed(2)));
		return taxArray;
	}

	// ---------- функція яка сумує два масиви.

	function getSumArray (array_1, array_2) {
		const newArray = array_1.map((element, index, arr) => Number(element) + Number(array_2[index]));
		return newArray;
	}

	const startArray = getRandomArray(10, 1000, quantityElement);
	const taxArray = getTaxPaid(startArray);
	const sumArray = getSumArray (startArray, taxArray);

	document.write(`Початковий масив цін : ${startArray}<br><br>`);
	console.log(taxArray);
	document.write(`Величина сплаченого податку : ${taxArray}<br><br>`);
	document.write(`Ціна разом з податком : ${sumArray}`);
}