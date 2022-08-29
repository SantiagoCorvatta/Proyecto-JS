// Creacion de Objetos para E-commerce
class Producto{
    constructor(articulo,seccion,precio,imagen){
        this.articulo = articulo,
        this.seccion = seccion,
        this.precio = precio,
        this.imagen = imagen

        // this.propiedadArt = function(){};
    }    
}

// const producto1 = new Producto("Camiseta River Plate 2022", "Futbol", 14999, "./img/river1ra.jpg")
// producto1.propiedadArt()
// const producto2 = new Producto("Camiseta Estudiantes de la Plata", "Futbol", 8999, "./img/estudiantes.jpg")
// producto2.propiedadArt()
// const producto3 = new Producto("Seleccion Argentina Hockey", "Hockey", 7999, "./img/leonas.jpg")
// producto3.propiedadArt()
// const producto4 = new Producto("Camiseta Seleccion Argentina Copa America", "Futbol", 12999, "./img/copaamerica.jpg")
// producto4.propiedadArt()
// const producto5 = new Producto("Los Angeles Lakers", "Basquet", 9999, "./img/lakers.jpg")
// producto5.propiedadArt()
// const producto6 = new Producto("Palo de Hockey Drial", "Hockey", 6299, "./img/drial.jpg")
// producto6.propiedadArt()
// const producto7 = new Producto("Camiseta Independiente 2022", "Futbol", 7999, "./img/independiente.jpg")
// producto7.propiedadArt()
// const producto8 = new Producto("Camiseta Termica Flash", "Deportiva", 7499, "./img/termica.jpg")
// producto8.propiedadArt()
// const producto9 = new Producto("Camiseta Boca Juniors 2022", "Futbol", 14999, "./img/boca.jpg")
// producto9.propiedadArt()
// const producto10 = new Producto("Botines Puma Netfit", "Futbol", 8999, "./img/puma.jpg")
// producto10.propiedadArt()
// const producto11 = new Producto("Botines Total 90", "Futbol", 5999, "./img/total.jpg")
// producto11.propiedadArt()
// const producto12 = new Producto("Camiseta Seleccion Argentina 2022", "Futbol", 14999, "./img/argqatar.png")
// producto12.propiedadArt()
// const producto13 = new Producto("Chicago Bulls 23", "Basquet", 9999, "./img/musculosa.png")
// producto13.propiedadArt()
// const producto14 = new Producto("Camiseta Seleccion Argentina '86", "Futbol", 7499, "./img/mexico86.jpg")
// producto14.propiedadArt()
// const producto15 = new Producto("Camiseta River Plate 2022 Alternativa", "Futbol", 12999, "./img/river2da.jpg")
// producto15.propiedadArt()
// const producto16 = new Producto("Camiseta Racing Club 2022", "Futbol", 7999, "./img/racing.jpg")
// producto16.propiedadArt()


//Carga de Array forma directa
let Venta = []
let articuloComprado = []

fetch("articulos.json")
.then(response => response.json())
.then(data =>{
    for(let producto of data) {
        let nuevoArticulo = new Producto (producto.articulo, producto.seccion, producto.precio, producto.imagen)
        localStorage.getItem("Venta") ? Venta = JSON.parse(localStorage.getItem("Venta")) : Venta.push(data)
        localStorage.setItem("Venta", JSON.stringify(data))
    }
    
    mostrarCatalogo()
})
//Elementos
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

//Carga de productos al carrito
botonCarrito.addEventListener('click', () => {   
    cargarProductosCarrito(articuloComprado)    
})

