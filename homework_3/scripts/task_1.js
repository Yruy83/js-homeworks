
//  Умова задчі : 1.	З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

if (confirm('Почати тестування ?')) {
	// Оголошуємо змінну та присвоюємо їй значення імені першої дитини.

const firstChildName = prompt('Введіть імя першої дитини', '')

// Оголошуємо змінну та присвоюємо їй значення імені другої дитини.

const secondChildName = prompt('Введіть імя другої дитини', '')

// Оголошуємо змінну та присвоюємо їй значення кількості цукерок у першої дитини.

const quantityCandyFirstChild = parseInt(prompt('Введіть кількість цукерок у першої дитини', ''))

// Оголошуємо змінну та присвоюємо їй значення кількості цукерок у другої дитини.

const quantityCandySecondChild = parseInt(prompt('Введіть кількість цукерок у другої дитини', ''))


if (quantityCandyFirstChild > quantityCandySecondChild) 

var winnerName_1 = firstChildName 

	else 
	
	   if (quantityCandyFirstChild === quantityCandySecondChild)

	   var winnerName_3 = `Кількість цукерок у ${firstChildName} та ${secondChildName} однакова`

else var winnerName_2 = secondChildName

// Якщо переможець не перша дитина то виводимо в document.write пустий рядок , тобто звільняємо місце для змінної другої дитини.

if ( winnerName_1 === undefined)
var winnerName_1 = ''

// Якщо переможець не друга дитина то виводимо в document.write пустий рядок , тобто звільняємо місце для змінної першої дитини.

if (winnerName_2 === undefined)
var winnerName_2 = ''

// Якщо кількість цукерок не однакова то виводимо в document.write пустий рядок.

if (winnerName_3 === undefined) 
var winnerName_3 = '-'

// Вивденяя в браузер

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
			<th>Імя першої дитини :</th>
			<td>${firstChildName}</td>
		</tr>
		<tr>
			<th>Імя другої дитини :</th>
			<td>${secondChildName}</td>
		</tr>
		<tr>
			<th>Кількість цукерок у першої дитини :</th>
			<td>${quantityCandyFirstChild}</td>
		</tr>
		<tr>
			<th>Кількість цукерок у другої дитини :</th>
			<td>${quantityCandySecondChild} </td>
		</tr>
		<tr>
			<th>Імя дитини у якої більше цукерок:</th>
			<td>${winnerName_1} ${winnerName_2}</td>
		</tr>
		<tr>
			<th>Інші варіанти :</th>
			<td>${winnerName_3}</td>
		</tr>
	</tbody>
	</table>`)

}

