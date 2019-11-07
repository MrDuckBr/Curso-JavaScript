const peso1= 1.0;
const peso2 = Number('2.0');
console.log(peso1,peso2);

console.log(Number.isInteger(peso1));//verifica se peso 1 e valor inteirro(true or false)

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total /(peso2+peso1);
console.log(media.toFixed(2)); //duas casas decimais;
console.log(media.toString(2)); //valor em binario
console.log(typeof media);

// alguns cuidados numeros;

console.log(7/0); //retorna infinity
console.log("10"/2);     
//ele le a string e ve o numero e divide
console.log("Show" * 2);
console.log(0.1 + 0.7);
//console.log(10.toString()); nao funciona;
console.log((10.345).toFixed(2)); //consigo chamar as funcoes dentro de parenteses

// usando math(api basica de js)
const raio = 5.6;
const area= Math.PI * Math.pow(raio ,2);
console.log(area);
console.log(media.toString(2));
console.log(typeof Math);