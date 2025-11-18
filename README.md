## 📱 Aplicações Disponíveis (React Native)

### 🔒 Estrutura Base (Autenticação & Navegação)
Configuração inicial de um aplicativo móvel que gerencia o fluxo de **autenticação** (Login) e a **navegação principal** (Bottom Tabs).
**Mecânicas:** Navegação por `SwitchNavigator` (controla o estado Logado/Deslogado), carregamento assíncrono de fontes (`expo-font`) e estrutura de componentes modular (`LoginScreen`, `BottomTabNavigator`).
**Pasta:** `/Story`

### 🌌 Navegação Espacial (Space Navigator)
Aplicativo de astronomia com navegação sequencial entre telas usando o `StackNavigator`. Focado em visualizar recursos como **mapas estelares**, **fotos diárias** e informações sobre **naves espaciais**.
**Mecânicas:** Estrutura de navegação (`StackNavigator`), componentes de tela dedicados (`StarMap`, `DailyPic`, `SpaceCraft`) e gestão do fluxo de navegação através do `NavigationContainer`.
**Pasta:** `/Space`