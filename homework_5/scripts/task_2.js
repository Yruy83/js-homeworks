
// Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

if (confirm('Почати тестування ?')){
	
let someNumber = 5;

let rezult = ''

for (let number = 3; number < 9; number++) {
	if ((someNumber - number) >= 0)
		rezult += `<li style="color:rgb(9, 201, 9);">${number + ` - Місяць весни`}</li>`
	else
		rezult += `<li style="color:rgb(201, 9, 35);">${number + ` - Місяць літа`}</li>`
}
document.write(`<style>ol > li {padding-left: 10px;} ol > li:not(:last-child){margin-bottom: 15px;}</style><ol>${rezult}</ol>`)
}
