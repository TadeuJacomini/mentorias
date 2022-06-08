// Dicas 
// CamelCase: é um padrão de escrita de código, assim como o SnakeCase
// Objeto Javascript é chamado JSON (Javascript Object Notation)
// Orientação a Objetos

var partida = {
    players: [],
    pontuacao: [],
    equipamentos: [] 
};

// função que adiciona jogadores a uma partida
function addPlayerToGame(player1, player2) {
    
    var players = [];

    players.push(player1);
    players.push(player2);

    partida.players.push(players);
}

addPlayerToGame("Tino", "Tadeu");
// console.log('Nossa partida é: ', partida)

// função que adiciona os equipamentos
function addEquipamentos(equipamentos) {
    partida.equipamentos.push(equipamentos);
}

addEquipamentos(["Raquete", "Bolinhas"]);
addEquipamentos(["Raquete"]);

// função que verifica equipamentos necessários
function verificaEquipamentos() {

    if (partida.equipamentos.length <= 0) {
        console.log("Partida não pode acontecer, equipamentos insuficiêntes!");
        return;
    }

    // partida.equipamentos.length = 4    
    // i                    =      0            1             2             [3]
    // partida.equipamentos =  ["Bolinhas", "Raquete 1", "Raquete 2", "Sinalizacao"]
    // i <= partida.equipamentos.length = true

    // Bolinhas
    // Raquete 1
    // Raquete 2
    // Sinalizacao

    var contadorRaquete = 0;
    var contadorBolinha = 0;

    for (i=0; i < partida.equipamentos.length; i++) {

        if (partida.equipamentos[i].includes("Raquete")) {
            contadorRaquete++;
        }

        if (partida.equipamentos[i].includes("Bolinhas")) {
            contadorBolinha++;
        }
    }

    if (contadorBolinha > 0 && contadorRaquete == 2) {
        return true;
    } else {
        return false;
    }
}


if (verificaEquipamentos()) {

    console.log('Segue o baile!!');   

    // função que adiciona a pontuacao da partida
    function addPontuacao(player, ponto) {

        var pontuacao = {
            player: player,
            ponto: ponto
        }

        partida.pontuacao.push(pontuacao)
    }

    addPontuacao("Tino", 1);
    addPontuacao("Tino", 10);
    addPontuacao("Tadeu", 1);
    addPontuacao("Tadeu", 1);
    addPontuacao("Tadeu", 1);
    addPontuacao("Tadeu", 1);

    // função que devolve o resultado da partida
    function retornaResultado() {

        if (partida.pontuacao <= 0)
            console.log("Partida não foi iniciada!");


        var contadorPlayer1 = 0;
        var contadorPlayer2 = 0;

        for (i=0; i < partida.pontuacao.length; i++) {
            if (partida.pontuacao[i].player == "Tadeu") {
                contadorPlayer1 += partida.pontuacao[i].ponto;
            } else if (partida.pontuacao[i].player == "Tino") {
                contadorPlayer2 += partida.pontuacao[i].ponto;
            }
        }

        if (contadorPlayer1 > contadorPlayer2) {
            console.log("Player Tadeu venceu o jogo!")
        } else {
            console.log("Player Tino venceu o jogo!")
        }

    }
    retornaResultado();

} else {
    console.log('Equipamentos insuficientes para inicio da partida!');
}







