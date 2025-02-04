

// Умова задачі : З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

// Введення ціни товару.

const productPrice = parseFloat(prompt('Введіть ціну товару', ''))

// Виділяємо цілу частину з округленням в низ від введеної ціни товару.

const integerPartProductPrice = Math.floor(productPrice)

// Виділяємо дробову частину з округленням від введеної ціни товару.

const fractionalPartProductPrice = Math.round((productPrice%integerPartProductPrice)*100)

// Вводимо кількість грошей у користувача.

const quantityPersonMoney = parseFloat(prompt('Введіть яка кількість грошей у Вас', ''))

// Виділяємо цілу частину з округленням в низ від введеної кількості грошей.

const integerPartPersonMoney = Math.floor(quantityPersonMoney)

// Виділяємо дробову частину з округленням від введеної кількості грошей.

const fractionalPartPersonMoney = Math.round((quantityPersonMoney%integerPartPersonMoney)*100)

// Проводимо розрахунок у випадку коли ціна товару більша за кількість грошей у покупця.

var rezult = productPrice - quantityPersonMoney

// Виділяємо цілу частину з округленням в низ від результату обчислення.

var integerRezult = Math.floor(rezult)

// Виділяємо дробову частину з округленням від результату обчислення.

var fractionalRezult = Math.round((rezult%integerRezult)*100)

// document.write(`${fractionalRezult}`)

// Умова : якщо змінна "rezult" матиме вигляд "0,50", то відповідно округлення вниз дасть число "0". І остача від ділення матиме вигляд "0,50/0" а на нуль ділити не можна і консоль видасть нам "NaN". Тому я змінну "rezult" * 100 і отримую дробову частину числа.

if (integerRezult === 0)

 {var rezult1 = Math.round(rezult * 100)

 var rezult2 = '0'+rezult1 }

else  

 var rezult2 = ''

if (fractionalRezult != NaN) 

 var fractionalRezult = ''


// Робимо умову за допомогою умовного оператору "if"

if (productPrice > quantityPersonMoney)

{var message = (`${integerRezult} грн. ${rezult2}${fractionalRezult} коп.`)

var goodMessage = 'Ні не може'}

else if (message == undefined)

var message = ''


if (productPrice <= quantityPersonMoney)
 
{ var goodMessage = 'Ви можете придбати товар, бажаете придбати лотерею за 4грн?'

 var message1 = 'Грошей вистачає'

var lotteryBuy = Math.abs(rezult) - 4

 var integerLotteryBuy = Math.floor(lotteryBuy)

 var fractionalLotteryBuy = Math.round((lotteryBuy%integerLotteryBuy)*100)}

 else var message1 = ''

//  if (integerLotteryBuy == undefined && fractionalLotteryBuy == undefined)

//  var integerLotteryBuy =''
 
//  var fractionalLotteryBuy =''




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
			<th>Ціна товару :</th>
			<td>${integerPartProductPrice} грн. ${fractionalPartProductPrice} коп.</td>
		</tr>
		<tr>
			<th>Кількість грошей у покупця :</th>
			<td>${integerPartPersonMoney} грн. ${fractionalPartPersonMoney} коп.</td>
		</tr>
		<tr>
			<th>Чи може покупець купити товар :</th>
			<td>${goodMessage}</td>
		</tr>
		<tr>
			<th>Вам не вистачає :</th>
			<td>${message} ${message1}</td>
		</tr>
			
	</tbody>
	</table>`)