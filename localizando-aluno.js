
const alunos = ['João', 'Juliana', 'Caio', 'Júlia'];
const MediaDosAlunos = [10, 7, 9, 6];

let listaNotaAlunos = [alunos, MediaDosAlunos];

const exibeNomeNota = (nomeAluno) => {
    if (listaNotaAlunos[0].includes(nomeAluno)) {   //includes --> booleano
        let indice = listaNotaAlunos[0].indexOf(nomeAluno); //indexOf --> busca um número, o indice!
        return listaNotaAlunos[0][indice] + ', sua média é ' + listaNotaAlunos[1][indice] + '!';
    } else {
        return "Aluno não cadastrado!"
    }
}

console.log(exibeNomeNota("Júlia"));
