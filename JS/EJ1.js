let auto = {
    color: "Azul",
    marca: "Volkswagen",
    modelo: "Scirocco",
    motorEstado: false,
    
    motor(){
        if(this.motorEstado){
            console.log("El auto está encendido")
            let confirmar = confirm("¿Desea apagar el motor?")
            if(confirmar){
                this.motorEstado = false
            }
        }
        else{
            console.log("El auto está apagado")
            let confirmar = confirm("¿Desea encender el motor?")
            if(confirmar){
                this.motorEstado = true
            }
        }
    }
}
auto.motor()
auto.motor()
