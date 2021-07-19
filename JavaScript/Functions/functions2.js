const sum = function(n1, n2){
    let total = n1 + n2
    return total
}

console.log(sum(2, 3))

let n1 = 5
let n2 =6
console.log(`Valor de n1 é ${n1}`)
console.log(`Valor de n2 é ${n2}`)
console.log(`Valor da soma é ${sum(n1,n2)}`)

//Arrow funcion

const SyName = () =>{
    console.log("Arrow Funcion")
}

SyName()


//CallBack Funtion

function sayMyName (name){
    console.log('Antes da call back')
    name()
    console.log('Depois da call back')
}

sayMyName(
    ()=>{
        console.log('estou em uma callback')
    }
)

//Function Constructor

function Person(name){
    this.name = name
    this.walk = function(){
        return 'Andando'
    }
}

const Joao = new Person('Joao')
const Maria = new Person('Maria')

console.log(Joao)
console.log(Maria)

let named = new String("Edivaldo")

let data = new Date("2020-09-01")

console.log(named)
console.log(data)