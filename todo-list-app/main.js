

const inputTarefa = document.getElementById('tarefa-input');
const botaoAdicionar = document.getElementById('adicionar-btn');
const listaTarefas = document.getElementById('lista-tarefas');



/// 2. Função para adicionar uma nova tarefa na lista (Aula 3)
function adicionarTarefa() {
  const textoDaTarefa = inputTarefa.value.trim();

  // 3. Validação do campo vazio (Aula 3)
  if (textoDaTarefa === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  // 4. Criação dos elementos do item da tarefa (Aula 4)
  const novaLi = document.createElement('li');

  const spanTexto = document.createElement('span');
  spanTexto.textContent = textoDaTarefa;

  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.className = 'btn-editar';

  const btnDeletar = document.createElement('button');
  btnDeletar.textContent = 'Deletar';
  btnDeletar.className = 'btn-deletar';

  // 5. Conexão dos botões às ações de editar e deletar (Aula 5)
  btnEditar.addEventListener('click', function () {
    editarTarefa(spanTexto);
  });

  btnDeletar.addEventListener('click', function () {
    deletarTarefa(novaLi);
  });

  // 6. Montagem do DOM: adiciona texto e botões à tarefa, e insere na lista
  novaLi.appendChild(spanTexto);
  novaLi.appendChild(btnEditar);
  novaLi.appendChild(btnDeletar);
  listaTarefas.appendChild(novaLi);

  // 7. Limpa o campo de tarefa e devolve o foco para o usuário
  inputTarefa.value = '';
  inputTarefa.focus();
}


  // 8. Função para editar a tarefa
function editarTarefa(spanTexto) {
  const textoAtual = spanTexto.textContent;
  const textoEditado = prompt('Edite a tarefa:', textoAtual);


  if (textoEditado === null) {
    return; // Usuário cancelou a edição
  }

  const textoLimpo = textoEditado.trim();

  if (textoLimpo === '') {
    alert('A tarefa não pode ficar vazia.');
    return;
  }

  spanTexto.textContent = textoLimpo;

}

// 9. Função para deletar a tarefa

function deletarTarefa(novaLi) {
  listaTarefas.removeChild(novaLi);

}



// 10. Evento do botão Adicionar conectado à função adicionarTarefa
botaoAdicionar.addEventListener('click', adicionarTarefa);


