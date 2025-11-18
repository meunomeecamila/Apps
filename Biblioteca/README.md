# 📚 Tela de Pesquisa de Transações (Library Search Screen)

### Componente de tela do React Native para buscar, filtrar e exibir o histórico de transações (empréstimo e devolução) de uma biblioteca virtual, integrado ao Firebase Firestore.

O componente `SearchScreen` é a interface principal para que os usuários (bibliotecários ou estudantes) **pesquisem e revisem o histórico de transações** de livros. Ele se conecta a uma coleção **"transação"** em um banco de dados **Firestore** (`db`) e gerencia a exibição eficiente dos resultados.

A tela utiliza um **campo de entrada** de texto para pesquisa e um componente **`FlatList`** para renderizar a lista de transações, incluindo um mecanismo de **listagem infinita** para carregar mais dados sob demanda. 

---

## ✨ Características Chave da Tela

* **Integração com Firestore:** O componente se conecta ao banco de dados (`db`) para buscar e filtrar documentos na coleção `"transação"`.
* **Mecanismo de Busca Inteligente (`handleSearch`):** A busca é diferenciada com base no primeiro caractere do texto inserido:
    * Se começar com **"B"** (Book/Livro): Pesquisa por `book_id`.
    * Se começar com **"S"** (Student/Estudante): Pesquisa por `student_id`.
* **Listagem Infinita (`fetchMoreTransactions`):** Implementa o recurso `onEndReached` do `FlatList` para buscar mais dados (limitado a 10) após o usuário rolar até o final da lista. Utiliza o **cursor** `lastVisibleTransaction` e a função `startAfter` do Firestore para otimizar a paginação.
* **Renderização Detalhada (`renderItem`):** Cada item na lista exibe informações cruciais da transação, incluindo:
    * Nome e ID do Livro.
    * Tipo de transação (**issued/returned**), colorido em verde ou azul.
    * Nome do estudante.
    * Data da transação formatada.
* **Componentes de UI:** Utiliza componentes do React Native Elements (`ListItem`, `Icon`) para criar uma interface de lista limpa e informativa.

---

## ⚙️ Tecnologias Utilizadas

* **React Native:** Framework base para desenvolvimento móvel.
* **Firebase Firestore (via `db`):** Banco de dados NoSQL para armazenar e consultar a coleção de transações.
* **`FlatList`:** Componente essencial para renderizar longas listas de forma performática e implementar a listagem infinita.
* **React Native Elements:** Biblioteca de componentes para criar a lista (`ListItem`, `Icon`).
* **JavaScript (Lógica de Busca):** Utilização de `where` e `startAfter` nas consultas do Firestore e lógica de *parsing* (`toUpperCase`, `split`) para determinar o tipo de pesquisa.