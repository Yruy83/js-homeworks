

// Обчислити значення виразів:
		// 1. S1=a+12+b
		// 2. S2=√(((a+b)/2a) )  
		// 3. S3=∛((a+b)c)  
		// 4. S4=sin⁡(a/(-b)) 

// Розв'язок прикладу №1: S1=a+12+b

// Дія перша. Обя'влення фіксованої величини у математичному виразі.

const SECOND_VARIABLE = 12

// Дія друга. Обя'влення змінної "а".

const firstVariable = parseFloat( prompt('Введіть значення змінної "а"', '') )

// Дія третя. Обя'влення змінної "b".

const thirdVariable = parseFloat( prompt('Введіть значення змінної "b"', '') )

// Дія четверта. обчислення математичного виразу.

const sum = firstVariable + SECOND_VARIABLE + thirdVariable

// document.write (`<h1>Перший приклад 'S1=a+12+b'</h1> <br>${sum} = ${firstVariable.toFixed(2)} + ${SECOND_VARIABLE.toFixed(2)} + ${thirdVariable.toFixed(2)}`)

// Розв'язок прикладу №2: S2=√(((a+b)/2a) )

// Всі змінні в даному прикладі нам відомі з попереднього прикладу, тому переходимо до обчислення виразу.

const sum2 = Math.sqrt(( firstVariable + thirdVariable ) / ( 2 * firstVariable ))

// Розв'язок прикладу №3: S3=∛((a+b)c).

// Задаємо змінну "с", змінну "а" та "b" беремо з попередніх прикладів.

const fourthVariable = parseFloat( prompt('Введіть значення змінної "c"', '')  )

// Обчислення виразу S3=∛((a+b)c).

const sum3 = Math.cbrt( ( firstVariable + thirdVariable ) * fourthVariable )

// Розв'язок прикладу №4: S4=sin⁡(a/(-b)).

// Обчислення виразу S4=sin⁡(a/(-b)).

const sum4 = Math.sin( (firstVariable) / (-thirdVariable))


document.write (`<h1>Перший приклад 'S1=a+12+b'</h1> 
<br>${sum} = ${firstVariable.toFixed(2)} + ${SECOND_VARIABLE.toFixed(2)} + ${thirdVariable.toFixed(2)}
<br>
<h1>Другий приклад 'S2=√(((a+b)/2a))' </h1> <br> ${sum2} = &radic;(${firstVariable.toFixed(2)} + ${thirdVariable.toFixed(2)}) / (2 * ${firstVariable.toFixed(2)})
<br>
<h1>Третій приклад 'S3=∛((a+b)c)'</h1><br>
${sum3} = &#8731;(${firstVariable.toFixed(2)} + ${thirdVariable.toFixed(2)}) * (${fourthVariable.toFixed(2)})
<br>
<h1>Четвертий приклад 'S4=sin⁡(a/(-b))'</h1><br>
${sum4} = sin(${firstVariable.toFixed(2)} / (-${thirdVariable.toFixed(2)}))
<br>`)

