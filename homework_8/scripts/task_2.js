
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:

/*
 номери днів, протягом яких кількість відвідувачів була меншою за 20;
 номери днів, коли кількість відвідувачів була мінімальною;
 номери днів, коли кількість відвідувачів була максимальною;
 загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

 */

if (confirm('Почати тестування ?')) {

	// const array = [Понеділок, Вівторок, Середа, Четверг, Пятниця, Суббота, Неділя]

	//-----функція для створення масиву випадкової кількость відвідувачів протягом 7-ми днів.

	function getQuantityVisitors(length, min = 0, max = 100) {
		const mainArray = []
		for (let i = 0; i < length; i++) {
			let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
			mainArray.push(randomNumber);
		}
		return mainArray;
	}

	//-----функція для визначення номерів днів, протягом яких кількість відвідувачів була меншою за 20.

	function getDaysVisitorsLess20(array, quantity) {
		const daysLess20 = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] < 20) {
				daysLess20.push(i + 1);
			}
		}
		return daysLess20.length > 0 ? daysLess20 : 'Таких днів не має';
	}

	//-----функція для визначення мінімальної кількість відвідувачів.

	function getMinVisitors(array) {
		let min = Infinity;
		for (let i = 0; i < array.length; i++) {
			if (array[i] < min) {
				min = array[i];
			}
		}
		return min;
	}

	//-----функція для визначення номерів днів, коли кількість відвідувачів була мінімальною .

	function getDayMinVisitors(array) {
		let minVisitors = getMinVisitors(array);
		let daysMinVisitors = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] === minVisitors) {
				daysMinVisitors.push(i+1);
			}
		}
		return daysMinVisitors;
	}

		//-----функція для визначення максимальної кількість відвідувачів.

		function getMaxVisitors(array) {
			let max = -Infinity;
			for (let i = 0; i < array.length; i++) {
				if (array[i] > max) {
					max = array[i];
				}
			}
			return max;
		}
	
		//-----функція для визначення номерів днів, коли кількість відвідувачів була максимальною .
	
		function getDayMaxVisitors(array) {
			let maxVisitors = getMaxVisitors(array);
			let daysMaxVisitors = [];
			for (let i = 0; i < array.length; i++) {
				if (array[i] === maxVisitors) {
					daysMaxVisitors.push(i+1);
				}
			}
			return daysMaxVisitors;
		}

//------функція яка рахує загальну кількість відвідувачів протягом робочих днів.

		function calcSumVisitorsWorkDays (array) {
			let sumVisitorsWorkDays = 0;
			for (let i = 0; i <= 4; i++) {
				sumVisitorsWorkDays += array[i];
			}
			return sumVisitorsWorkDays;
		}

//------функція яка рахує загальну кількість відвідувачів протягом вихідних днів.

		function calcSumVisitorsHolidayDays (array) {
			let sumVisitorsHolidayDays = 0;
			for (let i = 5; i <= 6; i++) {
				sumVisitorsHolidayDays += array[i];
			}
			return sumVisitorsHolidayDays;
		}

	const quantity = 20;
	const visitorsNumber = getQuantityVisitors(7);
	const visitorsLess20 = getDaysVisitorsLess20(visitorsNumber, quantity);
	const minDaysVisitors = getDayMinVisitors(visitorsNumber);
	const maxDaysVisitors = getDayMaxVisitors(visitorsNumber);
	const totalVisitorsWorkDays = calcSumVisitorsWorkDays(visitorsNumber);
	const totalVisitorsHolidayDays = calcSumVisitorsHolidayDays(visitorsNumber);

	document.write(`Кількість відвідувачів протягом тижня ${visitorsNumber}<br>`);
	document.write(`Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${visitorsLess20}<br>`);
	document.write(`Номери днів, коли кількість відвідувачів була мінімальною: ${minDaysVisitors}<br>`);
	document.write(`Номери днів, коли кількість відвідувачів була максимальною: ${maxDaysVisitors}<br>`);
	document.write(`загальна кількість клієнтів у робочі дні : ${totalVisitorsWorkDays}<br>`);
	document.write(`загальна кількість клієнтів у вихідні дні : ${totalVisitorsHolidayDays}<br>`);
}