const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('input-tarefa');

let tarefas = ['Estudar Node.js', 'Aprender React', 'Entender C# e .NET'];

function renderizarTarefas() {
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa;

        const btnRemover = document.createElement('button');
        btnRemover.className = 'botao-remover';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerTarefa(index);
        
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function adicionarTarefa() {
    const tarefa = input.value.trim();
    if (tarefa) {
        tarefas.push(tarefa);
        input.value = '';
        renderizarTarefas();
    } else {
        alert('Tarefas vazias não podem ser enviadas.');
    }
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarTarefas();