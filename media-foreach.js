
const notas = [10, 6.5, 8, 7.7];

let somaDasNotas = 0;


// Call back
//notas.forEach(function(nota){
//    somaDasNotas += nota
//});


// esse bloco de código faz exatamente a mesma coisa que o bloco comentado acima.--> versão reduzida!
notas.forEach(nota => {
    somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(media);
