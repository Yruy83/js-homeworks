
// Умова задачі : З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

// ВВеденя номеру місяця.

const monthNumber = parseInt(prompt('Введіть номер місяця', ''))

// Оголошуємо змінну в яку запишемо результат який день тижня.

let rezult

// Проводимо розрахунок пори року за допомогою оператору вибору "switch".

switch (monthNumber) {
	case 1 :
	case 2 :
	case 12 :
		rezult = 'Зима'
	break;
	case 3 : 
	case 4 :
	case 5 :
		rezult = 'Весна'
	break;
	case 6 :
	case 7 :
	case 8 :
		rezult = 'Літо'
	break;
	case 9 :
	case 10 :
	case 11 :
		rezult = 'Осінь'
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
			<th>Номер місяця :</th>
			<td>${monthNumber}</td>
		</tr>
		<tr>
			<th>Цей номер відповідає такій порі року :</th>
			<td>${rezult}</td>
		</tr>
				
	</tbody>
	</table>`)