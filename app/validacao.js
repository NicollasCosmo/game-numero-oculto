let contador = 3

function verificaChute(chute) {
    const numero = +chute    // O sinal de + transforma o chute de string para um número iteiro.
    

    if (seNumeroInvalido(numero)) {     // Verifica se o que o usuário chutou é de fato um número.
        elementoChute.innerHTML += '<div>Valor não é número</div>' // chute do usuário concatenado com a div da mensagem.
    }

    if (maiorOuMenor(numero)) { // Verifica se o chute do usuário está entre o menor e maior valor definido no jogo.
        elementoChute.innerHTML += `<div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`

    
    }
        
        // Se o chute for igual ao número secreto, informa ao usuário e revela o número. Também insere um botão na tela para que o usuário possa reiniciar o jogo.
    if (numero === numeroSecreto) { 
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O Número secreto era ${numeroSecreto}</h3>

        <button id="reiniciar" class="btn-reiniciar">Reiniciar</button>
        `
       
    // Dica informando ao usuário que o número é "menor" em relação ao informado.
    }else if (numero > numeroSecreto) { 
       
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
         contador = contador-1;

    }else {  // Dica informando ao usuário que o número é "maior" em relação ao informado.
        
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
        contador = contador-1;
    }

    if (contador === 0) {
        document.body.innerHTML = `
        <h1>GAME OVER</h1>
        <button id="reiniciar" class="btn-reiniciar">Reiniciar</button>
        `
    }
    
console.log(contador)
    
}



function seNumeroInvalido(numero) { // Função que Verifica se o que o usuário chutou é de fato um número.
   Number.isNaN(numero) //retorna caso seja NaN para número, ou seja, não for um número.
   return 
}

function maiorOuMenor(numero) {     //Função que retorna se o número nao está dentro do maior e menor valor defino.
     numero > maiorValor || numero < menorValor
     return
}



// Se o usuário der um click no botão onde consta o target com o id 'reiniciar', a tela será reiniciada (reload).
document.body.addEventListener('click', evento => {
    if (evento.target.id == 'reiniciar') {
        window.location.reload() // Obs: Obtém o local, ou URL atual, do objeto de janela e reinicia.
    }
})
