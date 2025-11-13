const nome = "Arthur"
console.log(`ola, ${nome}`)

let n1 = 10
let n2 = 5
console.log(`soma, ${n1+n2}`)
console.log(`subtração,${n1-n2}`)

const date = new Date()
dia = date.getDate()
hora = date.getHours()
min = date.getMinutes()
console.log(`estamos no dia,${dia} e no horario ${hora}:${min}`)

argumento = process.argv.slice(2)
console.log('ola ', argumento)