
// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

if (confirm('Почати тестування ?', '')) {

	let min = 1;

	let max = 5;

	let randomNumber;

	let question;
	let question1;


	let message = parseInt(prompt('Введіть число від 1 до 5', ''))

	do {

		randomNumber = min + Math.floor(Math.random() * (max - 1 + 1));
		question = confirm(`Це ваше число ${randomNumber} ? Якщо так нажміть "ОК", якщо ні нажміть "Відміна"`)

		if (message === randomNumber && question === true) {
			alert(`Компютер вгадав Ваше число, і це число ${randomNumber}`)
			break;
		}
		else if (message === randomNumber && question === false) {
			alert(`Це не правда компютер вгадав Ваше число, і це число ${randomNumber}. За вами виїхала джава-скрипт поліція :))`);
			break;
		}
		else if (message !== randomNumber && question === true) {
			alert(`Це не правда компютер не вгадав Ваше число. За вами виїхала джава-скрипт поліція :))`)
			question1 = confirm(`Продовжити гру? Якщо так нажміть "ОК", якщо ні нажміть "Відміна"`)

			if (question1 === false)
				break;
		}
	}

	while (question !== randomNumber)

	document.write(`Ваше число ${message}`)

}
