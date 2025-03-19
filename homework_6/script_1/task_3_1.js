
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
		const Letter = 'o';

		for (let i = 1; i <= Symbol_Quantity; i++) {
			for (let z = 1; z <= i; z++){
				document.write('&nbsp;');
			}
			for (let j = Symbol_Quantity; j >= i; j--) {
				document.write(`${Letter}`);
			}
			document.write(`<br>`);
		}
	}