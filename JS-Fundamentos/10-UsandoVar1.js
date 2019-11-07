{{{{var sera = 'Sera?'}}}}//pra mostrar que o escopo nao vai interferir na manipulacao desta variavel
// acima temos 4 escopos diferentes
console.log(sera); //se for funcao nao sera visivel

function teste(){
    var local=123;
}
//console.log(local);
//da erro e nao deixa pegar dentro de funcoes
