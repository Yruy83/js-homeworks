
// Вивести таблицю з одним рядком із  7 стовпцями.

if (confirm('Почати тестування ?')) {

	// Перший варіант

let column = '';
	for (let i = 1; i < 8; i++) {
		column += (`<td>${i}</td>`)
	}

	document.write(`<table class="table3-5">
										<tbody>
											<tr>
												${column}
											</tr>
										</tbody>
									</table>`)

// Другий варіант

// document.write(`<table>`)
// document.write(`<tbody>`)
// document.write(`<tr>`)

// for (let i = 1; i < 8; i++) {
// 	document.write(`<td>${i}</td>`)
// }

// document.write(`</tr>`)
// document.write(`</tbody>`)
// document.write(`</table>`)
}