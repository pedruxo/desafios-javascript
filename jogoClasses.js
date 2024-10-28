class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;

            case 'guerreiro':
                ataque = 'espada';
                break;

            case 'monge':
                ataque = 'artes marciais';
                break;

            case 'ninja':
                ataque = 'shuriken';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Elderthar', 69, 'mago');
const guerreiro = new Heroi('Thorgrim', 798, 'guerreiro');
const monge = new Heroi('Zephyr', 1000, 'monge');
const ninja = new Heroi('Naruto', 16, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();