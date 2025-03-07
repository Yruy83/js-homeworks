  
	// Вивести таблицю.

	if (confirm ('Почати тестування ?')) {

	const quantityRow = 3  // Кількість рядків в таблиці
	const quantityCell = 3  // Кількість комірок (клітинок) в таблиці

		let counter = 1      // Лічильник цифер в комірках (клітинках)

		document.write(`<table>`)
		document.write(`<tbody>`)
		for (let tr = 0; tr <  quantityRow; tr++) {    // Задаємо цикл для утворення рядків
			document.write(`<tr>`)                       // Відкриваємо утворення рядків

			for (let td = 0; td < quantityCell; td++) {      // Задаємо цикл для утворення комірок (клітинок) в таблиц
				
				document.write(`<td>`)                         // Відкриваємо утворення комірок (клітинок) в рядку
					document.write(`${counter}`)                 // Виводимо значення лічильника на початку циклу
					counter++                                    // Збільшуємо значення лічильника після циклу та записуємо нове значеняя збільшене в лічильник
				document.write(`</td>`)                      // Закриваємо утворення комірок (клітинок) в рядку
			}
			document.write(`</tr>`)                       // Закриваємо утворення рядків
		}
		document.write(`</tbody>`)
		document.write(`</table>`)
	}