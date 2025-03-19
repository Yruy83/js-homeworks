
// Побудувати ялинку

/*
о
оо
ооо
оооо
ооооо
о
оо
ооо
оооо
ооооо
о
оо
ооо
оооо
ооооо

 */

if (confirm('Почати тестування ?')) {

	const Symbol_Quantity = 5;
	const Letter = 'o';

	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= Symbol_Quantity; j++) {
			for (let z = 1; z <= j; z++) {
			document.write(`${Letter}`);
		}
		document.write('<br>');
	}
	}
}