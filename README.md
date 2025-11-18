# ⚛️ Repositório de Aplicativos React Native

Este repositório contém uma coleção de aplicações móveis desenvolvidas utilizando **React Native** e a biblioteca **Expo**, cada uma focada em demonstrar diferentes padrões de desenvolvimento, estruturas de navegação e integração com serviços externos (como Firebase e APIs).

O objetivo deste projeto é servir como um **portfólio modular**, onde cada pasta (`/Story`, `/Space`, etc.) representa um aplicativo funcional focado em um conjunto específico de funcionalidades e desafios de desenvolvimento.

---

## 🛠️ Tecnologias Principais Utilizadas

Os projetos neste repositório compartilham um *stack* de tecnologia comum, otimizado para o desenvolvimento de aplicações móveis robustas:

* **React Native / Expo:** O framework principal para construir aplicações nativas com JavaScript.
* **React Navigation:** Biblioteca essencial para gerenciar a navegação entre telas.
    * **Tipos de Navegação:** `Stack Navigator` (pilha), `Switch Navigator` (autenticação) e `Bottom Tab Navigator` (abas inferiores).
* **Firebase / Firestore:** Utilizado para persistência de dados e consultas em tempo real (ex: `/Biblioteca`).
* **Expo-Font:** Para carregamento assíncrono e uso de fontes customizadas.
* **APIs Externas:** Simulação de consumo de dados de APIs (ex: localização da ISS, dados de meteoros).

---

## 📱 Aplicações Disponíveis (React Native)

Esta seção lista todos os aplicativos disponíveis no repositório, organizados por funcionalidade principal:

### 🔒 Estrutura Base (Autenticação & Navegação)
Configuração inicial de um aplicativo móvel que gerencia o fluxo de **autenticação** (`LoginScreen`) e a **navegação principal** (`Bottom Tabs`).
* **Mecânicas:** Navegação por `SwitchNavigator` (controla o estado Logado/Deslogado), carregamento assíncrono de fontes (`expo-font`) e estrutura de componentes modular.
* **Pasta:** `/Story`

---

### 🌌 Navegação Espacial (Space Navigator)
Aplicativo de astronomia com navegação sequencial entre telas usando o `StackNavigator`. Focado em visualizar recursos como **mapas estelares**, **fotos diárias** e informações sobre **naves espaciais**.
* **Mecânicas:** Estrutura de navegação (`StackNavigator`), componentes de tela dedicados (`StarMap`, `DailyPic`, `SpaceCraft`) e gestão do fluxo de navegação através do `NavigationContainer`.
* **Pasta:** `/Space`

---

### 🛰️ Rastreador Espacial (Space Tracker)
Aplicativo de monitoramento espacial que utiliza o `StackNavigator` para apresentar a **localização em tempo real da ISS** e informações sobre **meteoros**.
* **Mecânicas:** Navegação por pilha (`StackNavigator`), telas dedicadas a dados de APIs espaciais (ISS e Meteoro) e interface otimizada para monitoramento de dados.
* **Pasta:** `/Meteoros`

---

### 📚 Tela de Pesquisa de Transações (Library Search)
Componente de tela dedicado à **busca e listagem de transações** de empréstimo e devolução de livros em uma biblioteca virtual.
* **Mecânicas:** Integração com **Firestore** (`db` object), busca por **ID do Livro** (`B...`) ou **ID do Estudante** (`S...`), listagem infinita com `FlatList` (`fetchMoreTransactions`) e renderização detalhada de cada transação.
* **Pasta:** `/Biblioteca`