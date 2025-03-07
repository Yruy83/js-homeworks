
//  Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 

if (confirm('почати тестування ?')) {

	// Запитати у користувача  в якому проміжку чисел проводити обчислення

	let min = parseInt(prompt('Введіть початкове число з якого будуть проводитись розрахунки', ''));

	let max = parseInt(prompt('Введіть кінцеве число по яке будуть проводитись розрахунки', ''));

	let sumOddNumbers = 0;
	let oddNumbers = '';
	// let helpVariable;       // Додаткова змінна для перестановки місьцями значень min та max 

	// Піддивився на уроці зміну місцями значень min та max в випадку коли min > max
	// if (min > max) {
	// 	helpVariable = min ; // присвоюємо helpVariable значення min (наприклад було "9")
	// 	min = max;           // присвоюємо min значення яке було в max (наприклад було "2") 
	// 	max = helpVariable;   // присвоюємо max значення helpVariable яке вже дорівнює min тобто "9"
	// }

	if (min < max) {
		document.write(`<table>`);
		document.write(`<tbody>`);
		document.write(`<tr>`);

		for (let i = min; i <= max; i++) {
			if (i % 2 !== 0) {
				document.write(`<td style="color:red;">${i}</td>`); // Якщо не парне число виводимо червоним кольором
				sumOddNumbers += i;                                // Сумуємо всі не парні числа
				oddNumbers += (`<td>${i}</td>`);                    // Збираємо всі не парні числа
			}
			else
				document.write(`<td>${i}</td>`);                    // Якщо парне число виводимо кольором який за замовченням на сторінці (чорний)
		}

		document.write(`</tr>`);
		document.write(`</tbody>`);
		document.write(`</table><br>`);
	}

	else {
		alert(`Некоректно введені дані, спробуйте ввести спочатку менше число потім більше`);  // Якщо перше введене число з інтервалу буде більше за друге то виводимо це повідомлення
	}

	document.write(`<table>`);
	document.write(`<tr>`);
	document.write(`<td>Сумма не парних чисел</td>`);
	document.write(`${oddNumbers}`);
	document.write(`<td>=</td>`);
	document.write(`<td>${sumOddNumbers}</td>`);
	document.write(`</tr>`);
	document.write(`</table>`);
}