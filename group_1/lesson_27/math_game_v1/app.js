// Математический тренажер

// 1. Данные
// 2. Алгоритм

/**
 * Данные
 * 
 * 1. Два числа
 * 2. Знак (плюс, минус)
 * 3. Ответ
 */

/**
 * Алогритм
 * 
 * 1. Генерация примера
 * 2. Выводим пример
 * 3. Проверям правильно или нет
 */

// ? +/- ? = ??

let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1

let operators = ["+", "-"]
let operator = operators[Math.floor(Math.random() * operators.length)]

let realResult; // undefined

if (operator == '+') {
  realResult = num1 + num2
} else if (operator == '-') {
  realResult = num1 - num2
}

let userResult = prompt(`${num1} ${operator} ${num2} = ???`)

if (userResult == realResult) {
  alert('Правильный ответ')
} else {
  alert('НЕ правильный ответ')
}
