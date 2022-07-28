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

function preguntarOpcion(){
    let opcion = parseInt(prompt(`Bienvenido/a a Elite Sport! Ingrese el número de la opción que desea realizar:
                        1 - Ingresar un nuevo producto al stock
                        2 - Mostrar catalogo 
                        3 - Buscar producto por seccion 
                        0 - Salir`))
                                   
    menu(opcion)
}
//Function que ofrezca un menú
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert("Gracias por visitar Elite Sport, vuelva pronto")
        break    
        case 1:
            ingresarArticulo()
      	break 
   	    case 2: 
            mostrarCatalogo()
      	break 
   	    case 3: 
            buscarSeccion()
      	break
        
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }console.log(menu);
}

let salir 
while(salir != true){
    preguntarOpcion()   
}

//Funcion para agregar un producto
function ingresarArticulo(){
    let articuloIngresado = prompt("Ingrese el nombre del articulo a incorporar")
    let seccionIngresada = prompt("Ingrese la seccion a la que pertenece el articulo")
    let precioIngresado = prompt("Ingrese el precio del nuevo articulo")
    let nuevoArticulo = new Producto (articuloIngresado, seccionIngresada, precioIngresado)
        console.log(nuevoArticulo);
        
//Push del nuevo Articulo al Array
Venta.push(nuevoArticulo)
console.log(Venta);
}
// ingresarArticulo()

//Muestra de catalogo
function mostrarCatalogo(){
    Venta.forEach((producto)=>console.log(`El articulo ${producto.articulo} tiene un valor de ${producto.precio}`))
    
}
// mostrarCatalogo()

//Buscar por seccion
function buscarSeccion(){
    let secBuscada = prompt("Ingrese la seccion que desea conocer")
    let busca = Venta.filter((producto)=>producto.seccion.toLowerCase() == secBuscada.toLowerCase())
        if (busca == ""){
            alert("La seccion que intenta conocer no se encuentra disponible")
        }else{
            console.log(busca);
            
        }
}

// buscarSeccion()


    
    