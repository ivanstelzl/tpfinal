
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
    nombre : /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/,
    telefono : /^\d{7,14}$/,
    ubicacion : /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    consulta : /^[a-zA-ZÁ-ÿ\s]{5,200}$/
}

const camposs = {
    nombre : false,
    mail : false,
    telefono : false,
    ubicacion : false,
    consulta : false
}

const validarFormulario = (e) => {
    switch(e.target.name){

        case "nombre":
          ValidarCampo(expresiones.nombre, e.target, "nombre");

        break;

        case "mail":
            ValidarCampo(expresiones.mail, e.target, "mail");
        break;

        case "telefono":
            ValidarCampo(expresiones.telefono, e.target, "telefono");
        break;

        case "ubicacion":
            ValidarCampo(expresiones.ubicacion, e.target, "ubicacion");
        break;

        case "consulta":
            ValidarCampo(expresiones.consulta, e.target, "consulta");
        break;
    }
}


const ValidarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_correcto")
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_incorrecto")
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-xmark")
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove("formulario_input_error_activo")
        camposs[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_correcto")
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_incorrecto")
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-xmark")
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add("formulario_input_error_activo")
        camposs[campo] = false;
    }
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    if(camposs.nombre && camposs.mail && camposs.telefono && camposs.ubicacion && camposs.consulta){
        formulario.reset();

        document.getElementById("formulario_mensaje_exito").classList.add("formulario_mensaje_exito_activo")
        document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje_activo")
        setTimeout(() => {
            document.getElementById("formulario_mensaje_exito").classList.remove("formulario_mensaje_exito_activo")
        }, 7000)

        document.querySelectorAll('.formulario_grupo_correcto').forEach((icono) => {
            icono.classList.remove("formulario_grupo_correcto");
            
        })
    }
    else{
        document.getElementById("formulario_mensaje").classList.add("formulario_mensaje_activo")
            
    }})


inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);    
})