class Persona{
    constructor(nombre, edad, sexo, peso, altura, anio){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anio = anio
        this.dni = this.generaDNI()
    }
    mostrarGeneracion(){
        switch(true){
            case this.anio >= 1930 && this.anio <= 1948:
                console.log("Silent Gen (Niños de la posguerra) | Rasgo: Austeridad")
                break;
            case this.anio >= 1949 && this.anio <= 1968:
                console.log("Baby boom | Rasgo: Ambición")
                break;
            case this.anio >= 1969 && this.anio <= 1980:
                console.log("Gen X | Rasgo: Obsesión por el éxito")
                break;
            case this.anio >= 1981 && this.anio <= 1993:
                console.log("Gen Y (Millenials) | Rasgo: Frustración")
                break;
            case this.anio >= 1994 && this.anio <= 2010:
                console.log("Gen Z | Rasgo: Irreverencia")
                break;
            default:
                console.log("El año ingresado está fuera de los límites establecidos")
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            console.log("La persona es mayor de edad")
        }
        else{
            console.log("La persona es menor de edad")
        }
    }
    mostrarDatos(){
        console.log("Nombre: " + this.nombre)
        console.log("Edad: " + this.edad)
        console.log("DNI: " + this.dni)
        console.log("Sexo: " + this.sexo)
        console.log("Peso: " + this.peso + "Kg")
        console.log("Altura: " + this.altura + "m")
        console.log("Año de nacimiento: " + this.anio)
    }
    generaDNI(){
        let dni = Math.floor(Math.random() * 90000000) + 10000000
        return dni
    }
}

const persona1 = new Persona("Santiago","20","H","75","1.70","2003")
const persona2 = new Persona("Ezequiel","12","H","40","1.40","2010")
const persona3 = new Persona("Natalia","49","M","50","1.48","1973")

console.log("---------------------------------------")
console.log("Persona 1:")
persona1.mostrarDatos()
persona1.esMayorDeEdad()
persona1.mostrarGeneracion()
console.log("---------------------------------------")

console.log("Persona 2:")
persona2.mostrarDatos()
persona2.esMayorDeEdad()
persona2.mostrarGeneracion()
console.log("---------------------------------------")

console.log("Persona 3:")
persona3.mostrarDatos()
persona3.esMayorDeEdad()
persona3.mostrarGeneracion()
console.log("---------------------------------------")