
const nomes = ['Jão', 'Ju', 'Paula', 'Zé'];


// funções callback precisam necessáriamente receber uma outra função como parâmetro.
nomes.forEach(ImprimeNomes);

function ImprimeNomes(nome) {
    console.log(nome);
}

