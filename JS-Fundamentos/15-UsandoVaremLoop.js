const funcs = [];

for(var i = 0;i<10 ; i++){
    funcs.push(function(){ //criando uma funao pra cada incremento
        console.log(i);
    })//por nao ter escopo o valor sera sempre 10
}

funcs[2]();
funcs[8]();

