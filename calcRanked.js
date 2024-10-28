const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ranking() {
    let vitorias = 0;
    let derrotas = 0;
    let saldo = 0;
    let nivel = '';

    function inputVitorias() {
        rl.question("Digite a quantidade de vitórias: ", (quant_vitorias) => {
            vitorias = parseInt(quant_vitorias);

            if (vitorias < 0) { //Evita consistências
                console.log("O número de vitórias não pode ser negativo. Tente novamente.\n");
                inputVitorias();
            }
            else {
                inputDerrotas();
            }
        })
    }

    function inputDerrotas() {
        rl.question("Digite a quantidade de derrotas: ", (quant_derrotas) => {
            derrotas = parseInt(quant_derrotas);

            if (derrotas < 0) {
                console.log("A quantidade de derrotas não pode ser negativa. Tente novamente.\n");
                inputDerrotas();
            }
            else {
                calcSaldo();
            }
        })
    }

    function calcSaldo() {
        saldo = parseInt(vitorias - derrotas);

        switch (true) {
            case saldo < 10:
                nivel = 'Ferro';
                break;

            case saldo > 10 && saldo <= 20:
                nivel = 'Bronze';
                break;

            case saldo > 20 && saldo <= 50:
                nivel = 'Prata';
                break;

            case saldo > 50 && saldo <= 80:
                nivel = 'Ouro';
                break;

            case saldo > 80 && saldo <= 90:
                nivel = 'Diamante';
                break;

            case saldo > 90 && saldo <= 100:
                nivel = 'Lendário';
                break;

            case saldo > 100:
                nivel = 'Imortal';
        }
        console.log("O Herói tem de saldo de " + saldo + " vitórias e está no nível de " + nivel + "\n");
        rl.close();
    }
    inputVitorias();
}
ranking();
