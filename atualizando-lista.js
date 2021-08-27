
const listaDeChamada = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie'];

listaDeChamada.splice(2, 2, 'Rodrigo'); // o terceiro parâmetro não é obrigatório. 
listaDeChamada.splice(4, 0, 'Jão', 'Zé'); // acrescenta um item na posição do array que eu escolher.

console.log(`Lista de chamada: ${listaDeChamada}`);

