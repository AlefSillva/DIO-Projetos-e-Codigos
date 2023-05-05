/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1-  Preço do combustível;
2-  Consumo médio do carro por KM percorrido;
3-  Distância em KM;

Imprima no console o valor que será gasto para realizar esta viagem.

*/
const preçoCombustivel = 5.79;
const KmPorLitro = 12;
const distanciaEmKm = 1500;

const litrosConsumidos = distanciaEmKm / KmPorLitro;
const ValorGasto = litrosConsumidos * preçoCombustivel;

console.log(`O valor gasto nesta viagem será de ${ValorGasto.toFixed(2)}`)