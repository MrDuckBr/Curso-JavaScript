//string pode ser aspas duplas ,aspas simples, e crase(para template string)
const escola = "UFLA";
console.log(escola.charAt(3)); //retorna a letra que esta no indice 4;
console.log(escola);
//java script nao gerara erro se nao for realmente necessario
console.log(escola.charCodeAt(2));// valor da tabela ascii
console.log(escola.indexOf('L')) //retorna indice associado a letra
console.log(escola.substring(1))//imprime a partir deste indice
console.log(escola.substring(0,2))// imprime estes indices;

console.log("Escola ".concat(escola).concat("!"));//concat = > concatena // string definida sempre com duplas aaspas
console.log(escola.replace('F','t'));//troca as letras f maiuscula por f minusculo ou por qualquer outra varivel que eu quiser
//regex estudar bem poderoso
console.log('ana,maria,pedro'.split(","));//string em array,onde a virgula e o separador


//===========================   template string=================
const nome = "Rebeca";
const concatenacao = "Ola " + nome + "!";
 // em template abre e fecha com crase meio que ele escreve tudo que esta dentro da crase
 //
const template= `
    ola
    ${nome} ! ;
` //crase
console.log(concatenacao,template);

//expressoes
console.log(`1 + 1 = ${1+1} ` );

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")} !`);
