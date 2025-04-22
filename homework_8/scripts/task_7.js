
//Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:

/*
1)	за весь рік;
2)	у першій половині року;
3)	у другій половині року;
4)	за літо;
5)	за ІІ квартал;
6)	за парні місяці (з парними номерами);
7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
 */

if (confirm('Почати тестування ?')) {

//-------функція яка знаходить сумарну кількість грошей за за весь рік.

	function calcTotalMoneyYear (array) {
		let sumYear = 0;
		for (let i =0; i < array.length; i++) {
			sumYear += array[i];
		}
		return sumYear;
	}

	//-------функція яка знаходить сумарну кількість грошей у першій половині року.

	function calcTotalFirstHalfYear (array) {
		let sumFirstHalfYear = 0;
		for (let i =0; i < 6; i++) {
			sumFirstHalfYear += array[i];
		}
		return sumFirstHalfYear;
	}

	//-------функція яка знаходить сумарну кількість грошей у другій половині року.

	function calcTotalSecondHalfYear (array) {
		let sumSecondHalfYear = 0;
		for (let i =6; i < array.length; i++) {
			sumSecondHalfYear += array[i];
		}
		return sumSecondHalfYear;
	}

	//-------функція яка знаходить сумарну кількість грошей за літо.

	function calcTotalSummer (array) {
		let sumSummer = 0;
		for (let i =5; i < 8; i++) {
			sumSummer += array[i];
		}
		return sumSummer;
	}

		//-------функція яка знаходить сумарну кількість грошей за за ІІ квартал.

		function calcTotalSecondQuarter (array) {
			let sumSecondQuarter = 0;
			for (let i = 3; i < 6; i++) {
					sumSecondQuarter += array[i];
			}
			return sumSecondQuarter;
		}

		//-------функція яка знаходить сумарну кількість грошей за парні місяці (з парними номерами).

		function calcTotalEvenMonth (array) {
			let sumEvenMonth = 0;
			for (let i = 0; i < array.length; i++) {
				if ((i + 1) % 2 === 0) {
				sumEvenMonth += array[i];
			}
		}
			return sumEvenMonth;
		}
	
		//-------функція яка знаходить сумарну кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

		function calcTotalFirstMonth (array) {
			let sumFirstMonth = 0;
			for (let i = 2; i < array.length; i += 3) {
					sumFirstMonth += array[i];
		}
			return sumFirstMonth;
		}
//----------------------0    1    2    3    4    5    6    7    8    9    10   11
	const userReceipt = [260, 255, 290, 245, 198, 176, 158, 169, 193, 164, 201, 268];
	const totalUserPayYear = calcTotalMoneyYear (userReceipt);
	const totalUserPayFirstHalfYear = calcTotalFirstHalfYear (userReceipt);
	const totalUserPaySecondHalfYear = calcTotalSecondHalfYear (userReceipt);
	const totalUserPaySummer = calcTotalSummer (userReceipt);
	const totalUserPayEvenMonth = calcTotalEvenMonth (userReceipt);
	const totalUserPaySecondQuarter = calcTotalSecondQuarter (userReceipt);
	const totalUserPayFirstMonth = calcTotalFirstMonth (userReceipt);
	document.write(`Оплата квитанцій протягом року : ${userReceipt}<br>`);
	document.write(`<br>Cумарна кількість грошей за за весь рік : ${totalUserPayYear}<br>`);
	document.write(`<br>Cумарна кількість грошей у першій половині року : ${totalUserPayFirstHalfYear}<br>`);
	document.write(`<br>Cумарна кількість грошей у другій половині року : ${totalUserPaySecondHalfYear}<br>`);
	document.write(`<br>Cумарна кількість грошей за літо : ${totalUserPaySummer}<br>`);
	document.write(`<br>Cумарна кількість грошей за парні місяці (з парними номерами) : ${totalUserPayEvenMonth}<br>`);
	document.write(`<br>Cумарна кількість грошей за ІІ квартал : ${totalUserPaySecondQuarter}<br>`);
	document.write(`<br>Cумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима) : ${totalUserPayFirstMonth}<br>`);
}