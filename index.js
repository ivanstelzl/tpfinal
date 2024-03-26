var soc = `
<div class="masinfo">
    <h4 class="infosoc">Queremos un catering acordes a tus Cumpleaños, bautismos, casamientos, peloteros, etc</h4>
    <div class="bot">
        <button onclick="eliminar(sociales)" class="menosinfo">Mostrar menos  <i class="fa-solid fa-arrow-up"></i></button>
    </div>
</div>
`
var corp = `
<div class="masinfo">
    <h4 class="infosoc">Queremos un catering acordes a tus Cumpleaños, bautismos, casamientos, peloteros, etc</h4>
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