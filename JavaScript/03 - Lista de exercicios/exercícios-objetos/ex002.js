/*
EX #002
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75m de altura e peça ao José para dizer o valor do seu IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){ // método para calcular imc
        return this.peso / (this.altura ** 2)
    }

    classificarImc() { // método para classificar Imc
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ("Abaixo do peso");
          } else if (imc >= 18.5 && imc <= 25) {
            return ("Peso normal");
          } else if (imc > 20 && imc <= 30) {
            return ("Acima do peso");
          } else if (imc > 30 && imc <= 40) {
            return ("Obesidade");
          } else {
            return ("Obesidade grave");
          }
    }
}

const jose = new Pessoa ('José', 70, 1.75);
console.log(jose.classificarImc());

const alef = new Pessoa ('Alef', 50, 1.70);
console.log(alef.classificarImc()); // escolha da pessoa "Alef" e chamou o método "calcular Imc"


