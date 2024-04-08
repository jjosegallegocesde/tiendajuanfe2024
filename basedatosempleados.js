let empleados=Array(
    {
        id:1,
        nombre:"Juan Jose Gallego Mesa",
        cargo:"Ingeniero",
        telefono:"3225962363",
        correo:"juangallego@comics.com",
        contactoEmergencia:"3189898747",
        foto:"./img/empleado1.jpg"
    },
    {
        id:8,
        nombre:"Laura Perez",
        cargo:"ENFERMERA",
        telefono:"318745444",
        correo:"laura@comics.com",
        contactoEmergencia:"300879877",
        foto:"./img/empleado1.jpg"
    }

)



//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1.Debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
   

    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    //se asocian las estructuras en orden logico
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)

})