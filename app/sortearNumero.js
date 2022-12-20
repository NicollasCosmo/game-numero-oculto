const menorValor = 1
const maiorValor = 1000
const numeroSecreto = geraAleatorio()






// gera números aleatórios até 1000 ou outro defino em maiorValor (obs: + 1 é para também incluir este número)
function geraAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto)



//Altera o valor da tag no span para a const menorValor
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor


//Altera o valor da tag no span para a const maiorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor







