

// Умова задачі : З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

// Вводимо вік людини.

const age = parseInt(prompt('Введіть вік людини', ''))

let rezult 

switch (true) {

	case ( age >= 3 && age <= 6 ) : 
		rezult = 'Це дитина, яка ходить у садочок'
		// document.write(`Це дитина, яка ходить у садочок`)
	break;

	case ( age >= 7 && age <= 17 ) : 
		rezult = 'Це школяр'
	break;

	case ( age >= 18 && age <= 23 ) : 
		rezult = 'Це студент'
	break;

	case ( age > 120 ) :
		rezult = 'Ви прожили білльше років чим пророк Моісей'
		break;
		
		default :
		rezult = 'Не правильно введені дані'
		break;
}

document.write(`${rezult}`)

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
		<th>Введений вік :</th>
		<td>${age}</td>
	</tr>
	<tr>
		<th>Ви є :</th>
		<td> ${rezult}</td>
	</tr>
	
</tbody>
</table>`)