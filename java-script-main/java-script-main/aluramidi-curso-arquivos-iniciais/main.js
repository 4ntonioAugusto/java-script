function tocaSomPom(idElementoAudio){
   document.querySelector(idElementoAudio).play('');
}
document.querySelectorAll('.tecla')


const listadeTeclas = document.querySelectorAll('.tecla');


listadeTeclas[0].onclick=tocaSomPom;


while(Contador <9) {
   listadeTeclas[Contador].classList[1]
   listadeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap');
   };


   contador = contador +1;
}
