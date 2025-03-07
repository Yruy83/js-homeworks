
// Створити 10 елементів для введення цін продуктів.

if (confirm('Почати тестування ?')) {

	let productNumber = 0;

	// Перший варіант

	// document.write(`<style>ol,ul {list-style:none;}</style><form>`)
	// document.write(`<ul>`)
	// for (let i=0; i<10; i++) {
	// 	productNumber ++;
	// 	document.write(`<li>`)
	// 	document.write(`<label>Product # ${productNumber}</label>`)
	// 	document.write(`<input>`)
	// 	document.write(`</li>`)
	// }
	// document.write(`</ul>`)
	// document.write(`</form>`)

	// Другий варіант

	for (let i = 1; i < 11; i++) {
		document.write(`<style>ol,ul {list-style:none;} input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {display:none;}</style><form>
											<ul>
												<li>
													<label>Product # ${i}
														<input type="number">
													</label>
												</li>
											</ul>
										</form>`)
	}
}