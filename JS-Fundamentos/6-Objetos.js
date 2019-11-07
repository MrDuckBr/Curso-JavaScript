//json -> javascript object notacion (formato textual)
//diferente de objetos do proprio js
//em js o objeto e um conjunto chave valor
//DUAS FORMAS DE CRIAR OBJETOS
const prod1 ={} //par de chaves representa obj
prod1.nome = "Celular ultra mega"; //nome criado dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40; //criei vetor dentro do objeto  // evitar atributos com espaco

console.log(prod1); //imprime todo o objeto
const prod2 = { //criando bjeto diferente forma
    nome: 'Camisa polo',
    preco: 79.90,
}
console.log(prod2);

