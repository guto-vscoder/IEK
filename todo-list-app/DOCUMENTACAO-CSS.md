# Documentação — style.css

Guia completo de cada bloco CSS implementado na aplicação de Lista de Tarefas.

---

## 📦 1. Container Principal (#app)

**Linhas: 6-14**

```css
#app {
  max-width: 600px;
  width: 90%;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Instruções:**

- `max-width: 600px` — Limita a largura máxima do container para evitar uma interface muito larga em telas grandes
- `width: 90%` — Ocupa 90% da largura da tela, adaptando-se a diferentes dispositivos
- `margin: 40px auto` — Centraliza o container com margem vertical de 40px
- `padding: 30px` — Cria espaçamento interno de 30px em todos os lados
- `background-color: #ffffff` — Fundo branco para contraste com a página
- `border-radius: 8px` — Cantos arredondados para design moderno
- `box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)` — Sombra sutil para profundidade visual
- `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` — Fonte moderna com fallbacks

---

## 🎯 2. Título (h1)

**Linhas: 16-23**

```css
h1 {
  text-align: center;
  color: #333333;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

**Instruções:**

- `text-align: center` — Centraliza o texto do título
- `color: #333333` — Cor cinzenta escura para melhor legibilidade
- `margin-top: 0` — Remove margem superior padrão
- `margin-bottom: 30px` — Cria espaço abaixo do título
- `font-size: 28px` — Tamanho grande para destaque
- `font-weight: 600` — Peso semi-bold para ênfase
- `letter-spacing: 0.5px` — Espaçamento entre letras para elegância

---

## 📝 3. Container de Entrada (#input-container)

**Linhas: 25-28**

```css
#input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}
```

**Instruções:**

- `display: flex` — Usa flexbox para alinhar input e botão horizontalmente
- `gap: 10px` — Espaçamento de 10px entre o input e o botão
- `margin-bottom: 25px` — Espaço abaixo do container de entrada

---

## ⌨️ 4. Campo de Entrada (#tarefa-input)

**Linhas: 30-39**

```css
#tarefa-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.3s ease;
}
```

**Instruções:**

- `flex: 1` — O input ocupa todo espaço disponível restante do container
- `padding: 12px 15px` — Preenchimento interno para conforto de digitação
- `border: 2px solid #e0e0e0` — Borda cinzenta clara de 2px
- `border-radius: 6px` — Cantos suavemente arredondados
- `font-size: 16px` — Tamanho de fonte legível
- `font-family: inherit` — Herda a fonte do elemento pai
- `transition: border-color 0.3s ease` — Transição suave de cor ao focar

### Estado de Foco (#tarefa-input:focus)

**Linhas: 41-45**

```css
#tarefa-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}
```

**Instruções:**

- `outline: none` — Remove o contorno padrão do navegador
- `border-color: #4CAF50` — Muda a borda para verde ao focar
- `box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1)` — Adiciona sombra verde sutil para feedback visual

---

## 🔘 5. Botão Adicionar (#adicionar-btn)

**Linhas: 47-58**

```css
#adicionar-btn {
  padding: 12px 25px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}
```

**Instruções:**

- `padding: 12px 25px` — Preenchimento que torna o botão confortável para clicar
- `background-color: #4CAF50` — Verde moderno para ação positiva
- `color: white` — Texto branco para contraste
- `border: none` — Remove borda padrão
- `border-radius: 6px` — Cantos arredondados
- `font-size: 16px` — Tamanho legível
- `font-weight: 600` — Texto em negrito
- `cursor: pointer` — Muda o cursor para indicar que é clicável
- `transition: background-color 0.3s ease, transform 0.1s ease` — Transições suaves para hover e clique

### Estado Hover (#adicionar-btn:hover)

**Linhas: 60-61**

```css
#adicionar-btn:hover {
  background-color: #45a049;
}
```

**Instruções:**

- `background-color: #45a049` — Verde mais escuro ao passar o mouse para feedback visual

### Estado Ativo (#adicionar-btn:active)

**Linhas: 63-65**

```css
#adicionar-btn:active {
  transform: scale(0.98);
}
```

**Instruções:**

- `transform: scale(0.98)` — Reduz o tamanho ligeiramente ao clicar, simulando um efeito de pressão

---

## 📋 6. Lista de Tarefas (#lista-tarefas)

