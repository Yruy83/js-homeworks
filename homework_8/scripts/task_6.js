
//Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

if (confirm('Почати тестування ?')) {

	//-------функція виведення списку товарів з цінами.

	// function getList (name, price) {
	// 	let list = '';
	// 	for (let i = 0; i < Math.min(name.length, price.length); i++) {
	// 		list = document.write(`${name[i]} : ${price[i]} грн.<br>`);
	// 	}
	// 	return list;
	// 	}

	function getList(name, price) {
		let list = '';
		for (let i = 0; i < name.length && i < price.length; i++) {
			list = document.write(`${name[i]} : ${price[i]} грн.<br>`);
		}
		return list;
	}

	//------функція яка визначае які ціни доступні користувачу.

	function calcBalance(price, balance) {
		const priceIndex = [];
		for (let i = 0; i < price.length; i++) {
			if (price[i] < balance) {
				priceIndex.push(i);
			}
		}
		return priceIndex;
	}

	//--------функція яка визначає найменування товарів які може купити користувач.

	function getProductList(product, index) {
		const list = [];
		for (let i = 0; i < index.length; i++) {
			list.push(product[index[i]]);
		}
		return list;
	}



	const userMoney = parseInt(prompt('Введіть кількість грошей яка у вас є', ''));
	const priceProduct = [115, 31, 29, 48, 75, 45, 26, 185];
	const productName = ['Мандарини', 'Картопля', 'Батон', 'Яблука', 'Банани', 'Хліб', 'Мінеральна вода', 'Курятина філе'];
	const listProductPrice = getList(productName, priceProduct);
	const aviablePrice = calcBalance(priceProduct, userMoney);
	const userList = getProductList(productName, aviablePrice);

	//--------функція яка визначає найменування товарів які може купити користувач проходячи одразу по двум масивам.

	// function getProductList (name, price, balance) {
	// 	const list = [];
	// 	for (let i = 0; i < Math.min(name.length, price.length); i++) {
	// 		if (price[i] < balance) {
	// 			list.push(name[i]);
	// 		}
	// 	}
	// 	return list;
	// }

	// const userList = getProductList(productName, priceProduct, userMoney);

	if (userList.length) {
		document.write(`<br>Товари які може дозволити собі користувач маючи ${userMoney} грн. : ${userList}`);
	} else {
		document.write(`<br>Нажаль користувач нічого не може купити за ${userMoney} грн.`);
	}
}