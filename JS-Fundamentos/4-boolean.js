let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
//pode usar 1 e 0 para representar booleano
isAtivo = 0;
console.log(Boolean(isAtivo));
console.log(!!isAtivo); // negacao e o sinal de exclamacao
//o sinal de exclamacao representa a negacao

console.log("os verdadeiros ...."); //mostrando que o !! mostra oq e verdadeiro
console.log(!!3);
console.log(!! -1);
console.log(!!null);//retorna false
console.log(!!undefined)//retorna false
console.log(!!(isAtivo = false));
console.log((''|| null || 0 || `epa`)); // retorna o primeiro verdadeiro
var nome = '';
console.log(nome ||'Desconhecido'); //se o nome tiver vazio retorna desconhecido


