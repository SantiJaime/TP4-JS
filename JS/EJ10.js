class Aeropuerto{
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto
        this.listaAviones = listaAviones
    }
    buscarAvion(nombreAvion){
        let buscar = this.listaAviones.filter((avion) => {
            return avion.nombre.toLowerCase().includes(nombreAvion.toLowerCase())
        })
        if(buscar != '' && buscar != null){
            console.log(buscar)
        }
        else{
            console.log("El avión ingresado no existe")
        }
    }
}
const listaAviones = []

class Aviones{
    constructor(nombre, capacidad, destino, listaPj){
        this.nombre = nombre
        this.capacidad = capacidad
        this.destino = destino
        this.listaPj = listaPj
    }
    abordar(){
        let pj = parseInt(prompt("¿Cuántos pasajeros abordan el avión?"))
        if(this.capacidad != 0 && pj <= this.capacidad){
            this.capacidad = this.capacidad - pj
            console.log(`Al avión le quedan ${this.capacidad} espacios`)
        }
        else if(this.capacidad === 0){
            console.log("El avión está lleno")
        }
        else if(pj > this.capacidad){
            console.log("No quedan espacios suficientes en el avión")
        }
    }
}

const avion1 = new Aviones("Bude-1944",44,"La Ciudadela","Tino Costa, Ratón Ibañez, Nacho Arce")
const avion2 = new Aviones("FrSir-03",70,"Monumental José Fierro","Joaquín Pereyra, Marcelo Estigarribia, 'Polaco' Menéndez")
const avion3 = new Aviones("DLG-SG",102,"Sportivo Guzmán","Facundo Cuezzo, Tomás Budeguer, Santiago Posada")

listaAviones.push(avion1, avion2, avion3)

const aeropuerto1 = new Aeropuerto("Aeropuerto Internacional")

do {
    let op = parseInt(prompt(`¿Qué desea hacer?
    1) Abordar pasajeros en el avión 1
    2) Abordar pasajeros en el avión 2
    3) Abordar pasajeros en el avión 3
    4) Buscar un avión en el aeropuerto `))

    switch(op){
        case 1:
            console.log(`La capacidad del avión es de ${avion1.capacidad}`)
            avion1.abordar()
            break;
        case 2:
            console.log(`La capacidad del avión es de ${avion2.capacidad}`)
            avion2.abordar()
            break;
        case 3:
            console.log(`La capacidad del avión es de ${avion3.capacidad}`)
            avion3.abordar()
            break;
        case 4:
            aeropuerto1.buscarAvion(prompt("Ingrese el nombre del avión a buscar"))
            break;
        default:
            console.log("Opción incorrecta. Intente de nuevo")
    }
} while (confirm("¿Desea realizar otra operación?"));
