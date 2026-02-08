/* Seleciona os elementos do html.*/
const elemSlides = document.querySelector(".slides");
const elemsImagem = document.querySelectorAll(".slides img");

/* Quantidade de imagens.*/
const tamanhoLista = elemsImagem.length;

/* Em qual imagem começa. */
let index = 0;

/* Função que move o carrossel. */
const atualizarCarrossel = () => {
    elemSlides.style.transform = `translateX(${-index * 100}%)`
};

/* Troca automáticamente de imagem a cada x seg. */
setInterval(() => {
    index++;

    /* Depois da ultima volta para a primeira img.*/
    if (index >= tamanhoLista) {
        index = 0;
    }

    atualizarCarrossel();
}, 5000);

