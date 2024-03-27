var soc = `
<div class="masinfo">
    <h4 class="infosoc">Menués de comida acorde a cumpleaños, bautismos, casamientos, peloteros, fiestas, reuniones, etc</h4>
    <div class="bot">
        <button onclick="eliminar(sociales)" class="menosinfo">Mostrar menos  <i class="fa-solid fa-arrow-up"></i></button>
    </div>
</div>
`
var corp = `
<div class="masinfo">
    <h4 class="infosoc">Un tipo de catering acorde a eventos formales</h4>
    <div class="bot">
        <button onclick="eliminar1(corporativos)" class="menosinfo">Mostrar menos  <i class="fa-solid fa-arrow-up"></i></button>
    </div>
</div>
`

fot= {
    masinfo : true
}
function agregar(){
    
    document.getElementById("sociales").innerHTML = soc
}

function eliminar(){
    document.getElementById("sociales").innerHTML = ""
}


function agregar1(){
    
    document.getElementById("corporativos").innerHTML = corp
}

function eliminar1(){
    document.getElementById("corporativos").innerHTML = ""
}