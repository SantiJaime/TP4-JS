const objetos = []

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
    imprimeDatosProd(){
        console.log(`Código: ${this.codigo}| Nombre del producto: ${this.nombre} | Precio: $${this.precio}`)
    }
    imprimeDatosArray(){
        objetos.forEach(function(prod, i){
            console.log(`Producto ${i+1}:`)
            console.log(`Código: ${prod.codigo}| Nombre del producto: ${prod.nombre} | Precio: $${prod.precio}`)
        })
    }
}

const prod1 = new Producto("100","Coca Cola",500)
const prod2 = new Producto("101","Sprite",480)
const prod3 = new Producto("102","Mirinda Manzana",320)

objetos.push(prod1, prod2, prod3)

do {
    let op = parseInt(prompt(`¿Qué desea hacer?
    1) Mostrar datos del producto 1
    2) Mostrar datos del producto 2
    3) Mostrar datos del producto 3
    4) Mostrar catálogo completo de productos`))

    switch(op){
        case 1:
            console.log("Producto 1:")
            prod1.imprimeDatosProd()
            console.log("---------------------------------------")
            break;
        case 2:
            console.log("Producto 2:")
            prod2.imprimeDatosProd()
            console.log("---------------------------------------")
            break;
        case 3:
            console.log("Producto 3:")
            prod3.imprimeDatosProd()
            console.log("---------------------------------------")
            break;
        case 4:
            console.log("Catálogo completo:")
            console.log("---------------------------------------")
            prod1.imprimeDatosArray()
            console.log("---------------------------------------")
            break;
        default:
            console.log("Opción incorrecta. Intente de nuevo")

    }
} while (confirm("¿Desea realizar otra operación?"));









