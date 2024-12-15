function alterarStatus(id) {
    let resposta = prompt("Deseja realmente alugar/devolver?(S/N)");
    if (resposta == "N") {
        alert("Ok, o jogo não será alugado/devolvido");
    } else {
        alterarBotao(id);
    }
}

function alterarBotao(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        msg2(id);
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        msg1(id);
    }
}

function msg1(id) {
    id = id - 1;
    let texto = document.querySelectorAll("a")[id];
    texto.innerHTML = "Devolver";
}

function msg2(id) {
    id = id - 1;
    let texto = document.querySelectorAll("a")[id];
    texto.innerHTML = "Alugar";
}