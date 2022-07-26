// Creacion de Objetos para E-commerce
class Producto{
    constructor(articulo,seccion,precio){
        this.articulo = articulo,
        this.seccion = seccion,
        this.precio = precio

        this.propiedadArt = function(){ 
        console.log(`El articulo es ${this.articulo}, perteneciente a la seccion ${this.seccion} y su precio es ${this.precio}`)};
    }    
}
const producto1 = new Producto("Camiseta River Plate 2022", "Futbol", 14.999)
producto1.propiedadArt()
const producto2 = new Producto("Camiseta Estudiantes de la Plata", "Futbol", 8.999)
producto2.propiedadArt()
const producto3 = new Producto("Seleccion Argentina Hockey", "Hockey", 7.999)
producto3.propiedadArt()
const producto4 = new Producto("Camiseta Seleccion Argentina Copa America", "Futbol", 12.999)
producto4.propiedadArt()
const producto5 = new Producto("Los Angeles Lakers", "Basquet", 9.999)
producto5.propiedadArt()
const producto6 = new Producto("Palo de Hockey Drial", "Hockey", 6.299)
producto6.propiedadArt()
const producto7 = new Producto("Camiseta Independiente 2022", "Futbol", 7.999)
producto7.propiedadArt()
const producto8 = new Producto("Camiseta Termica Flash", "Deportiva", 7.499)
producto8.propiedadArt()
const producto9 = new Producto("Camiseta Boca Juniors 2022", "Futbol", 14.999)
producto9.propiedadArt()
const producto10 = new Producto("Botines Puma Netfit", "Futbol", 8.999)
producto10.propiedadArt()
const producto11 = new Producto("Botines Total 90", "Futbol", 5.999)
producto11.propiedadArt()
const producto12 = new Producto("Camiseta Seleccion Argentina 2022", "Futbol", 14.999)
producto12.propiedadArt()
const producto13 = new Producto("Chicago Bulls 23", "Basquet", 9.999)
producto13.propiedadArt()
const producto14 = new Producto("Camiseta Seleccion Argentina '86", "Futbol", 7.499)
producto14.propiedadArt()
const producto15 = new Producto("Camiseta River Plate 2022 Alternativa", "Futbol", 12.999)
producto15.propiedadArt()
const producto16 = new Producto("Camiseta Racing Club 2022", "Futbol", 7.999)
producto16.propiedadArt()

//Carga de Array forma directa
const Venta = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16]
console.log(Venta);
