
// Створити окремі функції, які переводять:

/*
1)	Сантиметри у дюйми;
2)	Кілограми у фунти;
3)	Кілометри у милі.
 */

if (confirm('Почати тестування ?')) {

	// Переведення сантиметрів в дюйми.
	let convertSantimeters = value => value / 2.54;

	let quantitySantimeters = parseInt(prompt('Введіть кількість сантиметрів', ''));

	document.write(`В ${quantitySantimeters} сантиметрів буде ${convertSantimeters(quantitySantimeters).toFixed(3)} дюймів <br>`);

	// Переведення кілограмів в фунти.

	let convertKilograms = value => value * 2.20462;

	let quantityKilograms = parseInt(prompt('Введіть кількість кілограмів', ''));
	document.write(`<br>В ${quantityKilograms} кілограм буде ${convertKilograms(quantityKilograms).toFixed(3)} фунтів <br>`);

	// Переведення кілометрів у милі.

	let convertKilometers = value => value / 1.6;

	let quantityKilometers = parseInt(prompt('Введіть кількість кілометрів', ''));
	document.write(`<br>В ${quantityKilometers} кілометрів буде ${convertKilometers(quantityKilometers)} миль`);
}