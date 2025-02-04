
//  Умова задачі : Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// Вводимо мінімальне значення інтервалу чисел від якого буде генеруватись числа.

const minValue = 1

// Вводимо максимальне значення інтервалу чисел по яке буде генеруватись числа.

const maxValue = 5

// Проводимо визначення випадкового числа від 1 до 5.

const randomNumber = minValue + Math.floor(Math.random()*(maxValue - minValue +1))

// Пропонуємо ввести навмання число від 1 до 5.

const firstAttempt = parseInt(prompt('Вгадайте яке число було випадковим чином згенероване від 1 до 5 ', ''))

// Пропонуємо ще раз ввести навмання число від 1 до 5.

// const secondAttempt = parseInt(prompt('Спробуйте ще раз вгадати число яке було випадковим чином згенероване від 1 до 5', ''))


// Умова

if (firstAttempt === randomNumber)

	var firstTry = (`Ви вгадали з першої спроби вірне число " ${firstAttempt} "`)

	else

	var secondAttempt = parseInt(prompt('Спробуйте ще раз вгадати число яке було випадковим чином згенероване від 1 до 5', ''))

	if (secondAttempt === randomNumber)

	var secondTry = (`Ви вгадали з другої спроби вірне число " ${secondAttempt} "`)

else if (firstAttempt != randomNumber && secondAttempt != randomNumber)

 var fail = (`Не правильно`)


if (firstTry === undefined)

var firstTry = ''

if (secondTry === undefined)

var secondTry = ''

if (fail === undefined)

var fail = ''


document.write(`<style>
td {
	width: 150px; 
	text-align: center;
}

tr:hover {
	background-color: aquamarine;
}
</style>

<table border="2px">

<tbody>
	<tr>
		<th>Результат :</th>
		<td>${firstTry} ${secondTry} ${fail}</td>
	</tr>
	<tr>
		<th>Згенероване число було :</th>
		<td> " ${randomNumber} "</td>
	</tr>
	
</tbody>
</table>`)
