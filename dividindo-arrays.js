
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicus', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log("O tamanho do array é: " + nomes.length);
console.log("O resultado da divisão do tamanho do array é: ", nomes.length / 2);
console.log(`Alunos da sala 1:  ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);


