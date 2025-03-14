//Definição do numero do jogo
const numeroAleatorio = Math.random() * 100;
console.log(numeroAleatorio);


//Funções de dados
const obterElemento = (id) => document.getElementById(id);
const obterAdivinhacao = () => (obterElemento('adivinhar').value); //obtem o valor digitado pelo usuario
const valorPermitido = (valor) => valor <= 0 && valor > 100;
const comparacao = (valor) => valor < numeroAleatorio ? "menor" : "maior";


//Função de mecanicas do jogo
const tentativas = 10;

function chute(){

    const adivinhacao = obterAdivinhacao();
    const comparar = comparacao(adivinhacao);
    
while (tentativas > 0){

    if(valorPermitido(adivinhacao)){
        alert("apenas numeros de 1 a 100");
    } else return;

    if(adivinhacao == numeroAleatorio){
        alert('Você ganhou!!');
        return;
    }

    else{
        comparar();
        reduzirTentativas();
        dica();
    }
    
    const reduzirTentativas = () => tentativas - 1; 
    const quantidadeTentativas = () => obterElemento('tentativas').textContent = 'Você tem ' + tentativas + ' tentativas restantes';
    const dica = () => obterElemento('dicas').textContent = 'Seu numero é ' + comparar + ' que o numero certo';
}
} 