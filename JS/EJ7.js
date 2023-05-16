class Contacto {
  constructor(nombre, tel) {
    this.nombre = nombre;
    this.tel = tel;
  }
  anadirContacto() {
    if (c !== 0) {
      agenda.push(this);
      c--;
      console.log("Contacto añadido");
    } else if (c === 0) {
      console.log("No se pudo añadir el contacto");
    }
  }
  existeContacto() {
    if (agenda.includes(this)) {
      console.log("El contacto existe");
    } else {
      console.log("El contacto NO existe");
    }
  }
  listarContactos() {
    if (agenda.length !== 0) {
      console.log("Contactos agendados");
      console.log("------------------------------");
      agenda.forEach((persona) => {
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Número de teléfono: ${persona.tel}`);
        console.log("------------------------------");
      });
    } else {
      console.log("La agenda está vacía");
    }
  }
  buscarContacto(nombreContacto) {
    agenda.filter((persona) => {
      if (persona.nombre.toLowerCase().includes(nombreContacto.toLowerCase())) {
        console.log(persona.tel);
      } else {
        console.log("El contacto ingresado no existe en la agenda");
      }
    });
  }
  eliminarContacto(nombre) {
    if(agenda.length !== 0){
      agenda.forEach((persona, i) => {
        if (persona.nombre.toLowerCase() === nombre.toLowerCase()) {
          let confirmar = confirm(
            "¿Está seguro que desea eliminar este contacto?"
          );
          if (confirmar) {
            agenda.splice(i, 1);
            c++;
            console.log("Contacto eliminado");
          }
        }
        else{
          console.log("El nombre ingresado no coincide con ningún contacto de la agenda")
        }
      });
    }
    else {
      console.log("La agenda está vacía, no se puede eliminar contactos")
    }

  }
  agendaLlena() {
    if (c === 0) {
      console.log("La agenda está llena");
    } else {
      console.log("La agenda aún no está llena");
    }
  }
  huecosLibres() {
    console.log(`La agenda ingresada tenía originalmente ${lim} espacios`);
    console.log(`Ahora, a la agenda le quedan ${c} espacios disponibles`);
  }
}
let agenda = [];
let lim = parseInt(prompt("Indique el tamaño de la agenda"));
let c = lim;

const persona1 = new Contacto("Jaime", "654984321");
const persona2 = new Contacto("Ale", "4132468453");
const persona3 = new Contacto("Facundo", "756481235");

do {
  let x = parseInt(
    prompt(`Menú de opciones | Seleccione un opción por su número
    1) Añadir un contacto a la agenda
    2) Verificar si un contacto existe en la agenda
    3) Listar los contactos de la agenda
    4) Eliminar un contacto de la agenda
    5) Verificar si la agenda está llena o no
    6) Verificar cuántos huecos disponibles tiene la agenda`)
  );
  switch (x) {
    case 1:
      let op1 = parseInt(prompt("¿Desea añadir el contacto 1, 2 o 3?"));
      if (op1 === 1) persona1.anadirContacto();
      if (op1 === 2) persona2.anadirContacto();
      if (op1 === 3) persona3.anadirContacto();
      break;
    case 2:
      let op2 = parseInt(
        prompt("¿Desea verificar si existe el contacto 1, 2 o 3?")
      );
      if (op2 === 1) persona1.existeContacto();
      if (op2 === 2) persona2.existeContacto();
      if (op2 === 3) persona3.existeContacto();
      break;
    case 3:
      persona1.listarContactos();
      break;
    case 4:
      let p = prompt("Elija el contacto a eliminar: Jaime | Ale | Facundo");
      if (p.toLowerCase() === persona1.nombre.toLowerCase())
        persona1.eliminarContacto(p);
      if (p.toLowerCase() === persona2.nombre.toLowerCase())
        persona1.eliminarContacto(p);
      if (p.toLowerCase() === persona3.nombre.toLowerCase())
        persona1.eliminarContacto(p);
      break;
    case 5:
      persona1.agendaLlena();
      break;
    case 6:
      persona1.huecosLibres();
      break;
  }
} while (confirm("¿Desea hacer otra operación?"));
