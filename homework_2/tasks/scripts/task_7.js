

// Умова заачі : Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

// Оголошуємо змінну мінімального номера місяця

const minNumberMonth = parseInt(prompt('Введіть номер місяця з якого ви хочете провести розрахунок', ''))

// Оголошуємо змінну максимального номера місяця

const maxNumberMonth = parseInt(prompt('Введіть номер місяця по який ви хочете провести розрахунок', ''))

// Оголошуємо змінну мінімального номера дня

const minNumberDay = parseInt(prompt('Введіть номер дня з якого ви хочете провести розрахунок', ''))

// Оголошуємо змінну максимального номера дня

const maxNumberDay = parseInt(prompt('Введіть номер дня по який ви хочете провести розрахунок', ''))

// Вираховуємо випадкове значення місяця

const randomNumberMonth = minNumberMonth + Math.floor(Math.random()*(maxNumberMonth - minNumberMonth + 1))

// Вираховуємо випадкове значення дня

const randomNumberDay = minNumberDay + Math.floor(Math.random()*(maxNumberDay - minNumberDay + 1))

// Вираховуємо суму випадкового значення місяця та випадкового значення дня.

const sumRandomValue = randomNumberMonth + randomNumberDay 

//  Виведення в браузер

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
		<th>З якого місяця почати розрахунок :</th>
		<td>${minNumberMonth}</td>
	</tr>
	<tr>
		<th>По який місяць провести розрахунок :</th>
		<td> ${maxNumberMonth}</td>
	</tr>
	<tr>
		<th>З якого дня почати розрахунок :</th>
		<td> ${minNumberDay}</td>
	</tr>
	<tr>
		<th>По який день провести розрахунок :</th>
		<td> ${maxNumberDay}</td>
	</tr>
	<tr>
		<th>Випадкове число місяця :</th>
		<td> ${randomNumberMonth}</td>
	</tr>
	<tr>
		<th>Випадкове число дня :</th>
		<td> ${randomNumberDay}</td>
	</tr>
	<tr>
		<th>Сума випадкового числа місяця та випадкового числа дня :</th>
		<td> ${sumRandomValue}</td>
	</tr>
</tbody>
</table>`)