**Linhas: 67-70**

```css
#lista-tarefas {
  list-style: none;
  padding: 0;
  margin: 0;
}
```

**Instruções:**

- `list-style: none` — Remove os bullets padrão da lista
- `padding: 0` — Remove preenchimento padrão
- `margin: 0` — Remove margem padrão

---

## 📌 7. Itens da Lista (#lista-tarefas li)

**Linhas: 72-84**

```css
#lista-tarefas li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-left: 4px solid #4CAF50;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
```

**Instruções:**

- `display: flex` — Usa flexbox para organizar texto e botões horizontalmente
- `align-items: center` — Alinha verticalmente o conteúdo ao centro
- `justify-content: space-between` — Distribui o espaço entre texto e botões
- `padding: 15px 15px` — Espaçamento interno confortável
- `margin-bottom: 10px` — Espaço entre os itens
- `background-color: #f9f9f9` — Fundo cinzento claro
- `border-left: 4px solid #4CAF50` — Barra verde à esquerda para destaque
- `border-radius: 4px` — Cantos levemente arredondados
- `transition: background-color 0.2s ease, transform 0.2s ease` — Transições suaves

### Estado Hover (#lista-tarefas li:hover)

**Linhas: 86-89**

```css
#lista-tarefas li:hover {
  background-color: #f0f0f0;
  transform: translateX(5px);
}
```

**Instruções:**

- `background-color: #f0f0f0` — Fundo mais escuro ao passar o mouse
- `transform: translateX(5px)` — Move o item 5px para a direita, criando efeito visual

### Texto do Item (#lista-tarefas span)

**Linhas: 91-96**

```css
#lista-tarefas span {
  flex: 1;
  color: #333333;
  font-size: 16px;
  word-break: break-word;
}
```

**Instruções:**

- `flex: 1` — O texto ocupa todo espaço disponível
- `color: #333333` — Cor cinzenta escura
- `font-size: 16px` — Tamanho legível
- `word-break: break-word` — Quebra palavras longas para não exceder a largura

---

## ✏️ 8. Botões de Ação (Editar e Deletar)

**Linhas: 98-107**

```css
.btn-editar,
.btn-deletar {
  padding: 8px 14px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}
```

**Instruções:**

- `padding: 8px 14px` — Preenchimento compacto para botões pequenos
- `margin-left: 8px` — Espaço à esquerda do botão
- `border: none` — Remove borda padrão
- `border-radius: 4px` — Cantos levemente arredondados
- `font-size: 14px` — Tamanho menor que o botão principal
- `font-weight: 500` — Peso medium
- `cursor: pointer` — Indica que é clicável
- `transition: background-color 0.3s ease, transform 0.1s ease` — Transições suaves

### Botão Editar (.btn-editar)

**Linhas: 109-116**

```css
.btn-editar {
  background-color: #2196F3;
  color: white;
}

.btn-editar:hover {
  background-color: #0b7dda;
}

.btn-editar:active {
  transform: scale(0.95);
}
```

**Instruções:**

