
// Відобразити трикутник за допомогою символів «о»

if (confirm('Почати тестування ?')) {
	let symbol = 'o';
	for (let i = 1; i <= 7; i++) {
		for (let j = 1; j <= i; j++) {
			document.write(`${symbol}`);
			// symbol++
		}
		document.write(`<br>`);
	}
}