// Plantilla CARDS
function mostrarCatalogo(){
let divProductos = document.getElementById("productos")
divProductos.innerHTML = "";
Venta.forEach((producto)=>{
let nuevoProducto = document.createElement("div")
nuevoProducto.innerHTML = `<div class= "shell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="wsk-cp-product">
                                            <div class="wsk-cp-img">
                                                <img src="${producto.imagen}" class="img-responsive" />
                                            </div>
                                            <div class="wsk-cp-text">
                                                <div class="category ">
                                                    <span>${producto.seccion}</span>
                                                </div>
                                                <div class="title-product">
                                                    <h3>${producto.articulo}</h3>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="wcf-left"><span class="price">$${producto.precio}</span></div>
                                                    <div class="wcf-right"><a href="#" class="buy-btn"><img src="./img/carro.png" alt="" id="buyCart${producto.articulo}"></a></div>                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                            </div>`
divProductos.appendChild(nuevoProducto)
//Agregar al carrito
let btnCarro = document.getElementById(`buyCart${producto.articulo}`)

//Invocar btnCarro
btnCarro.addEventListener("click", ()=>(addToCart(producto)))
})

}

function addToCart(producto){
   articuloComprado.push(producto)
   localStorage.setItem("cart", JSON.stringify(articuloComprado))
   Swal.fire({
        title: "Articulo agregado",
        text: "El producto se ha agregado al carrito",
        icon: "success",
        confirmButtonText: "Cerrar"
   }) 
}

//Iniciacion de array cart OPERADOR TERNARIO
localStorage.getItem("cart") ? articuloComprado = JSON.parse(localStorage.getItem("cart")) : localStorage.setItem("cart", [])



mostrarCatalogo()
let verArticuloBtn = document.getElementById("verArticulo")
verArticuloBtn.addEventListener("click", mostrarCatalogo)


// Function Agregar nuevo producto al stock. Eventos
function agregarProd(){
    let productInput = document.getElementById("productInput")
    let sectionInput = document.getElementById("sectionInput")
    let priceInput = document.getElementById("priceInput")
    let nuevoArticulo = new Producto(productInput.value, sectionInput.value, priceInput.value, "./img/pelota.jpg")
    console.log(nuevoArticulo);
    Venta.push(nuevoArticulo)
    console.log(Venta);
    localStorage.setItem("Venta", JSON.stringify(Venta))
    
}

const agregarArt = document.getElementById("agregarArt")
agregarArt.addEventListener("click", agregarProd)
function cargarProductosCarrito(productosDelStorage){

    

    modalBody.innerHTML = " "
    productosDelStorage.forEach((productoCarrito)=> {

        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.articulo}" style="max-width: 540px;">
        <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.articulo}">
        <div class="card-body">
                <h4 class="card-title">${productoCarrito.articulo}</h4>
            
                <p class="card-text">$${productoCarrito.precio}</p> 
                
<button class="noselect" id="botonEliminar"><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </div>    
    
    
    </div>`

    
})    

productosDelStorage.forEach((productoCarrito, indice)=>{
    //capturamos el boton sin usar variable y adjuntamos evento
    document.getElementById(`botonEliminar`).addEventListener('click', () => {
       
        //Eliminar articulo en el DOM
        let article = document.getElementById(`productoCarrito${productoCarrito.articulo}`)        
        article.remove()

        //Eliminar articulo del array "CART"
        articuloComprado.splice(indice, 1)        
        localStorage.setItem("cart", JSON.stringify(articuloComprado))
        cargarProductosCarrito(articuloComprado)
    })  

})
    
  compraTotal(...productosDelStorage)
  
}

//Calculo de totales SPREAD, REDUCE y OP TERNARIO
function compraTotal(...totales){
    acum = 0
    acum = totales.reduce((acum , productoCarrito)=>{
        return acum + parseInt(productoCarrito.precio)
    },0)

    acum > 0 ? parrafoCompra.innerHTML = `Importe total: $ ${acum}` : parrafoCompra.innerHTML = `El carrito de compras se encuentra vacio`
    
}
//Finalizacion de compra
function finalizarCompra(){    
    articuloComprado = []
    localStorage.removeItem('cart')       
    cargarProductosCarrito(productosEnCarrito)

}
botonFinalizarCompra.addEventListener('click',()=>{
    finalizarCompra()
})







    
    