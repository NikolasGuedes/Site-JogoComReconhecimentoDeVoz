const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * maiorValor + 1)

}

console.log("O numero secreto é", numeroSecreto)

const elementoMenorvalor = document.getElementById('menor-valor')
elementoMenorvalor.innerHTML = menorValor

const elementoMaiorvalor = document.getElementById('maior-valor')
elementoMaiorvalor.innerHTML = maiorValor