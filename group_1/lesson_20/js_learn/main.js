console.log(Math.random() * 5);

for (var i = 0; i <= 3; i++) {
  console.log(new Array(i).fill('*').join(''))
}

console.log('==================')

console.log("Подбросить монетку")

var otvet = Math.random() // otvet = 0.4198798

if (otvet > 0.5) otvet = "Орел" // пропускаем
if (otvet < 0.5) otvet = "Решка" // otvet = "Решка"

console.log(otvet) // "Решка"

// Типы данных

console.log('==================')

console.log(5 + 5 * 10 > 0)

console.log({
  name: "Danil",
  lastName: "Savchenko"
})

console.log([1,23,"a"])