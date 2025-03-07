
// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

if (confirm('Почати тестування ?')) {

	// Задаємо змінну та записуємо в неї мінімальне значення проміжку в якому будемо генерувати числа.

	const min = 1;

	let evenNumbersList = ''; // Змінна для зберігання парних чисел у вигляді списку

	let oddNumbersList = ''; // Змінна для зберігання не парних чисел у вигляді списку

	let countEvenNumber = 0,      // Лічильник кількості парних чисел
		countOddNumber = 0;          // Лічильник кількості не парних чисел

	let sumEvenNumber = 0,         // Сумма парних чисел
		sumOddNumber = 0;             // Сумма не парних чисел

	document.write(`Числа сгенеровані<br>`)
	// Формування таблиці

	document.write(`<table>`);
	document.write(`<tbody>`);
	for (let row = 1; row <= 10; row++) {    // Створення 10-ти рядків
		document.write(`<tr>`);
		for (let cel = 1; cel <= 10; cel++) {        // Створення 10-ти комірок в рядку
			let randomNumber = min + Math.floor(Math.random() * (1000));
			// document.write(`<td>${randomNumber}</td>`)
			if (randomNumber % 2 === 0) {                                 // Робимо умову, якщо частка від ділення сгенерованого числа на "2" дорівнює "0"
				if (countEvenNumber % 10 === 0 && countEvenNumber > 0) {   // Ця умова допомогає створювати новій рядок коли кількість комірок в рядку вже 10. Тобто 10 комірок в рядку створюємо новій рядок і записуємо туди 10 комірок. Інакше таблиця буде виводитись в один рядок з великою кількістью комірок.
					evenNumbersList += (`<tr></tr>`);
				}
				countEvenNumber++;                       // то збільшуємо лічильник парних чисел на "1"
				sumEvenNumber += randomNumber;           // вираховуємо сумму всіх парних чисел 
				evenNumbersList += (`<td style="color:red;">${randomNumber}</td>`); // Заносимо парне число в список <td></td> для таблиці парних чисел
				document.write(`<td style="color:red;">${randomNumber}</td>`); // Заносимо парне число в список <td></td> для загальної таблиці чисел
			}
			else {                                                      // якщо частка від ділення сгенерованого числа на "2" не дорівнює "0"
				if (countOddNumber % 10 === 0 && countOddNumber > 0) {     // Ця умова допомогає створювати новій рядок коли кількість комірок в рядку вже 10. Тобто 10 комірок в рядку створюємо новій рядок і записуємо туди 10 комірок. Інакше таблиця буде виводитись в один рядок з великою кількістью комірок.
					oddNumbersList += (`<tr></tr>`);
				}
				countOddNumber++;                          // то збільшуємо лічильник не парних чисел на "1"
				sumOddNumber += randomNumber;              // вираховуємо сумму всіх не парних чисел 
				oddNumbersList += (`<td style="color:blue;">${randomNumber}</td>`); // Додаємо не парне число в список <td></td> для таблиці не парних чисел
				document.write(`<td style="color:blue;">${randomNumber}</td>`); // Додаємо не парне число в список <td></td> для загальної таблиці чисел
			}
		}
		document.write(`</tr>`);
	}
	document.write(`</tbody>`);
	document.write(`</table>`);

	// let f = cauntEvenNumber > cauntOddNumber ? 'Парних чисел більше' : 'Парних чисел менше'  // Спочатку було так. Але якщо рівна кількість:))))))

	if (countEvenNumber > countOddNumber) {
		document.write(`Парних чисел більше<br>`);
	}
	else
		if (countEvenNumber === countOddNumber) {
			document.write(`Парних та не парних чисел однакова кількість<br>`);
		}
		else {
			document.write(`Парних чисел менше<br>`);
		}
	document.write(`Кількість парних чисел ${countEvenNumber}<br> Кількість непарних чисел ${countOddNumber} <br> <br> Сумма парних чисел ${sumEvenNumber}<br> Сумма не парних чисел ${sumOddNumber}<br><br>`);

	document.write(`Числа парні<br>`)
	document.write(`<table>`);
	document.write(`<tbody>`);
	document.write(`<tr>`);
	document.write(`${evenNumbersList}`)
	document.write(`</tr>`);
	document.write(`</tbody>`);
	document.write(`</table>`);

	document.write(`<br>Числа не парні<br>`)
	document.write(`<table>`);
	document.write(`<tbody>`);
	document.write(`<tr>`);
	document.write(`${oddNumbersList}`)
	document.write(`</tr>`);
	document.write(`</tbody>`);
	document.write(`</table>`);

	/* Умову  підказав штучний інтелект , не по собі якось але вже як є.
	if (countEvenNumber % 10 === 0 && countEvenNumber > 0) {   // Ця умова допомогає створювати новій рядок коли кількість комірок в рядку вже 10. Тобто 10 комірок в рядку створюємо новій рядок і записуємо туди 10 комірок. Інакше таблиця буде виводитись в один рядок з великою кількістью комірок.
		evenNumbersList += (`<tr></tr>`);
	}
				*/
}