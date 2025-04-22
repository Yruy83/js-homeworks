
//-----Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

if (confirm('Почати тестування ?')) {

	const lengthArray = parseInt(prompt('Введіть кількість клітинок поля', ''));
	const shipQuantity = parseInt(prompt('Введіть кількість кораблів', ''));
	// const userShot = parseInt(prompt(`Виберіть номер комірки для пострілу від "1" до "${lengthArray}"`,''));

	//-----функція створення масиву довжиною "lengthArray".

	function getArray(length) {
		const array = [];
		for (let i = 0; i < length; i++) {
			array.push(0);
		}
		return array;
	}

	//-----функція створення копії масиву довжиною "lengthArray".

	function getCopyArray(array) {
		const copyArray = [];
		for (let i = 0; i < array.length; i++) {
			copyArray.push(array[i]);
		}
		return copyArray;
	}

	//-----функція яка випадковим чином заповнює комірки масиву "array" одиницями ту кількьсть яку ввів користувач.

	function getArrayShip(array, quantity_ship) {
		let shipArray = getArray(array.length);
		let counter = 0;
		let randomPosition = 0;
		while (counter < quantity_ship) {
			randomPosition = Math.floor(Math.random() * array.length);
			if (shipArray[randomPosition] === 0) {
				shipArray[randomPosition] = 1;
				counter++;
			}
		}
		return shipArray;
	}

	function getBattle(array, quantity_ship) {
		let ship = shipQuantity;
		let message = '';
		let key = false;

		while (ship > 0) {
			const userShot = parseInt(prompt(`Виберіть номер комірки для пострілу від "1" до "${lengthArray}"`, ''));

			//---перевірка коректного вводу комірки.

			if (userShot < 1 || userShot > array.length || userShot === null) {
				alert('Не правильно вибрана комірка, спробуйте ще раз');
				continue;
			}

			if (isNaN(userShot)) {
				break;
			}
			// ----------при влучанні

			if (array[userShot - 1] === 1) {
				ship -= 1;
				message = alert(`Ви попали по кораблю, залишилось ${ship} кораблів`);
				array[userShot - 1] = 2; // В полі після гри буде відображатись "2" коли постріл уже був в цій клітинці.
			} else if (array[userShot - 1] === 2) {
				alert('Ви вже стріляли в цю комірку, виберіть іншу');
				continue;
			} else if ((array[userShot - 1] > 0 && array[userShot - 1 - 1] === 1) || (array[userShot - 1 + 1] < array.length && array[userShot - 1 + 1] === 1)) {
				alert('Ви майже попали');
				array[userShot - 1] = 3; // В полі після гри буде відображатись "3" коли постріл був рядом.
			} else {
				array[userShot - 1] = 2;
				alert(`Ви не попали по кораблю, залишилось ${ship} кораблів`);
			}

			if (ship === 0) {
				alert('Ви потопили всі кораблі');
				key = true;
			}
		}
		return key;
	}

	if (shipQuantity > lengthArray) {
		alert('Кількість кораблів не може бути більшою за кількість клітинок поля');
	} else {
		const fildArray = getArray(lengthArray);
		const copyArrayShip = getArrayShip(fildArray, shipQuantity);
		const shipArray = getCopyArray(copyArrayShip);
		getBattle(shipArray, shipQuantity);
		document.write(`Початкове поле з кораблями ${copyArrayShip}<br>`);
		document.write(`Поле після гри ${shipArray}<br>`);
	}
}