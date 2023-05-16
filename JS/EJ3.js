class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }
    modificar(){
        let nuevoAlto = parseFloat(prompt("Ingrese el nuevo alto del rectángulo"))
        let nuevoAncho = parseFloat(prompt("Ingrese el nuevo ancho del rectángulo"))

        this.alto = nuevoAlto
        this.ancho = nuevoAncho
    }
    mostrar(){
        console.log(`El alto del rectángulo es ${this.alto}cm`)
        console.log(`El ancho del rectángulo es ${this.ancho}cm`)
    }
    calcular(){
        let p = 2 * (this.alto + this.ancho)
        let a = this.alto * this.ancho

        console.log(`El perímetro del rectángulo es ${p}cm`)
        console.log(`El área del rectángulo es ${a}cm^2`)
    }
}

let rect1 = new Rectangulos(parseFloat(prompt("Ingrese el alto del rectángulo (en cm)")),parseFloat(prompt("Ingrese el ancho del rectángulo (en cm)")))

do {
    let op = parseInt(prompt(`¿Qué desea hacer?
    1) Modificar valores del rectángulo
    2) Mostrar los valores del rectángulo ingresado
    3) Calcular perímetro y área`))

    switch(op){
        case 1:
            rect1.modificar()
            break;
        case 2:
            rect1.mostrar()
            console.log("------------------")
            break;
        case 3:
            rect1.calcular()
            console.log("------------------")
            break;
        default:
            console.log("Opción incorrecta. Intente de nuevo")
            console.log("------------------")
    }
} while (confirm("¿Desea realizar otra operación?"));