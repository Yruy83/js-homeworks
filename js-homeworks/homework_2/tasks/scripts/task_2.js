
// Умова задачі : Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.


// Задання поточного року.

const CURRENT_YEAR = 2025

// Оголошення та присвоєння значення змінної року народження.

const bornYear = parseInt(  prompt('Введіть повністю свій рік нарождення (чотири цифри)', '') )

// Визначення віку.

const age = CURRENT_YEAR - bornYear

// Виведення інформації в браузер.

document.write(`<table border="2px">
<thead>
	<tr>
		<th> </th>
		<th> Поточний рік <br><br>"${CURRENT_YEAR}"</th>
		<th> Рік народження (чотири цифри) <br><br>"${bornYear}"</th>
	</tr>
</thead>
<tbody>
	<tr>
		<th>Ваш вік : </th>
		<td colspan="2">${age}</td>
	</tr>
</tbody>
</table>`)

