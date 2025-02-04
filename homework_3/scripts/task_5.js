

// Умова задачі : З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

// Введення данних про категорію водійских прав.

const category = prompt('Введіть категорію прав яку Ви маєте', '')

let rezult 

switch (category) {

	case 'A' :
	case 'a' : rezult = 'мотоцикл'
	break;
	case 'B' :
	case 'b' : rezult = 'легковий автомобіль'
	break;
	case 'C' :
	case 'c' : rezult = 'вантажний автомобіль'
	break;
	case 'A B C' :
	case 'a b c'  : rezult = 'Всі види транспорту'
	break;
	default : rezult = 'Введіть категорію прав латинською літерою через пробіл'
	break;
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
			<th>Категорія прав :</th>
			<td>${category}</td>
		</tr>
		<tr>
			<th>Яким видом транспорту можете керувати :</th>
			<td>${rezult}</td>
		</tr>
				
	</tbody>
	</table>`)