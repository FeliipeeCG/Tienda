class Figura {
  constructor(nombre, imagen, precio, altura) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.altura = this.altura;
  }
  //Nombre y precio unidos
  getTitle() {
    return this.nombre + " $" + this.precio;
  }
  //Propiedades
  getId() {
    return this.id;
  }
  getNombre() {
    return this.nombre;
  }
  getSrcImage() {
    return this.imagen;
  }
}
