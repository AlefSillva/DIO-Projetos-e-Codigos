/*
ex #001
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado. 
    
    Crie um método que daddo a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar um determinado percurso.
*/

class Carro { // Atributos de um carro
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) { 
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) { // Isso é um método
        return (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel);
        
    }

}

const hb20 = new Carro('Hyundai', 'Vermelho Chilli', 1 / 9);
console.log(hb20.calcularGastoDePercurso(70, 5.29));

const palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5.29));
