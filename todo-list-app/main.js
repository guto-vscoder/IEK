/**
 * Seleção dos elementos principais do HTML (Aula 3).
 * document.getElementById() retorna a referência do elemento pelo ID.
 */
const inputTarefa = document.getElementById('tarefa-input');
const botaoAdicionar = document.getElementById('adicionar-btn');
const listaTarefas = document.getElementById('lista-tarefas');

/**
 * Cria e insere uma nova tarefa na lista (Aulas 3, 4 e 5).
 */
function adicionarTarefa() {
  const textoDaTarefa = inputTarefa.value.trim();

  if (textoDaTarefa === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const novaLi = document.createElement('li');

  const spanTexto = document.createElement('span');
  spanTexto.textContent = textoDaTarefa;

  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.className = 'btn-editar';

  const btnDeletar = document.createElement('button');
  btnDeletar.textContent = 'Deletar';
  btnDeletar.className = 'btn-deletar';

  novaLi.appendChild(spanTexto);
  novaLi.appendChild(btnEditar);
  novaLi.appendChild(btnDeletar);

  listaTarefas.appendChild(novaLi);

  inputTarefa.value = '';
  inputTarefa.focus();
}

botaoAdicionar.addEventListener('click', adicionarTarefa);
