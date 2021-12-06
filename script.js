function insert(num) {
   
   var numero = document.querySelector('.telaresultado').innerHTML;
   document.querySelector('.telaresultado').innerHTML = numero + num;
    
}

function clean(){
   
    document.querySelector('.telaresultado').innerHTML = "";
}

function calcular(){
    var resultado = document.querySelector('.telaresultado').innerHTML;
    if(resultado) {
        document.querySelector('.telaresultado').innerHTML = eval(resultado);
    }
    console.log(resultado)
}
