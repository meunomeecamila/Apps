# 🛰️ Rastreador Espacial (Space Tracker)

### Estrutura de navegação principal para um aplicativo móvel de rastreamento de dados espaciais, focando na localização da ISS e informações de meteoros, utilizando o StackNavigator do React Navigation.

Este projeto define o fluxo de navegação para um aplicativo móvel voltado para a **astronomia observacional** e **monitoramento espacial**. Ele utiliza o **Stack Navigator**  para organizar o acesso a três telas principais de conteúdo.

O aplicativo centraliza informações dinâmicas, como a posição atual da **Estação Espacial Internacional (ISS)**, e dados sobre **meteoros**, sugerindo o uso de APIs externas para fornecer informações em tempo real ou atualizadas.

---

## ✨ Características Chave da Estrutura

* **Navegação por Pilha (Stack Navigator):** Utiliza o `createStackNavigator` para empilhar telas sequencialmente, permitindo uma navegação fácil e estruturada a partir da tela inicial.
* **Telas de Monitoramento:** O aplicativo possui telas dedicadas a dados científicos:
    * **`IssLocationScreen`**: A tela principal para rastrear a **localização em tempo real da Estação Espacial Internacional (ISS)**, provávelmente mostrando as coordenadas e a trajetória em um mapa.
    * **`Meteore`**: A tela dedicada a exibir informações sobre **meteoros**, como riscos de impacto, listas de avistamentos ou dados de *near-Earth objects (NEOs)*.
    * `HomeScreen`: O menu principal ou *dashboard* de acesso às funcionalidades.
* **Configuração de Estilo:** A opção `screenOptions ={{ headerShown:false }}` é configurada para garantir que a barra de cabeçalho padrão seja ocultada, permitindo um design *full-screen* e customizado.
* **Ponto de Entrada:** O `NavigationContainer` envolve toda a estrutura, gerenciando o estado da navegação.

---

## ⚙️ Tecnologias Utilizadas

* **React Native:** Framework base para desenvolvimento móvel.
* **@react-navigation/native:** Gerenciamento central do estado de navegação.
* **@react-navigation/stack:** Biblioteca para criar a navegação em pilha sequencial.
* **react-native-gesture-handler:** Necessário para garantir a funcionalidade de gestos na navegação.