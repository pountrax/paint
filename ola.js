"use strict";

const canvas = document.getElementById("canvas")
const dif = canvas.getBoundingClientRect(); //nos permite saber la distancia 
//tenemos que definir el contexto primero
const ctx= canvas.getContext("2d");

//cuando le damos click esto va a ser true y cuando no entonces false
// let painting = false;
let painting,color,linewidth,difX,difY;
//mouse cuando se presione evento:
canvas.addEventListener("mousedown",e=>{
    difX = e.clientX- dif.left;
    difY =e.clientY- dif.top;

    painting=true;
    color=document.getElementById("color").value;
    linewidth=document.getElementById("lw").value;
    
   
}
)


canvas.addEventListener("mousemove",e=>{
   if(painting){
    dibujar(difX,difY, e.clientX- dif.left, e.clientY - dif.top);
    difX= e.clientX - dif.left;
    difY= e.clientY - dif.top;
   }
});

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting=false;
})


const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
}