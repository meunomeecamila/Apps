# 🌌 Navegação Espacial (Space Navigator)

### Estrutura de navegação principal para um aplicativo móvel com tema de astronomia, utilizando o StackNavigator do React Navigation para gerenciar as telas sequenciais.

Este arquivo (`App.js`) define a arquitetura de navegação para o aplicativo. Ele emprega o **Stack Navigator** , que permite que o usuário navegue entre diferentes telas em uma pilha sequencial, ideal para acessar informações detalhadas a partir de uma tela inicial.

O aplicativo centraliza quatro telas principais de conteúdo espacial, todas acessíveis a partir da tela inicial (`HomeScreen`), permitindo uma experiência de usuário focada e estruturada.

---

## ✨ Características Chave da Estrutura

* **Navegação por Pilha (Stack Navigator):** O `createStackNavigator` cria uma pilha onde novas telas são colocadas no topo ao navegar, e removidas ao voltar, mantendo o histórico de navegação.
* **Componentes de Tela Dedicados:** O aplicativo possui telas especializadas para conteúdo espacial:
    * `HomeScreen`: O ponto de partida e o *hub* principal.
    * **`StarMapScreen`**: Provavelmente para mapas estelares interativos.
    * **`DailyPicScreen`**: Para exibir a imagem astronômica do dia (API APOD da NASA, por exemplo).
    * **`SpaceCraftScreen`**: Para informações sobre naves espaciais ou missões.
* **Configuração da Pilha:** A opção `screenOptions={{ headerShown: false }}` foi usada para **ocultar o cabeçalho** padrão do Stack Navigator em todas as telas, dando mais controle sobre o design da interface do usuário (UI).
* **Ponto de Entrada:** O `NavigationContainer` envolve toda a navegação, sendo essencial para gerenciar o estado da navegação.

---

## ⚙️ Tecnologias Utilizadas

* **React Native:** Framework base para desenvolvimento móvel.
* **@react-navigation/native:** Gerenciamento central do estado de navegação.
* **@react-navigation/stack:** Biblioteca específica para criar a navegação em pilha sequencial.
* **react-native-gesture-handler:** Necessário para garantir a funcionalidade de gestos (como deslizar para voltar) na navegação.