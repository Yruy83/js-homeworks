
// Умова задачі : З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

if (confirm('Почати тестування ?')) {
	// Етапи рішення :

// Введення назви товару №1

const firstProductName = prompt('Введіть назву першого товару', '')

// Введеняя кількості товару №1

const firstProductQuantity = parseInt(prompt('Введіть кількість першого товару', ''))

// Введення ціни за товар №1

const firstProductPrice = parseFloat(prompt('Введіть ціну першого товару', ''))

// Введення назви товару №2

const secondProductName = prompt('Введіть назву другого товару', '')

// Введеняя кількості товару №2

const secondProductQuantity = parseInt(prompt('Введіть кількість другого товару', ''))

// Введення ціни за товар №2

const secondProductPrice = parseFloat(prompt('Введіть ціну другого товару', ''))

// Введення назви товару №3

const thirdProductName = prompt('Введіть назву третього товару', '')

// Введеняя кількості товару №3

const thirdProductQuantity = parseInt(prompt('Введіть кількість третього товару', ''))

// Введення ціни за товар №3

const thirdProductPrice = parseFloat(prompt('Введіть ціну третього товару', ''))

// Обчислення вартості першого товару. 

const totalSumFirstProductPrice = firstProductQuantity * firstProductPrice

// Обчислення вартості другого товару. 

const totalSumSecondProductPrice = secondProductQuantity * secondProductPrice

// Обчислення вартості третього товару. 

const totalSumThirdProductPrice = thirdProductQuantity * thirdProductPrice

//  Обчислення загальної вартості всіх товарів.

const allTotalSum = totalSumFirstProductPrice + totalSumSecondProductPrice + totalSumThirdProductPrice

// Виведення в браузер.

document.write(`
	<div class="check">
		<address class="address">
			<div class="address__container">
				<div class="address__text">
					<h2>ООО &quot;Санта рітейл&quot;</h2>
					<span>м. Бобровиця, вул. Олега Бичка, 20</span>
				</div>
				<div class="address__unp">
					<span>УНП 291313486</span>
					<span>РЕГ№ 219002942</span>
				</div>
			</div>
		</address>
		<section class="receipt">

			<div class="receipt__container">

				<div class="receipt__title">
					<h3>чек продажу платіжний документ</h3>
				</div>

				<div class="receipt__text">

					<div class="receipt__number">
						<span>номер чека</span>
						<span>26803.808.256</span>
					</div>

					<div class="receipt__cashier">
						<span>кассир</span>
						<span>філатова ю.с.</span>
					</div>

				</div>

			</div>

		</section>
		<section class="body-receipt">

			<div class="body-receipt__container">

				<div class="body-receipt__text">
					<p>
						4810168037833 ${firstProductName}
					</p>
				</div>

				<div class="body-receipt__count">
					<span>${firstProductQuantity} * ${firstProductPrice.toFixed(2)}</span>
					<span>${totalSumFirstProductPrice.toFixed(2)}</span>
				</div>

				<div class="body-receipt__text">
					<p>
						48102391 ${secondProductName}
					</p>
				</div>

				<div class="body-receipt__count">
					<span>${secondProductQuantity} * ${secondProductPrice.toFixed(2)}</span>
					<span>${totalSumSecondProductPrice.toFixed(2)}</span>
				</div>

				<div class="body-receipt__text">
					<p>
						4811168003811 ${thirdProductName}
					</p>
				</div>

				<div class="body-receipt__count">
					<span>${thirdProductQuantity} * ${thirdProductPrice.toFixed(2)}</span>
					<span>${totalSumThirdProductPrice.toFixed(2)}</span>
				</div>
			</div>

		</section>
		<section class="footer-receipt">
			<div class="footer-receipt__container">
				<span>До оплати</span>
				<span>${allTotalSum.toFixed(2)}</span>
			</div>
		</section>
	</div>
`)
}