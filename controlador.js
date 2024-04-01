let cajaUsuario=document.getElementById("usuario")
let cajaCorreo=document.getElementById("correo")
let cajaContraseña=document.getElementById("contraseña")

//validando el formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    
    if(cajaUsuario.value=="" && cajaContraseña.value=="" && cajaCorreo.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Revisa, tienes campos sin llenar",
        });
    }else{

        Swal.fire({
            title: "Buen trabajo!",
            text: "Bienvenido,espera un momento",
            icon: "success"
        });
        setTimeout(function(){
            window.location.href="./home.html"
        },5000)

    }

})