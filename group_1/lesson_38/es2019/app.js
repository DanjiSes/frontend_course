// 1. Стрелочные функции
// https://learn.javascript.ru/arrow-functions-basics
// https://learn.javascript.ru/arrow-functions

// 2. Констаны
// https://learn.javascript.ru/variables#konstanty

// 3. Деструктуризация
// https://learn.javascript.ru/destructuring-assignment

// 4. Классы, обекты, контекст
// https://learn.javascript.ru/classes
// https://learn.javascript.ru/mixins (доп материал)

// ==================================================

// Стрелки

function sum1(a, b) {
  // code..
  return a + b;
}

let sum2 = (a, b) => a + b
let sum3 = (a, b) => {
  return a + b
}
let q = n => n ** 2

// alert(sum1(5, 3))
// alert(sum2(10, 7))

// Константы

var name = 'Данил'
let name2 = 'Den'
const birthDate = '01.01.1997'

// Деструктуризация

let user1 = {
  name: 'Danil',
  login: 'den',
  passowrd: 'kpsakdjfkljafkalksdjfkjashfjaslfkalskjfkasjhfig13878',
}

let user2 = {...user1}
user2.name = 'Danila'

// console.log(user1);
// console.log(user2);

let login = user1.login
let pwd = user1.passowrd

let {login: username, passowrd = null} = user1

let arr = ["a", "b", "c"]

let first = arr[0]
let [a, b, cas] = arr

// const [count, setCount] = useState(0) // [0, function() {...}]

// Классы

class Phone {
  version = 'roc-v1.0'

  constructor(owner) {
    this.owner = owner
  }

  call(phone) {
    console.log(this.owner + ' звонит по номеру ' + phone)
  }
}

class iPhone extends Phone {
  version = 'iPhone-1'

  constructor(owner) {
    super(owner)
  }

  photo() {
    console.log('Фотография сохранена в галерею')
  }
}

let myNewSuperPhone = new Phone('Данил Савченко')
let notMyPhone = new Phone('Данил Петров')

// console.log(myNewSuperPhone);

// myNewSuperPhone.call('+99766546473')

// notMyPhone.call('+88008376357457')
// myNewSuperPhone.call('+88008376357457')

let myNewIPHONE = new iPhone('Данил Савченко')
console.log(myNewIPHONE);
myNewIPHONE.call('1029312731367')
myNewIPHONE.photo()

class Dog {
  constructor(gaf, name) {
    this._gaf = gaf
    this.name = name
  }

  gaf() {
    this._gaf()
  }
}

function gafff() {
  alert(this.name + ' сказал гаф!')
}

let myPet = new Dog(gafff, 'Rex')
let myPet2 = new Dog(gafff, 'Lilo')

// myPet.gaf()
// myPet2.gaf()
