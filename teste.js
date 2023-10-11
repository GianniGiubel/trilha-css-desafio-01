class Pessoa {
    nome;
    peso;
    altura;

    constructor ( nome,peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura,2)
    }
}

const gianni = new Pessoa('Gianni', 75, 1.80)

console.log(gianni)
console.log(gianni.calcularIMC())