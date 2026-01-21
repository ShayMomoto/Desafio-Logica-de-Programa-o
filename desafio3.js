class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        }
        else if (this.tipo === "guerreiro") {
            ataque = "espada";
        }
        else if (this.tipo === "monge") {
            ataque = "punhos";
        }
        else if (this.tipo === "ninja") {
            ataque = "shurikens";
        }
        else {
            ataque = "ataque básico";
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um herói
let heroi = new Heroi ("Momoto", 27, "ninja");

// Executando o ataque
heroi.atacar();