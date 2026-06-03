# PROJETO TODO-LIST — Lista de Tarefas

> Roteiro extraído das aulas do canal **Programação Basica IEK**
> - [Aula 1 — Introdução ao Projeto](https://www.youtube.com/watch?v=O3y4ccXdWHo)
> - [Aula 2 — Criando as bases HTML 01](https://www.youtube.com/watch?v=T7hPRhzFkQQ)
> - [Aula 3 — Iniciando o JS 01](https://www.youtube.com/watch?v=M2UPSSirWg0)
> - [Aula 4 — Criando Elementos via JS 02](https://www.youtube.com/watch?v=IVgCBdVTVD0)
> - [Aula 5 — Manipulando HTML via JS (DOM) 03](https://www.youtube.com/watch?v=igGIInIvpKM)

---

## Sobre o projeto

Aplicação web completa de **lista de tarefas** desenvolvida do zero com **HTML**, **CSS** e **JavaScript**.

### Funcionalidades

- Adicionar tarefas
- Editar tarefas (alteração refletida na hora)
- Deletar tarefas

### Observação importante

No início do projeto, ao **atualizar a página**, as tarefas somem — ainda não há banco de dados nem memória persistente. Esse ajuste será feito **no final do projeto**.

### Formato das aulas

1. Assistir ao vídeo e seguir o roteiro abaixo.
2. Marcar cada item concluído (`[x]`).
3. Em paralelo, aplicar os mesmos conceitos em **outra aplicação** da sua criatividade.

---

## Estrutura do projeto

```
todo-list-app/
├── index.html
├── style.css
└── main.js
```

- [x] Criar a pasta `todo-list-app`
- [x] Criar o arquivo `index.html`
- [x] Criar o arquivo `style.css`
- [x] Criar o arquivo `main.js`

---

## HTML — Estrutura base

> Aula 2 — esqueleto da aplicação

- [x] Criar estrutura básica de HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [x] Adicionar `<meta charset="UTF-8">` (suporte a acentos e caracteres brasileiros)
- [x] Adicionar `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (responsividade em smartphone e tablet)
- [x] Configurar o título da página: **Lista de Tarefas** (aparece na aba do navegador)
- [x] Conectar o arquivo CSS: `<link rel="stylesheet" href="style.css">`

### Conteúdo da página

- [x] Adicionar `<div id="app">` — container principal da aplicação
- [x] Adicionar `<h1>` com o título **Tarefa**
- [x] Criar `<div id="input-container">` — caixa que envolve o campo de digitação
- [x] Criar `<input type="text" id="tarefa-input" placeholder="Digite uma nova tarefa...">`
- [x] Criar `<button id="adicionar-btn">Adicionar</button>` (dentro do `input-container`, ao lado do input)
- [x] Criar `<ul id="lista-tarefas">` — lista não ordenada das tarefas

### JavaScript no HTML

- [x] Conectar o arquivo JavaScript no final do `<body>`: `<script src="./main.js"></script>`

---

## CSS — Estilização

> Próximas aulas — deixar a interface organizada e agradável

- [ ] Estilizar o container `#app`
- [ ] Estilizar o título `h1`
- [ ] Estilizar `#input-container` (layout do input + botão)
- [ ] Estilizar `#tarefa-input`
- [ ] Estilizar `#adicionar-btn`
- [ ] Estilizar `#lista-tarefas` e os itens da lista
- [ ] Estilizar botões/ações de editar e deletar
- [ ] Ajustar responsividade para telas menores

---

## JavaScript — Lógica da aplicação

### Seleção de elementos (Aula 3)

> `document.getElementById('id')` — captura referência do elemento HTML pelo ID.

- [x] Selecionar `#tarefa-input` → `inputTarefa`
- [x] Selecionar `#adicionar-btn` → `botaoAdicionar`
- [x] Selecionar `#lista-tarefas` → `listaTarefas`

### Função `adicionarTarefa` — início (Aula 3)

- [x] Criar função `adicionarTarefa()`
- [x] Ler valor do input com `.value.trim()` (normaliza espaços)
- [x] Validar campo vazio com `if (textoDaTarefa === '')`
- [x] Exibir `alert('Por favor, digite uma tarefa.')` e `return` se vazio

### Função `adicionarTarefa` — criar elementos (Aula 4)

> `document.createElement('tag')` — cria elementos dinamicamente (equivalente ao HTML manual).

- [x] Criar `<li>` → `novaLi`
- [x] Criar `<span>` → `spanTexto` com `.textContent = textoDaTarefa`
- [x] Criar botão **Editar** → `btnEditar` com `.className = 'btn-editar'`
- [x] Criar botão **Deletar** → `btnDeletar` com `.className = 'btn-deletar'`

### Função `adicionarTarefa` — montar DOM (Aula 5)

> `appendChild()` — adiciona elemento filho (analogia pai/filho no HTML).

- [x] Adicionar `spanTexto`, `btnEditar` e `btnDeletar` dentro de `novaLi`
- [x] Adicionar `novaLi` dentro de `listaTarefas`
- [x] Limpar campo: `inputTarefa.value = ''`
- [x] Dar foco no input: `inputTarefa.focus()`

### Eventos

- [x] Conectar clique do botão à função `adicionarTarefa` (`addEventListener`)

> **Conceito (Aula 5):** eventos são interações do usuário (clique, focus, movimento do mouse, etc.).

### Editar tarefa

> Próxima aula — função de edição ainda não implementada.

- [ ] Criar função de editar tarefa
- [ ] Conectar botão `.btn-editar` à função de edição
- [ ] Salvar alteração e atualizar a lista na hora

### Deletar tarefa

> Próxima aula — função de deletar ainda não implementada.

- [ ] Criar função de deletar tarefa
- [ ] Conectar botão `.btn-deletar` à função de deletar
- [ ] Remover o elemento `<li>` correspondente

---

## Persistência (final do projeto)

> Ajuste mencionado na Aula 1 — tarefas não devem sumir ao atualizar a página

- [ ] Salvar tarefas em memória persistente (ex.: `localStorage`)
- [ ] Carregar tarefas salvas ao abrir a aplicação
- [ ] Atualizar o armazenamento ao adicionar, editar ou deletar

---

## Boas práticas

- Use **nomes que façam sentido** nos IDs, classes e variáveis.
- No JavaScript: **sem acento** e **sem espaço** nos nomes — use **camelCase** (`inputTarefa`, `botaoAdicionar`).
- **`div`** é tag genérica de organização — use quando fizer sentido, sem abusar.
- **`container`** = caixa — tudo no HTML é organizado em caixas.
- Conecte CSS no `<head>` e JavaScript no **final do `<body>`**.
- **`appendChild`**: relação pai → filho no DOM (ex.: `<li>` contém `<span>` e botões).

---

## Checklist geral de progresso

| Etapa                         | Status |
|------------------------------|--------|
| Estrutura                    | ✅     |
| HTML base                    | ✅     |
| JS — seleção de elementos    | ✅     |
| JS — adicionar tarefa        | ✅     |
| JS — editar / deletar        | ⬜     |
| CSS                          | ⬜     |
| Persistência                 | ⬜     |

---

## Próximo passo

Abra `todo-list-app/index.html` no navegador, teste adicionar tarefas e siga para a **próxima aula** (função de editar).

**Até a próxima aula.**
