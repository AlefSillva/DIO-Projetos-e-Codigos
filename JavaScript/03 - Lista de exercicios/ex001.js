/* 
    Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
    sua média e a sua classificação conforme a tabela abaixo.Faça


    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, repovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const n1 = 7;
const n2 = 7;
const n3 = 8;
const media = (n1 + n2 + n3) / 3;

console.log(`A média do aluno é: ${media}`);

if (media < 5) {
  console.log("Reprovado!");
} else if (media >= 5 && media <= 7) {
  console.log("Recuperação!");
} else {
  console.log("Aprovado!");
}
