
// Умова задачі : Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці.


// Визначення першого дійсного числа та запис його в змінну.

const firstVariable = parseFloat((prompt('Введіть перше дійсне число', '')))

// Визначення другого дійсного числа та запис його в змінну.

const secondVariable = parseFloat((prompt('Введіть друге дійсне число', '')))

// Визначення суми двох дійсних чисел та запис її в змінну.

const sum = firstVariable + secondVariable

// Визначення добутку двох дійсних чисел та запис її в змінну.

const multiplication = firstVariable * secondVariable

// Визначення частки двох дійсних чисел та запис її в змінну.

const division = firstVariable / secondVariable

// Виведення результатів в браузер.

document.write(`<table border="2px">
	<thead>
		<tr>
			<th> </th>
			<th> Перше дійсне число <br><br>"${firstVariable}"</th>
			<th> Друге дійсне число <br><br>"${secondVariable}"</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Сума двох дійсних чисел</th>
			<td colspan="2">${sum.toFixed(2)}</td>
		</tr>
		<tr>
			<th>Добуток двох дійсних чисел</th>
			<td colspan="2">${multiplication.toFixed(2)}</td>
		</tr>
		<tr>
			<th rowspan="2">Частка двох дійсних чисел</th>
			<td colspan="2">${division.toFixed(2)}</td>
		</tr>
	</tbody>
</table>`)



