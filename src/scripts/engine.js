const onButton = document.querySelector("#on-button");
const lampada = document.querySelector('.lampada');
const luz = document.querySelector(".luz");
const  baseLampada = document.querySelector(".base-lampada");
const basePequena = document.querySelector(".luz");
const body = document.body;
const lampadaBody = document.querySelector(".container");
const resetButton = document.querySelector("#on-buttonReset");
let numberTime= 0;

onButton.addEventListener("click", ()=>{
    lampada.classList.toggle('dark');
    baseLampada.classList.toggle('dark');
    basePequena.classList.toggle('grey');
    body.classList.toggle('black');
    numberTime++;

    if(lampada.classList.contains('dark')) {
        onButton.innerHTML = "Ligar";
    }else{
        onButton.innerHTML = "Desligar";
    }

    if(numberTime==5){
        lampadaBody.classList.add('cair');
        lampada.classList.remove("luz");
        baseLampada.classList.remove("luz");
        body.classList.add("black");
    }else if(lampadaBody.classList.contains('cair')){
        lampadaBody.remove();
    }
});

resetButton.addEventListener("click",()=>{
    window.location.reload();
})
