// function sum(a, b) {
//   console.log(a, b)

//   if (Number.isNaN(Number(a))) {
//     console.warn('sum(): параметр `a` не число')
//     return null
//   }

//   if (Number.isNaN(Number(b))) {
//     console.warn('sum(): параметр `b` не число')
//     return null
//   }

//   return a + b;
// }

// function u(a, b) {
//   console.log(a, b)
//   return a * b
// }

// function warn() {
//   alert("ВНИМАНИЕ ОПАСНОСТЬ!")
// }

// console.log(sum(1, {}))

function questionFactory(text, answers, realAnswer) {
  return {
    text: text,
    answers: answers,
    realAnswer: realAnswer
  }
}

// Вопросы
let q1 = questionFactory(
  'Сколько будет 2 + 2 * 2 = ?',
  ['8', '6', '10'],
  1
)

let q2 = questionFactory(
  'Сколько будет 2 ** 3 = ?',
  ['4', '16', '8'],
  2
)

let q3 = questionFactory(
  "Сколько будет 10 / 3 = ?",
  ['0', '3', '3.333'],
  2
)

let questions = [q1]

let rigthAnswers = 0

function checkAnswer(q) {
  let answer = prompt(q.text + '\n' + 
  'Выберите правильный вариант:' + '\n' +
  q.answers)
  
  if (answer == q.answers[q.realAnswer]) {
    console.log('Правильный ответ:', answer)
    rigthAnswers++
  } else {
    console.log('НЕ правильный ответ:', answer)
  }
}

for (let i = 0; i < questions.length; i++) {
  checkAnswer(questions[i])
}

// итоги теста
if (rigthAnswers == questions.length) {
  alert('Поздравляем! Вы прошли тест.')
} else {
  let repiat = confirm('Тест не пройден. Попробовать снова?')

  if (repiat) location.reload()
}
