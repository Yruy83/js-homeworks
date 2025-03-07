
// Умова задачі : З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

if (confirm('Почати тестування ?')) {
	// Вводимо номер дня тижня.

const dayNumber = parseInt(prompt('Введіть номер дня тижня', ''))

// Оголошуємо змінну в яку запишемо результат який день тижня.

let rezult

// Проводимо розрахунок дня за допомогою оператору вибору "switch".

switch (dayNumber) {
	case 1 : 
		rezult = 'Понеділок'
	break;
	case 2 :
		rezult = 'Вівторок'
	break;
	case 3 : 
		rezult = 'Середа'
	break;
	case 4 : 
		rezult = 'Четверг'
	break;
	case 5 : 
		rezult = 'Пятниця'
	break;
	case 6 : 
		rezult = 'Суббота'
	break;
	case 7 :
		rezult = 'Неділя'
	break;
	default : 
		rezult = 'Не коректно введені дані'
}

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
			<th>Номер дня :</th>
			<td>${dayNumber}</td>
		</tr>
		<tr>
			<th>Цей номер відповідає такому дню тижня :</th>
			<td>${rezult}</td>
		</tr>
				
	</tbody>
	</table>`)
}