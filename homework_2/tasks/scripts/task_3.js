
// Умова задачі : Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// Задання величини податку на додану вартість.

const ADDET_TAX = 5

// Вартість одиниці товару.

const unitPrice = parseFloat( prompt('Введіть вартість за одиницю товару', '')  )

// Кількість товару.

const productQuantity = parseInt(  prompt('Введіть кількість товару', '') )

// Визначення загальної вартості товару.

const totalPrice = unitPrice * productQuantity

// Визначення розміру ПДВ.

const addetTaxValue = (totalPrice * ADDET_TAX) / 100

document.write(`
<style>
td {
	width: 50px; 
	text-align: center;
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
		<th>Величина податку на додану вартість.</th>
		<td>${ADDET_TAX}</td>
		<td>&#37;</td>
	</tr>
	<tr>
		<th>Вартість одиниці товару.</th>
		<td>${unitPrice.toFixed(2)}</td>
		<td>&#8372;</td>
	</tr>
	<tr>
		<th>Кількість товару.</th>
		<td>${productQuantity}</td>
		<td>шт.</td>
	</tr>
	<tr>
		<th>Визначення загальної вартості товару.</th>
		<td>${totalPrice.toFixed(2)}</td>
		<td>&#8372;</td>
	</tr>
	<tr>
		<th>Визначення розміру ПДВ.</th>
		<td>${addetTaxValue}</td>
		<td>&#8372;</td>
	</tr>
</tbody>
</table>`)