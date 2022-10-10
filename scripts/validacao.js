function verificaSeOChutePossuiUmValorValido(chute) {

    //tenta converter para numero
    const numero = +chute

    if (chuteForValido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML = `
            
            <h2>GAME OVER</h2>
            <h3>Pressione o botao para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
            
            `

            document.body.style.backgroundColor = "red";
        } else {

            elementoChute.innerHTML += `<div> Valor Invalido</div>`
        }

        return



    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {

        elementoChute.innerHTML += `<div> Valor invalido: fale um numero entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {

        document.body.innerHTML = `

        <h2>Você Acertou!</h2>

        <h3>O numero secreto era: ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        
        `
    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `  <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

    } else {

        elementoChute.innerHTML += `  <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`

    }


}


function chuteForValido(numero) {

    return Number.isNaN(numero)

}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {

    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {

    if (e.target.id == 'jogar-novamente') {

        //recarrega a pagina e reinicia o jogo
        window.location.reload()

    }

})