class Libro {
  constructor(isbn = 0, titulo = "-", autor = "-", nroPag = 0) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._nroPag = nroPag;
  }

  set isbn(valor) {
    this._isbn = valor;
  }
  get isbn() {
    return this._isbn;
  }

  set titulo(valor) {
    this._titulo = valor;
  }
  get titulo() {
    return this._titulo;
  }

  set autor(valor) {
    this._autor = valor;
  }
  get autor() {
    return this._autor;
  }

  set nroPag(valor) {
    this._nroPag = valor;
  }
  get nroPag() {
    return this._nroPag;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._nroPag} páginas.</p>`
    );
  }
}

let nuevoLibro1 = new Libro();

nuevoLibro1.mostrarLibro()

nuevoLibro1.isbn = 1234567891011
nuevoLibro1.titulo = "'Cantar de mil pájaros'"
nuevoLibro1.autor = "'Kakashi Hatake'"
nuevoLibro1.nroPag = "720"

nuevoLibro1.mostrarLibro()

let nuevoLibro2 = new Libro();

nuevoLibro2.mostrarLibro()

nuevoLibro2.isbn = 2789456123964
nuevoLibro2.titulo = "'La doctrina egoísta'"
nuevoLibro2.autor = "'Son Goku'"
nuevoLibro2.nroPag = "575"

nuevoLibro2.mostrarLibro()
