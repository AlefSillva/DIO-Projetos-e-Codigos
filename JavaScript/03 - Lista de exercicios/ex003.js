/*
EX - 03:
Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cáculo
adequado

Código |     Forma de Pagamento    |       Condição de pagamento       |
  1    |À vista Débito             | recebe 10% de desconto            |
  2    |À vista no Dinheiro ou PIX | recebe 15% de desconto            |
  3    |Em 2x                      | preço normal de etiqueta s/ juros |
  4    |Acima de 2x                | preço normal de etiqueta c/ juros |

*/

function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
  return (valor + (valor * (juros / 100)));
}

const preçoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  console.log(aplicarDesconto (preçoEtiqueta, 10));
} else if (formaPagamento === 2) {
  console.log(aplicarDesconto (preçoEtiqueta, 15));
} else if (formaPagamento === 3) {
  console.log(preçoEtiqueta);
} else {
  console.log(aplicarJuros(preçoEtiqueta, 10));
}



aplicarDesconto()
aplicarJuros()

function calcular(n1, n2){
  const media = (n1 + n2) /2;
}

console.log(calcular(5,5));