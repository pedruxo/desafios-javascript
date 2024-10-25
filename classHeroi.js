const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = '';
let nivel = 0;

rl.question("Digite o nome do seu herói: ", (nomeInput) => {
    nome = nomeInput;

    rl.question("Digite o nível do seu herói: ", (nivelInput) => {
        nivel = parseInt(nivelInput);

        let patente = '';

        switch (true) {
            case nivel <= 1000:
                patente = "Ferro";
                break;

            case nivel > 1000 && nivel <= 2000:
                patente = "Bronze";
                break;

            case nivel > 2000 && nivel <= 5000:
                patente = "Prata";
                break;

            case nivel > 5000 && nivel <= 7000:
                patente = "Ouro";
                break;

            case nivel > 7000 && nivel <= 8000:
                patente = "Platina";
                break;

            case nivel > 8000 && nivel <= 9000:
                patente = "Ascendente";
                break;

            case nivel > 9000 && nivel <= 10000:
                patente = "Imortal";
                break;

            case nivel > 10000:
                patente = "Radiante";
                break;
        }

        console.log("O herói de nome " + nome + " está no nível de " + patente + "\n");

        rl.close();
    })
});

