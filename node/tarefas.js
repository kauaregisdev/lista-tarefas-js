let tarefas = [];
function adicionarTarefa(tarefa) {
    if (tarefa && tarefa.trim() !== "") {
        tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada com sucesso!`);
        return true;
    }
    return false;
}

function removerTarefa(tarefa) {
    const index = tarefas.indexOf(tarefa);
    if (index >= 0) {
        tarefas.splice(index, 1);
        console.log(`Tarefa "${tarefa}" removida com sucesso!`);
        return true;
    } else {
        return false;
    }
}

function listarTarefas() {
    console.log("Lista de Tarefas:");
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa encontrada.");
    } else {
        tarefas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
    }
    return true;
}

adicionarTarefa('Estudar JavaScript');
adicionarTarefa('Praticar Node.js');
adicionarTarefa('Aprender React e Vue.js');

removerTarefa('Praticar Node.js');

listarTarefas();