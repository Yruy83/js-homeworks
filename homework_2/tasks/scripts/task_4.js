
// Умова задачі : Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

// Об"явлення та присвоєння значення змінній santimeters.

const santimeters = parseInt(prompt('Введіть ціле значення в сантиметрах', ''))

// Розрахунок скільки сантиметрів в метрі.

const meters = santimeters.toFixed(0) / 100

// Розрахунок скільки сантиметрів в кілометрі.

const kilometers = santimeters / 1000

// Виведення інформації в браузер.

document.write(`
<style>
td {
	width: 50px; 
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
		<th>Кількість сантиметрів :</th>
		<td>${santimeters}</td>
		<td>см</td>
	</tr>
	<tr>
		<th>Кількість сантиметрів в метрі :</th>
		<td>${meters}</td>
		<td>м</td>
	</tr>
	<tr>
		<th>Кількість сантиметрів в кілометрі :</th>
		<td>${kilometers}</td>
		<td>км</td>
	</tr>
</tbody>
</table>
`)