//Elementos DOM
//-------------------------------------------------------

let pelicula = document.getElementById("pelicula");
//console.log(pelicula);

let precioPelicula = parseInt(pelicula.value);
//console.log(precioPelicula);


let contenedor = document.querySelector(".contenedor");
//console.log(contenedor);

let asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
//seleccionamos los asiento que no tengan la clase de ocupados
//console.log(asiento);

let contar = document.getElementById("contar");
//console.log(contar);

let total = document.getElementById("total");
//console.log(total);



//Función actualizar precio
//-----------------------------------------------------------------

function actualizarPrecio(){
    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
    const asientosSeleccionadosConteo = asientosSeleccionados.length;
    //console.log(asientosSeleccionadosConteo);
    contar.innerText = asientosSeleccionadosConteo;
    total.innerText = asientosSeleccionadosConteo * precioPelicula;

}


//Evento de la película seleccionada
//-----------------------------------------------------------------

pelicula.addEventListener("change", (e)=> {
    precioPelicula = e.target.value;
    actualizarPrecio();
})




// Evento del asiento seleccionado
//-----------------------------------------------------------------


asientos.forEach(asiento => {
    asiento.addEventListener("click", function (){
        
        if(asiento.classList.contains("seleccionado")){
            asiento.classList.remove("seleccionado");
            actualizarPrecio();    

        } else{
        asiento.classList.add("seleccionado");
        actualizarPrecio();
        
        }
        
    })
    
});



