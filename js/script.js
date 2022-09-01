let elementos = document.querySelectorAll(".player-options div > img");
let playerOpt = "";
let inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector(".vencedor");

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Player 2 ganhou!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Player 1 ganhou!"
        }
    }

    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Player 1 ganhou!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Player 2 ganhou!"
        }
    }

    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Player 2 ganhou!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Player 1 ganhou!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Empate"
        }
    }
}

function resetInimigo(){
    let enemyOptions = document.querySelectorAll(".enemy-options div");
    for(i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogador(){
    let rand = Math.floor(Math.random()*3);

    let enemyOptions = document.querySelectorAll(".enemy-options div");
    resetInimigo();
    for(i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
        }
    }

    validarVitoria();

}

function resetOpacityPlayer(){
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
        
    }
}


for(let i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click",(t)=>{
        
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt");

        inimigoJogador();
    })
}
