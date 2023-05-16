class Personas{
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
    saludar(){
        console.log(`Hola ${this.profesion} ${this.nombre}`)
    }
    despedirse(){
        console.log(`Adiós ${this.profesion} ${this.nombre}`)
    }
}

const persona1 = new Personas("Santiago",20,"Programador")
const persona2 = new Personas("Luciano",20,"Doctor")

console.log("---------------------------------------")
console.log("Persona 1:")
console.log(`Nombre: ${persona1.nombre} | Edad: ${persona1.edad} | Profesión: ${persona1.profesion}`)
console.log("---------------------------------------")

console.log("Persona 2:")
console.log(`Nombre: ${persona2.nombre} | Edad: ${persona2.edad} | Profesión: ${persona2.profesion}`)
console.log("---------------------------------------")

persona1.saludar()
persona2.saludar()

persona1.despedirse()
persona2.despedirse()
