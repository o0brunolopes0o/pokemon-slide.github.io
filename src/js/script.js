/* 
OBJETIVO 1 - quando clicar na seta ele vai avançar paro o próximo cartão
    passo 1 - pegar o objeto da seta HTML de avançar
    passo 2 - identificar o clique do usuário na seta avançar
    passo 3 - fazer aparecer o próximo cartão
    passo 4 - sumir com o cartão anterior 

OBJETIVO 1 - quando clicar na seta ele vai retroceder paro o próximo cartão
    passo 1 - pegar o objeto da seta HTML de voltar
    passo 2 - identificar o clique do usuário na seta voltar
    passo 3 - fazer aparecer o cartão anterior
    passo 4 - sumir com o cartão anterior 
*/

// passo 1 - pegar o objeto da seta HTML de avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})


btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})