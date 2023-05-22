
var clicks = 0;
var vencedor = "";
var vez = 1;
var jogador1Pontos = 0;
var jogador2Pontos = 0;
var modoDificuldade = "facil";


$(function () {
    // Jquery é uma lib JavaScript.
    // Tudo que é dele tem que ficar aqui dentro

    // ponto (.) é class, jogo da velha (#) é ID
    $(".casa").click(function () {
        clicks++;
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var fig = "url(imagens/" + vez.toString() + ".png)";
            $(this).css("background-image", fig);
            vez = (vez == 1 ? 2 : 1); // if ternário, trocando a vez do jogador

            verificarFimDeJogo();
        }
    });
});

function casasIguais(a, b, c) {
    var casaA = $("#casa" + a);
    var casaB = $("#casa" + b);
    var casaC = $("#casa" + c);

    var bgA = $("#casa" + a).css("background-image");
    var bgB = $("#casa" + b).css("background-image");
    var bgC = $("#casa" + c).css("background-image");

    if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
        if (bgA.indexOf("1.jpg") != -1) {
            vencedor = "2";
            jogador1Pontos++;
        } else {
            vencedor = "1";
            jogador2Pontos++;
        }
        return true;
    } else {
        return false;
    }
}

function verificarFimDeJogo() {
    if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
    ) {
        $("#resultado").html("<h1> GAME " + " OVER </h1>" +
            "<h2>Quer jogar de novo?</h2>" +
            "<button onclick='sim()'> Reset</button>"
        );
            function atualizarPlacar() {
    $("#jogador1").text("Jogador 1: " + jogador1Pontos + " ponto(s)");
    $("#jogador2").text("Jogador 2: " + jogador2Pontos + " ponto(s)");

    if (jogador1Pontos !== 0 || jogador2Pontos !== 0) {
        $("#limparPlacar").show();
    } else {
        $("#limparPlacar").hide();
    }
}

        $(".casa").off("click");

        $("#resultado").addClass("exibido"); // Adiciona a classe 'exibido'

        atualizarPlacar();
    } else if (clicks >= 9 && vencedor == "") {
        $("#resultado").html("<h1>O JOGO EMPATOU! </h1>" +
            "<h2>Quer jogar de novo?</h2>" +
            "<button onclick='sim()'>Sim?</button>");

        atualizarPlacar();
    }
}


function sim() {
    clicks = 0;
    vencedor = "";
    vez = 1;
    $(".casa").css("background-image", "");
    $("#resultado").html("");
    $(".casa").on("click", function () {
        clicks++;
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var fig = "url(imagens/" + vez.toString() + ".png)";
            $(this).css("background-image", fig);
            vez = (vez == 1 ? 2 : 1);
            verificarFimDeJogo();
        }
    });
    $("#resultado").removeClass("exibido"); // Remove a classe 'exibido'
    // Remova a linha abaixo para que o botão "Limpar Placar" não desapareça
    // $("#limparPlacar").hide();
}



function atualizarPlacar() {
    $("#jogador1").text("Jogador 1: " + jogador1Pontos + " ponto(s)");
    $("#jogador2").text("Jogador 2: " + jogador2Pontos + " ponto(s)");

    if (jogador1Pontos !== 0 || jogador2Pontos !== 0) {
        $("#limparPlacar").show();
    } else {
        $("#limparPlacar").hide();
    }
}

// Evento de clique para o botão Limpar Placar
// Evento de clique para o botão Limpar Placar
$(document).on("click", "#limparPlacar", function () {
    jogador1Pontos = 0;
    jogador2Pontos = 0;
    atualizarPlacar();
});
