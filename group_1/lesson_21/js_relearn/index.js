const userName = "Danil";

const group = ["Danil", "Syimyk", "Talima", "Лейла", "Bayazat", "A", "B", "C"]

const user = {
  name: "Danil",
  isMentor: true,
  work: "dever",
}

// if (user.isMentor) {
//   console.log('Здравствуйте ' + user.name)
// } else {
//   console.log('Привет ' + user.name)
// }

const randomInt = Math.random()
const randomIndex = Math.floor(randomInt * group.length)

console.log(group[randomIndex])
