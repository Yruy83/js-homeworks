
// Вивести на екран
/*
A B C D E 
B C D E F 
C D E F G 
D E F G H 
E F G H I
 */

/*
Ствоирити змінну з якої почнемо виводити символи.
Перетворити цю змінну в цифрове значення.
Задаємо перший цикл який буде створювати пять рядків.
Задаємо другий цикл в якому проходимо від початкового номеру символа доки не буде (початковий номер + 4)
Виводимо в внутрішньому циклі ці символи додаючи пробіл.
в зовнішньому в кінці циклу збільшуємо початковий номер символу на один.
 */

if (confirm('Почати тестування ?')) {
	const Start_Symbol = 'A';
	let numberStartSymbol = Start_Symbol.charCodeAt(0);
	// const range = 5;

	for (let i = 1; i <= 5; i++) {
		for (let j = numberStartSymbol; j <= (numberStartSymbol + 4); j++) {
			document.write(`${String.fromCharCode(j) + ' '}`);
		}
		document.write('<br>');
		numberStartSymbol++;
	}
}

