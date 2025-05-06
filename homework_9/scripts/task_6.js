
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2. Тут використовуйте, що хочете для розв’язання (але бажано використовувати спеціальні методи масивів).

if (confirm('Почати тестування ?')) {

	const quantity = parseInt(prompt('Введіть кількість елементів масиву', ''));

	function getRandomArray(min, max, length) {
		const array = [];
		for (let i = 0; i < length; i++) {
			let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
			array.push(randomNumber);
		}
		return array;
	}

	function getModifyArray (array) {
		const modArray = [];
		array.forEach((element, index, arr) => {
			if (arr[index] > arr[0]) {
				modArray.push(arr[index] * 2);
			} else {
				modArray.push(arr[index])
	};
		});
		return modArray;
	}

	// function getModifyArray(array) {
	// 	let modArray = array.map((element, index, arr) => {
	// 		return arr[index] > arr[0] ? element * 2 : element;
	// 	}
	// 	);
	// 	return modArray;
	// }

	// function getModifyArray (array) {
	// 	const modArray = Array.from (array, (element, index) => {
	// 		if (array[index] > array[0]) { 
	// 			return element * 2;
	// 		} else {
	// 			return element;
	// 		}
	// 	})
	// 	return modArray;
	// }

		const startArray = getRandomArray(-10, 10, quantity);
		const newArray = getModifyArray(startArray);
		document.write(`Початковий масив : ${startArray}<br><br>`);
		document.write(`Змінений масив : ${newArray}<br>`);
	}