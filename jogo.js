//Definição do numero do jogo
const numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);

//Função de mecanica do jogo
let tentativas = 10;

//Funções de dados
const obterElemento = (id) => document.getElementById(id);
const obterAdivinhacao = () => parseInt(obterElemento('adivinhar').value); //obtem o valor digitado pelo usuario
const valorPermitido = (valor) => valor < 1 || valor > 100; //valida se o numero digitado é menor que 1 ou maior que 100
const comparacao = (valor) => valor < numeroAleatorio ? "menor" : valor > numeroAleatorio ? "maior" : "igual"; //compara se o valor digitado é maior ou menor que o numero aleatorio
const apagarInterface = () => obterElemento('dicas').textContent = ''


function chute(){

    let adivinhacao = obterAdivinhacao();
    const quantidadeTentativas = () => obterElemento('tentativas').textContent = 'Você tem ' + tentativas + ' tentativas restantes';
    const dica = () => obterElemento('dicas').textContent = 'Seu numero é ' + comparacao(adivinhacao) + ' que o numero certo';
    const perdeu = () => obterElemento('derrota').textContent = 'Você perdeu! O numero secreto era ' + numeroAleatorio;
    

    if(tentativas <= 0){
        perdeu();
        return;
    }

    if(valorPermitido(adivinhacao)){
        alert("apenas numeros de 1 a 100.");
        return;
    }

    if(adivinhacao === numeroAleatorio){
        alert('Você acertou!!');
        return;
    }

        tentativas--
        quantidadeTentativas();
        dica();
    

}