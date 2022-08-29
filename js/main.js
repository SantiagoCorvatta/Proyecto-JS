// Creacion de Objetos para E-commerce
class Producto{
    constructor(articulo,seccion,precio,imagen){
        this.articulo = articulo,
        this.seccion = seccion,
        this.precio = precio,
        this.imagen = imagen

        
    }    
}


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







    
    