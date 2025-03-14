//Definição do numero do jogo
const numeroAleatorio = Math.random() * 100;
console.log(numeroAleatorio);


//Funções de dados
const obterElemento = (id) => document.getElementById(id);
const obterAdivinhacao = () => obterElemento('adivinhar').value; //obtem o valor digitado pelo usuario
const valorPermitido = (valor) => valor <= 0 && valor > 100; //valida se o numero digitado é menor que 1 ou maior que 100
const comparacao = (valor) => valor < numeroAleatorio ? "menor" : "maior"; //compara se o valor digitado é maior ou menor que o numero aleatorio


//Função de mecanicas do jogo
const tentativas = 10;


function chute(){

    const adivinhacao = obterAdivinhacao();
    const comparar = comparacao(adivinhacao);
    const reduzirTentativas = tentativas - 1;
    const quantidadeTentativas = () => obterElemento('tentativas').textContent = 'Você tem ' + tentativas + ' tentativas restantes';
    const dica = () => obterElemento('dicas').textContent = 'Seu numero é ' + comparar + ' que o numero certo';
    
    
while (tentativas > 0){

    if(valorPermitido(adivinhacao)){
        alert("apenas numeros de 1 a 100.");
    }

    if(adivinhacao === numeroAleatorio){
        alert('Você acertou!!');
        return;
    }

    if(tentativas <= 0){
        const perdeu = () => obterElemento('derrota').textContent = 'Você perdeu!';
}

    else{
        comparar;
        reduzirTentativas;
        dica();
    }
} 
} 