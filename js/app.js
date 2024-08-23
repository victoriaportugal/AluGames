let numeroAlugados = 0; 

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){

        let confirmacao = confirm("Tem certeza de que deseja devolver este jogo?");

        if(confirmacao){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        }

        numeroAlugados--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent= 'Devolver'
        botao.classList.add('dashboard__item__button--return');

        numeroAlugados++
    }

    valorNumeroAlugados();
}

function valorNumeroAlugados(){
    console.log (`Numero de jogos alugados: ${numeroAlugados}`)
}

