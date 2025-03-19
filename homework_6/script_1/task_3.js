
// Відобразити трикутник за допомогою символів «о»

/*
оооооооооооо
ооооооооооо
оооооооооо
ооооооооо
оооооооо
…
оо
о
*/

if (confirm('Почати тестування ?')) {
	const Symbol_Quantity = 12;

	for (let i = Symbol_Quantity; i >= 1; i--) {
		for (let j = i; j >= 1; j--) {
			document.write('o');
		}
		document.write(`<br>`);
	}
}
