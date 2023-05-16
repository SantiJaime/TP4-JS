const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(dinero){
        this.saldo += dinero
        console.log(`Ha ingresado $${dinero}`)
    },
    extraer(dinero){
        if(this.saldo <= 0)
        {
            console.log("No puede extraer porque no tiene saldo")
        }
        else if(dinero > this.saldo){
            console.log("No tiene suficiente dinero para extraer")
        }
        else{
            this.saldo -= dinero
            console.log(`Ha extraído $${dinero}`)
        }
    },
    informar(){
        console.log(`Su saldo actual es de $${this.saldo}`)
    }
}
console.log("------------------")
console.log(`Titular de la cuenta: ${cuenta.titular}`)
console.log(`Saldo disponible: $${cuenta.saldo}`)
console.log("------------------")

do {
    let op = parseInt(prompt(`¿Qué desea hacer?
    1) Ingresar dinero
    2) Extraer dinero
    3) Consultar el estado de la cuenta`))

    switch(op){
        case 1:
            cuenta.ingresar(parseFloat(prompt("¿Cuánto dinero desea ingresar a su cuenta?")))
            console.log("------------------")
            break;
        case 2:
            cuenta.extraer(parseFloat(prompt("¿Cuánto dinero quiere extraer?")))
            console.log("------------------")
            break;
        case 3:
            cuenta.informar()
            console.log("------------------")
            break;
        default:
            console.log("Opción incorrecta. Intente de nuevo")
            console.log("------------------")
    }
} while (confirm("¿Desea realizar otra operación?"));



