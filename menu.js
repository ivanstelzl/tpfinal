
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
    nombre : /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/,
    telefono : /^\d{7,14}$/,
    ubicacion : /^[a-zA-ZÁ-ÿ\s]{1,40}$/
}

const camposs = {
    nombre : false,
    mail : false,
    telefono : false,
    ubicacion : false,
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

    if(camposs.nombre && camposs.mail && camposs.telefono && camposs.ubicacion){
        formulario.reset();

        document.getElementById("formulario_mensaje_exito").classList.add("formulario_mensaje_exito_activo")
        document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje_activo")
        document.getElementById("formulario_mensaje").classList.add("formulario_mensaje")
        setTimeout(() => {
            document.getElementById("formulario_mensaje_exito").classList.remove("formulario_mensaje_exito_activo")
        }, 5000)

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



function AñadirFormulario(){

    document.getElementById("formulario").classList.add("formulario");
    document.getElementById("formulario").classList.remove("formulario_inactivo");
}




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


var tableaPrecios = document.getElementById("tabla");
var inputss = document.querySelectorAll('#tabla input');
 

const SepararInput = (e) => {
    switch(e.target.name) {
        case 'fosforitos' : {
            document.getElementById("precio1").value= (e.target.value)*500;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);
            break;
        }
        case 'bondiola' : {
            document.getElementById("precio2").value =(e.target.value)*600;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);

            break;
        }
        case 'empanadas' : {
            document.getElementById("precio3").value = (e.target.value)*400;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);

            break;
        }
        case 'arabes' : {
            document.getElementById("precio4").value = (e.target.value)*450;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);


            break;
        }
        case 'canastitas' : {
            document.getElementById("precio5").value = (e.target.value)*380;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);


            break;
        }
        case 'hamburguesas' : {
            document.getElementById("precio6").value = (e.target.value)*530;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);


            break;
        }
        case 'pizzetas' : {
            document.getElementById("precio7").value = (e.target.value)*420;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);


            break;
        }
        case 'falafel' : {
            document.getElementById("precio8").value = (e.target.value)*340;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);


            break;
        }
        case 'tarteletas' : {
            document.getElementById("precio9").value = (e.target.value)*400;
            document.getElementById("total").value = parseInt(document.getElementById("precio1").value) + parseInt(document.getElementById("precio2").value) + parseInt(document.getElementById("precio3").value) + parseInt(document.getElementById("precio4").value) + parseInt(document.getElementById("precio5").value) + parseInt(document.getElementById("precio6").value) + parseInt(document.getElementById("precio7").value) + parseInt(document.getElementById("precio8").value) + parseInt(document.getElementById("precio9").value);

            break;
        }
    }
}


inputss.forEach((input) => {
    input.addEventListener('keyup', SepararInput);    
})


///////////////////////////////////////////////////////////////////////
    
const inputs3 = document.querySelectorAll('#prods input');
const formu = document.getElementById("prods");


      
const CalcTotal = (e) => {

    }



inputs3.forEach((input) => {
input.addEventListener('keyup', CalcTotal);
input.addEventListener('blur', CalcTotal);    
})

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



const formulario2 = document.getElementById("formulario2");
const inputs2 = document.querySelectorAll("#formulario2 input");

const camposs2 = {
    nombre : false,
    mail : false,
    telefono : false,
    ubicacion : false
}


const validarFormulario2 = (e) => {
    switch(e.target.name){

        case "nombre":
          ValidarCampo2(expresiones.nombre, e.target, "nombre");
        break;

        case "mail":
            ValidarCampo2(expresiones.mail, e.target, "mail");
        break;

        case "telefono":
            ValidarCampo2(expresiones.telefono, e.target, "telefono");
        break;

        case "ubicacion":
            ValidarCampo2(expresiones.ubicacion, e.target, "ubicacion");
            break;
    }}


    const ValidarCampo2 = (expresion, input, campo) => {

        if(expresion.test(input.value)){
            document.getElementById(`grupoo_${campo}`).classList.add("formulario_grupo_correcto")
            document.getElementById(`grupoo_${campo}`).classList.remove("formulario_grupo_incorrecto")
            document.querySelector(`#grupoo_${campo} i`).classList.remove("fa-circle-xmark")
            document.querySelector(`#grupoo_${campo} i`).classList.add('fa-circle-check')
            document.querySelector(`#grupoo_${campo} .formulario_input_error`).classList.remove("formulario_input_error_activo")
            camposs2[campo] = true;
        } else {
            document.getElementById(`grupoo_${campo}`).classList.remove("formulario_grupo_correcto")
            document.getElementById(`grupoo_${campo}`).classList.add("formulario_grupo_incorrecto")
            document.querySelector(`#grupoo_${campo} i`).classList.add("fa-circle-xmark")
            document.querySelector(`#grupoo_${campo} i`).classList.remove('fa-circle-check')
            document.querySelector(`#grupoo_${campo} .formulario_input_error`).classList.add("formulario_input_error_activo")
            camposs2[campo] = false;
        }
    }



    formulario2.addEventListener('submit', (e) => {
        e.preventDefault()
    
        if(camposs2.nombre && camposs2.mail && camposs2.telefono && camposs2.ubicacion){
            formulario.reset();
    
            document.getElementById("formulario_mensaje_exito2").classList.add("formulario_mensaje_exito_activo")
            document.getElementById("formulario_mensaje2").classList.remove("formulario_mensaje_activo")
            document.getElementById("formulario_mensaje2").classList.add("formulario_mensaje")
            setTimeout(() => {
                document.getElementById("formulario_mensaje_exito2").classList.remove("formulario_mensaje_exito_activo")
            }, 5000)
    
            document.querySelectorAll('.formulario_grupo_correcto').forEach((icono) => {
                icono.classList.remove("formulario_grupo_correcto");
                
            })
        }
        else{
            document.getElementById("formulario_mensaje2").classList.add("formulario_mensaje_activo")
                
        }})


        inputs2.forEach((input) => {
            input.addEventListener('keyup',validarFormulario2);
            input.addEventListener('blur',validarFormulario2); 
        })


////////////////////////////////////////////////////////////////////////////////////////////////

