// alert('Добро пожаловать на сайт!')
// confirm('Вы уверенны что хотите удалить пользователя?')
// prompt('Введите ваше имя')

let name;
let profession;
let workEx;
let isSmoke;

name = prompt('Ваше имя')

while (name === '') {
  name = prompt('Ваше имя')
}

profession = prompt('Ваша профессия')

while (profession === '') {
  profession = prompt('Ваша профессия')
}

workEx = prompt('Ваш стаж работы')

while (workEx === '') {
  workEx = prompt('Ваш стаж работы')
}

while (Number.isNaN(Number(workEx))) {
  workEx = prompt('Ваш стаж работы')
}

isSmoke = confirm('Вы курите?')

console.log(name, profession, workEx, isSmoke)

document.querySelectorAll('b')[0]
  .innerHTML = name;

document.querySelectorAll('b')[1]
  .innerHTML = profession;

document.querySelectorAll('b')[2]
  .innerHTML = workEx;

if (isSmoke === true) {
  document.querySelectorAll('b')[3]
  .innerHTML = "Да";
} else {
  document.querySelectorAll('b')[3]
  .innerHTML = "Нет";
}













// let counter = localStorage.getItem('counter') || 0

// let counterValue =
//   document.getElementById('counterValue');

// counterValue.innerHTML = counter
















// let defaultName = 'User';
// let name;

// name = '';
// defaultName = ''

// console.log(!name || !defaultName || !"no-name")




















// let int;
// let myName = "Danil";

// int = 10;

// console.log(int);

// // Примитивы

// console.log(typeof int);
// console.log(typeof "abc");
// console.log(typeof true);

// // Сложные типы

// console.log(typeof {});
// console.log(typeof []);