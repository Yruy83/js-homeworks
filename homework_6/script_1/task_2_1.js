
// Відобразити трикутник за допомогою символів «о»

/*
Відобразити трикутник за допомогою символів «о»
       о
      о о
     о о о
    о о о о
   о о о о о
  о о о о о о
 о о о о о о о

 */

 if (confirm('Почати тестування ?')) {
	const Element_Number = 7;

	for (let i = 1; i <= Element_Number; i++) {
		for (let j = Element_Number; j >= i; j--) {
			document.write('&nbsp;');
		}
		for (let z = 1; z <= i; z++) {
			document.write('o');
		}
		document.write(`<br>`);
	}
 }


