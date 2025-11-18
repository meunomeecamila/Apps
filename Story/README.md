# 🔒 Estrutura Base de Aplicativo React Native (Autenticação e Navegação)

### O ponto de entrada (`App.js`) e a estrutura de navegação central para um aplicativo móvel React Native, garantindo o carregamento de fontes customizadas e a gestão do fluxo de autenticação.

Este arquivo atua como o **ponto de entrada** (`entry point`) principal do aplicativo. Ele é responsável por duas tarefas críticas antes de renderizar qualquer conteúdo da aplicação:

1.  **Carregamento de Recursos:** Assegura que todas as **fontes customizadas** (`Rajdhani_600SemiBold`) sejam carregadas de forma assíncrona.
2.  **Gestão de Fluxo:** Define a estrutura de navegação utilizando um `SwitchNavigator` para gerenciar a transição entre a tela de autenticação (`LoginScreen`) e a área principal do aplicativo (`BottomTabNavigator`).

Esta arquitetura é um padrão robusto para qualquer aplicação móvel que exija que o usuário faça login. 

---

## ✨ Características Chave da Estrutura

* **Carregamento Assíncrono de Fontes:** A classe `App` garante que a aplicação não renderize o conteúdo até que a fonte necessária (`Rajdhani_600SemiBold`) esteja completamente carregada, prevenindo erros de layout ou *flashes* de fontes padrão.
* **Gerenciamento de Estado:** Utiliza o estado interno (`fontLoaded`) para controlar o ciclo de vida da renderização, garantindo que o `AppContainer` só seja montado após a conclusão do carregamento da fonte.
* **Navegação por Switch:** O `AppSwitchNavigator` utiliza um `SwitchNavigator` do React Navigation, que é ideal para:
    * **Fluxo de Autenticação:** A principal função do `SwitchNavigator` é trocar drasticamente o conjunto de telas disponíveis. Neste caso, ele alterna entre o mundo "Não Autenticado" (`Login`) e o mundo "Autenticado" (`BottomTab`).
    * **Performance:** Ele não guarda histórico de navegação entre as rotas, o que o torna rápido e eficiente para transições de login/logout.
* **Navegação Modular:** O coração do aplicativo é o `BottomTabNavigator`, que é um componente separado, responsável por hospedar as telas principais e a navegação por abas.

---

## ⚙️ Tecnologias Utilizadas

* **React Native:** Framework base para desenvolvimento móvel.
* **react-navigation:** Biblioteca essencial para gerenciamento de navegação e transições de tela.
    * `createSwitchNavigator`, `createAppContainer`.
* **expo-font:** Utilitário para carregar fontes customizadas de forma assíncrona.
* **Google Fonts:** Utilização da fonte `Rajdhani_600SemiBold`.