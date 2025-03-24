
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm('Почати тестування ?')) {

	const FIRST_IMAGE = `../img/bell.webp`;
	const SECOND_IMAGE = `../img/cherries.webp`;
	const THIRD_IMAGE = `../img/plum.webp`;
	const FOURTH_IMAGE = `../img/watermelon.webp`;

	function getImage(url_1, url_2, url_3, url_4) {
		let result;
		let randomValue = 1 + Math.floor(Math.random() * (4 - 1 + 1));

		switch (randomValue) {
			case 1:
				result = url_1;
				break;
			case 2:
				result = url_2;
				break;
			case 3:
				result = url_3;
				break;
			case 4:
				result = url_4;
				break;
		}
		return result;
	}
	
	let randomImage = getImage(FIRST_IMAGE, SECOND_IMAGE, THIRD_IMAGE, FOURTH_IMAGE);
	
	let describtionImage = '';
	
	if (randomImage === FIRST_IMAGE) {
		describtionImage = 'дзвінок';
	}
	else if (randomImage === SECOND_IMAGE) {
		describtionImage = 'вишні';
	}
	else if (randomImage === THIRD_IMAGE) {
		describtionImage = 'слива';
	}
	else {
		describtionImage = 'кусок кавуна';
	}

	document.write(`<img src="${randomImage}" alt="${describtionImage}" width="100px"; height="100px";>`)
}

