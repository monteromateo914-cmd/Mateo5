let texto=document.getElementById("texto");
let posicion =;
 function mover (){
    posicion +=10;
    texto.style.marginLef=posicion+"px";
    if (Posicion>600){
        posicion=0;
    }
    }
    setInterval(mover,30);
