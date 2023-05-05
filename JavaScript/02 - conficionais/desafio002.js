/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do Etanol; 
2- Preço da Gasolina;
3- O tipo de combustível que está no carro;
4- Consumo médio do carro por KM percorrido;
3- Distância em KM;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const preçoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Gasolina";

const litrosConsumidos = distanciaEmKm / KmPorLitro;

if (tipoCombustivel === "Etanol") {
  const ValorGasto = litrosConsumidos * preçoEtanol;
  console.log("o Combustível é Etanol");
  console.log(ValorGasto.toFixed(2));
} else {
  const ValorGasto = litrosConsumidos * precoGasolina;
  console.log("O combustível é gasolina");
  console.log(ValorGasto.toFixed(2));
}
