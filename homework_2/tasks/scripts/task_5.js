
// Умова задачі : Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

if (confirm('Почати тестування ?')) {
	// Етапи рішення :

// 1хв(с) = 60с
// 1год.(хв) = 60хв
// 1год.(с) = 60хв * 60 = 3600

//  Наприклад користувачем задано 3660с.
// Ділимо ту кількість секунд, що задав користувач на 3600. В даному випадку 3660 / 3600.
// Отримуємо 1,01, тобто ціле число це 1 година, а залишок від ділення запишемо в хвилини.

const SECONDS_IN_HOUR = 3600

// Оголошуємо змінну та записуємо в неї значення.

const seconds = parseInt(prompt('Введіть кількість секунд', ''))

// Проводимо обчислення.

const rezalut = Math.floor(seconds / SECONDS_IN_HOUR)

// Визначаємо залишок від ділення.

const remainderDivision = ((seconds % SECONDS_IN_HOUR) / 60)

// Виведення в браузер.

document.write(`
<style>
td {
	width: 150px; 
	text-align: center;
}

tr:hover {
	background-color: aquamarine;
}
</style>

<table border="2px">
<thead>
		<tr>
			<th colspan="2"></th>
			<th>Одиниці<br> вимірювання</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<th>Кількість секунд :</th>
		<td>${seconds}</td>
		<td>с</td>
	</tr>
	<tr>
		<th>Від початку доби пройшло :</th>
		<td> ${rezalut} год. та ${remainderDivision} хвилин</td>
		<td>год. , хв.</td>
	</tr>
</tbody>
</table>
`)
}