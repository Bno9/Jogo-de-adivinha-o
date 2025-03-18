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


function reiniciar(){ //Recarrega a pagina para jogar novamente
    location.reload()
    
}

function esperar(ms) { //Recarrega a pagina depois de 1 segundo, após vencer (peguei esse codigo no google)
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function chute(){
    let adivinhacao = obterAdivinhacao();
    const quantidadeTentativas = () => obterElemento('tentativas').textContent = 'Você tem ' + tentativas + ' tentativas restantes';
    const dica = () => obterElemento('dicas').textContent = 'Seu numero é ' + comparacao(adivinhacao) + ' que o numero certo';
    const perdeu = () => obterElemento('derrota').textContent = 'Você perdeu! O numero secreto era ' + numeroAleatorio + '. Clique em reiniciar para jogar novamente';
    
    
while (tentativas > 0){  

    if(tentativas <= 1){ //Tive que colocar um igual ou menor que 1, porque no ultimo loop ele só vai contar no 0, e se botar um return, fica aparecendo que ainda tem 1 tentativa, então deixei sem
        perdeu();
        document.getElementById("reiniciar").textContent = "Reiniciar"
    }

    if(valorPermitido(adivinhacao)){
        alert("apenas numeros de 1 a 100.");
        return;
    }

    if(adivinhacao === numeroAleatorio){
        document.getElementById('derrota').textContent = "Você ganhou!"
        esperar(1000).then(()  => { location.reload(); });
        return;
    }

    else{
        tentativas--
        quantidadeTentativas();
        dica();
        return;
    } 
    } 
}