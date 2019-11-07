//funcao sem retorno

function imprimirSoma(a , b){
    console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2); //pode passar apenas um valor o segundo sera "undefined"
imprimirSoma(2,5,4,5,6); //vai pegar os primeiros parametros e os proximos ele vai ignorar
imprimirSoma('Marcos',' Paulo');
imprimirSoma(); //posso passar nada que retorna "NaN";

//funcao com retorno

function soma(a,b = 0 ){//por padrao o valor de b sera 0 quando eu nao passar o parametro b
    return a+b;
}
console.log(soma(2,3));
console.log(soma(2));
console.log(soma()); // retorna NaN poq eu nao passei nada
