

// Умова задачі : З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

if (confirm('Почати тестування ?')) {
	// Вводимо вік людини.

const age = parseInt(prompt('Введіть вік людини', ''))

let rezult

if (age < 3)

  rezult = 'Ви немовля'

else if (age < 6)

  rezult = 'Ви в дитсадку'

else if (age <= 18)

  rezult = 'Ви в школі'

else if(age <= 23)

  rezult = 'Ви студент'

else if (age <= 60)

  rezult = 'Ви працівник'

else if (age > 60 && age <=80)

  rezult = 'Ви пенсіонер'

else if (age <= 122 )	

  rezult = 'Ви довгожитель'

else 

  rezult = 'Ви прожили довше чим Жанна Кальман'


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
}