- `background-color: #2196F3` — Azul para indicar ação de edição
- `color: white` — Texto branco
- **Hover:** Azul mais escuro (#0b7dda)
- **Ativo:** Reduz para 95% do tamanho

### Botão Deletar (.btn-deletar)

**Linhas: 118-125**

```css
.btn-deletar {
  background-color: #f44336;
  color: white;
}

.btn-deletar:hover {
  background-color: #da190b;
}

.btn-deletar:active {
  transform: scale(0.95);
}
```

**Instruções:**

- `background-color: #f44336` — Vermelho para indicar ação destrutiva
- `color: white` — Texto branco
- **Hover:** Vermelho mais escuro (#da190b)
- **Ativo:** Reduz para 95% do tamanho

---

## 📱 9. Responsividade — Tablets (até 768px)

**Linhas: 127-182**

```css
@media (max-width: 768px) {
  /* Ajustes para tablets */
}
```

**Blocos e instruções:**

### Container #app

- `width: 95%` — Aumenta margem lateral
- `margin: 20px auto` — Reduz margem vertical
- `padding: 20px` — Reduz espaçamento interno

### Título h1

- `font-size: 24px` — Reduz de 28px para 24px
- `margin-bottom: 20px` — Reduz espaço inferior

### Container de entrada #input-container

- `flex-direction: column` — Muda de horizontal para vertical
- `gap: 8px` — Reduz espaço entre elementos

### Input #tarefa-input

- `padding: 10px 12px` — Reduz preenchimento
- `font-size: 16px` — Mantém tamanho para legibilidade

### Botão #adicionar-btn

- `padding: 10px 20px` — Reduz preenchimento
- `font-size: 14px` — Reduz tamanho
- `width: 100%` — Ocupa toda largura

### Itens da lista #lista-tarefas li

- `flex-wrap: wrap` — Permite quebra de linha
- `padding: 12px 10px` — Reduz espaçamento
- `gap: 8px` — Adiciona gap entre elementos

### Texto #lista-tarefas span

- `flex-basis: 100%` — Ocupa linha completa
- `font-size: 15px` — Reduz tamanho

### Botões de ação .btn-editar, .btn-deletar

- `flex: 1` — Ocupa espaço igual
- `min-width: 80px` — Largura mínima
- `padding: 8px 10px` — Reduz preenchimento
- `margin-left: 0` — Remove margem esquerda
- `font-size: 13px` — Reduz tamanho

---

## 📱 10. Responsividade — Smartphones (até 480px)

**Linhas: 184-238**

```css
@media (max-width: 480px) {
  /* Ajustes para smartphones */
}
```

**Blocos e instruções:**

### Container #app

- `width: 98%` — Margem horizontal mínima
- `margin: 10px auto` — Reduz margem vertical
- `padding: 15px` — Reduz espaçamento
- `border-radius: 4px` — Cantos menos arredondados

### Título h1

- `font-size: 20px` — Reduz para 20px
- `margin-bottom: 15px` — Reduz espaço inferior

### Container de entrada #input-container

- `gap: 6px` — Reduz gap para 6px

### Input #tarefa-input

- `padding: 8px 10px` — Reduz preenchimento
- `font-size: 14px` — Reduz para 14px
- `border-radius: 4px` — Cantos menores

### Botão #adicionar-btn

- `padding: 8px 15px` — Reduz preenchimento
- `font-size: 13px` — Reduz para 13px

### Itens da lista #lista-tarefas li

- `padding: 10px 8px` — Espaçamento compacto
- `border-radius: 3px` — Cantos bem pequenos

### Hover dos itens #lista-tarefas li:hover

- `transform: translateX(2px)` — Reduz movimento para 2px

### Texto #lista-tarefas span

- `font-size: 14px` — Reduz para 14px

### Botões de ação .btn-editar, .btn-deletar

- `padding: 6px 8px` — Preenchimento muito compacto
- `font-size: 12px` — Reduz para 12px
- `min-width: 70px` — Largura mínima menor

---

## 🎨 Paleta de Cores Utilizada

| Cor      | Código    | Uso                          |
|----------|-----------|------------------------------|
| Verde    | #4CAF50   | Ações positivas (adicionar)  |
| Verde    | #45a049   | Hover do botão adicionar     |
| Azul     | #2196F3   | Botão editar                 |
| Azul     | #0b7dda   | Hover do botão editar        |
| Vermelho | #f44336   | Botão deletar                |
| Vermelho | #da190b   | Hover do botão deletar       |
| Branco   | #ffffff   | Fundo principal              |
| Cinzento | #333333   | Texto principal              |
| Cinzento | #e0e0e0   | Borda de input               |
| Cinzento | #f9f9f9   | Fundo dos itens              |
| Cinzento | #f0f0f0   | Fundo hover dos itens        |

---

## 🔍 Resumo de Breakpoints

- **Desktop**: A partir de 769px — Layout padrão
- **Tablet**: Até 768px — Layout em coluna, fonte reduzida
- **Smartphone**: Até 480px — Compacto ao máximo, fontes mínimas

---

## ✨ Recursos CSS Utilizados

- **Flexbox** — Para alinhamento e distribuição de elementos
- **Media Queries** — Para responsividade
- **Transitions** — Para suavidade nas interações
- **Transform** — Para efeitos visuais (scale, translateX)
- **Box-shadow** — Para profundidade
- **Border-radius** — Para design moderno

---

**Documento criado em**: 11 de junho de 2026  
**Projeto**: TODO-LIST App  
**Arquivo**: style.css
