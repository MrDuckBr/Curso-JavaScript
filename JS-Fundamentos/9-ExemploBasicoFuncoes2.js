//armazenando uma funcao em uma variavel
const imprimirSoma = function(a,b){ //poder muito grande a linguagem armazenar funcoes em const
    console.log(a+b);
}

imprimirSoma(2,3);

//armazenando uma funcao arrow em uma variavel
const soma = (a , b) => {
    return a+b;
}

console.log(soma(3,4));

//retorno implicito
const subtracao = (a,b) => a-b //sem chave apenas uma unica linha de codigo
//sempre nesse caso ele retorna automaticamente
console.log(subtracao(2,3));




const imprimir2 = a => console.log(a);
imprimir2("Legal");
