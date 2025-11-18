## 📱 Aplicações Disponíveis (React Native)

### 🔒 Estrutura Base (Autenticação & Navegação)
Configuração inicial de um aplicativo móvel que gerencia o fluxo de **autenticação** (Login) e a **navegação principal** (Bottom Tabs).
**Mecânicas:** Navegação por `SwitchNavigator` (controla o estado Logado/Deslogado), carregamento assíncrono de fontes (`expo-font`) e estrutura de componentes modular (`LoginScreen`, `BottomTabNavigator`).
**Pasta:** `/Story`

### 🌌 Navegação Espacial (Space Navigator)
Aplicativo de astronomia com navegação sequencial entre telas usando o `StackNavigator`. Focado em visualizar recursos como **mapas estelares**, **fotos diárias** e informações sobre **naves espaciais**.
**Mecânicas:** Estrutura de navegação (`StackNavigator`), componentes de tela dedicados (`StarMap`, `DailyPic`, `SpaceCraft`) e gestão do fluxo de navegação através do `NavigationContainer`.
**Pasta:** `/Space`

### 🛰️ Rastreador Espacial (Space Tracker)
Aplicativo de monitoramento espacial que utiliza o `StackNavigator` para apresentar a **localização em tempo real da ISS** e informações sobre **meteoros**.
**Mecânicas:** Navegação por pilha (`StackNavigator`), telas dedicadas a dados de APIs espaciais (ISS e Meteoro) e interface otimizada para monitoramento de dados.
**Pasta:** `/Meteoros`

### 📚 Tela de Pesquisa de Transações (Library Search)
Componente de tela dedicado à **busca e listagem de transações** de empréstimo e devolução de livros em uma biblioteca virtual.
**Mecânicas:** Integração com **Firestore** (`db` object), busca por **ID do Livro** (`B...`) ou **ID do Estudante** (`S...`), listagem infinita com `FlatList` (`fetchMoreTransactions`) e renderização detalhada de cada transação.
**Pasta:** `/Biblioteca`