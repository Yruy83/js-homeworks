
// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

if (confirm('Почати тестування ?')) {

	// Задаємо змінну та записуємо в неї мінімальне значення проміжку в якому будемо генерувати числа.

	const min = 1

	// Задаємо змінну та записуємо в неї максимальне значення проміжку в якому будемо генерувати числа.

	// const max = 1000 

	// чомусь пише що не може прочитати змінну

	//  або можна було так записати 
	// const min = 1, 
	//       max = 1000

	let evenNumber = ' '

	let cauntEvenNumber = 0,
		  cauntOddNumber = 0

	let oddNumber = ' '

	let sumEvenNumber = 0,
		  sumOddNumber = 0

	let z = ''

	document.write(`Числа сгенеровані<br>`)
	document.write(`<ol>`)
	for (let i = 0; i < 100; i++) {
		let randomNumber = min + Math.floor(Math.random() * (1000))
		document.write(`<li>${randomNumber}</li> `)
		let rezult = randomNumber % 2
		if (rezult === 0) {
			cauntEvenNumber++
			// z = randomNumber
			
			sumEvenNumber += randomNumber
			evenNumber += randomNumber + ' '
		}
		else {
			cauntOddNumber++
			sumOddNumber += randomNumber
			oddNumber += randomNumber + ' '
		}
		document.write(`<ol>`)
			for (let j = 0; j < cauntEvenNumber + 1; j++ ) {
				document.write(`<li>${evenNumber}</li>`)
			}
			document.write(`</ol>`)
	}
	document.write(`</ol>`)

	document.write(`Числа парні<br>`)
	document.write(`<style>span{color :red;margin-left: 10px}</style><br><span>${evenNumber}</span><br>`)
	document.write(`<br>Числа не парні<br>`)
	document.write(`<style>.hj{color :blue;}</style><br><span class="hj">${oddNumber}</span><br><br>`)
	// let f = cauntEvenNumber > cauntOddNumber ? 'Парних чисел більше' : 'Парних чисел менше'
	if (cauntEvenNumber > cauntOddNumber)
		document.write(`Парних чисел більше<br>`)
	else
		if (cauntEvenNumber === cauntOddNumber)
			document.write(`Парних та не парних чисел однакова кількість<br>`)
		else
			document.write(`Парних чисел менше<br>`)
	document.write(`Кількість парних чисел ${cauntEvenNumber}<br> Кількість непарних чисел ${cauntOddNumber} <br> <br> Сумма парних чисел ${sumEvenNumber}<br> Сумма не парних чисел ${sumOddNumber}`)



}


