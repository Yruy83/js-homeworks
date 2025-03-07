
// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. 

if (confirm('Почати тестування ?')) {

	let rezult ='';

	
	let cauntRandomNumber = parseInt(prompt('Введіть кількість випадкових чисел', ''));

	// Перший варінт

	document.write(`<ol>`)
	for (let i = 0; i < cauntRandomNumber; i++) {
		let randomNumber = 1 + Math.floor(Math.random()*(100));
		document.write(`<li>${randomNumber}</li>`)
	}
	document.write(`</ol>`)

		// Другий варінт

	// for (let i = 0; i < cauntRandomNumber; i++) {
	// 	let randomNumber = 1 + Math.floor(Math.random()*(100));
	// 	 rezult += `<li>${randomNumber}</li>`
	// 	}
	// 	document.write(`<ol>${rezult}</ol>`)

}
 
