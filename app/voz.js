const elementoChute = document.getElementById('chute') // Pegando a DIV com o Id 'chute'
const elementoChance = document.getElementById('numeroChance')





//Consumindo a API de reconhecimento e voz SpeechRecognition assim que a aplicação abrir.
window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;


const recognition = new SpeechRecognition(); // Instância para controlar as informações do SpeechRecognition.
recognition.lang = 'pt-Br' // Reconhecimento de voz configurado com a lingua pt-br
recognition.start() // Iniciando o reconhecimento de voz

// Ao acessar o evento 'result' do SpeechRecognition, será executada a função onSpeak
 recognition.addEventListener('result',onSpeak)

 



function onSpeak(e) {
    chute = e.results[0] [0].transcript // const chute recebe a transcrição da voz que está na propiedade results.
    exibeChuteNaTela(chute) //função que exibe a palavra falada pelo usuário (voz) na tela.
    verificaChute(chute)
    exibeChance(contador)
    
   
    
    
   
}

//Função que exibe na tela a DIV, junto como <span> onde está a palavra falada pelo usuário (voz).
//Obs: usando a crase (``) para exibir os elementos (div e span) na tela e ${} para trazer a const (chute) dentro do span.
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = ` 
        <div>Você disse</div>
        <span class="box">${chute}</span>
    ` 
}

// Quando a função acabar (ou seja, no evento 'end'), automaticamente será reiniciado o recohecimento de voz.
recognition.addEventListener('end', () => recognition.start())

function exibeChance(contador) {
     elementoChance.innerHTML = `
        <div>Chances:</div>
        <span class="caixaChance">${contador}</span>
    
    `

}