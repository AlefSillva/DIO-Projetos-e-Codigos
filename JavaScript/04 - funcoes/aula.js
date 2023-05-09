/*

function incrementarJuros(valor , percentualJuros) { 
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;  
}

return (incrementarJuros(100, 10));
return (incrementarJuros(100, 15));

Função é um pequeno trecho de código que pode ser "invocado" para dar dinânima as cposas, usando parametros e pegando retorno
---------------------------------------------------------------------------------- */

/*
EX 302 - Índice de massa corporal é um critério da Organização Mundial de Saúde para dar uma 
indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

        IMC       |    Condição    |
- Abaixo de 18.5  | Abaixo do peso |
- Entre 18.5 e 25 |   Peso normal  |
- Entre 25 e 30   |  Acima do peso |
- Entre 30 e 40   |     Obeso      |
- Acima de 40     |Obesidade Grave |

*/

//Criadno uma função de cálculo do IMC:
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

// Criando função para retornar a classificação do IMC:
function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc > 20 && imc <= 30) {
    return "Acima do peso";
  } else if (imc > 30 && imc <= 40) {
    return "Obesidade";
  } else {
    return "Obesidade grave";
  }
}

// Main
(function () {
  const peso = 80;
  const altura = 1.75;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})()



