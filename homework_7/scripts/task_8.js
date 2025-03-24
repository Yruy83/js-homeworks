
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення) тег img повинен знаходитись у середині тега a: <code><a> <img src=”шлях”> </a></code>

if (confirm('Почати тестування ?')) {

	const HEADER = `<h2>Автомобілі ŠKODA</h2>`;
	const IMAGE = `<img src="../img/skoda.webp" alt="Логотип автомобіля Шкода" width="150px"; height="150px";>`;

	function getBanner (header, image) {
		document.write(header);
		document.write(`<a href="https://skoda.infocar.ua/">${image}</a>`);
	}

	getBanner (HEADER, IMAGE);
}