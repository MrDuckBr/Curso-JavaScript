//heterogeneo -> por ser fracamente tipada
const valores = [1 , 2 , 3 , 6.3];
console.log(valores[0],valores[3]);
console.log(valores[4]); //vai retornar undefined porque indice 4 nao existe

valores[4]=10;
console.log(valores[4]);
valores[8]=33; //criei na posicao 8 e na impressao mostra que tem 3 posicoes vazias antes dele
console.log(valores); //imprime todo o vetor
console.log(valores.length);
valores.push({id:3},false,null,'teste'); //inseri mais coisas no vetor
console.log(valores);
console.log(valores.pop())//retira o ultimo valor do vetor e tira ele
delete valores[0]; //tira primeiro elemento do array
console.log(valores);
console.log(typeof valores)//retorna o tipo ,vetores tem tipo object


