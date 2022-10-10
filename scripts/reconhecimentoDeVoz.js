const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(elemento) {

    chute = elemento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)

}

function exibeChuteNaTela(chute) {

    elementoChute.innerHTML = `
    
    <div>Você disse</div>
    <span class="box">${chute}</span>

    `
}

//reinicia o microfone para  a pessoa tentar novamente
recognition.addEventListener('end', () => recognition.start())