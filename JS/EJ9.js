class Animal{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        console.log("*Ladrido del perro*")
    }
}
class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        console.log("*Maullido del gato*")
    }
}

const perro1 = new Perro("Toby","4")
const gato1 = new Gato("Michi","3")

console.log("---------------------------------------")
console.log("Perro:")
console.log(`Nombre: ${perro1.nombre} | Edad: ${perro1.edad}`)
perro1.emitirSonido()
console.log("---------------------------------------")
console.log("Gato:")
console.log(`Nombre: ${gato1.nombre} | Edad: ${gato1.edad}`)
gato1.emitirSonido()
console.log("---------------------------------------")
