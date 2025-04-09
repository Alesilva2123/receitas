# 🍲 Meal Explorer App

Aplicativo mobile desenvolvido com **React Native**, **TypeScript** e **Expo**, que consome uma API pública para exibir receitas culinárias aleatórias. O usuário pode visualizar o nome, imagem, modo de preparo da receita e atualizar para uma nova receita com um clique.

---

## 📱 Funcionalidades

- Busca de receita aleatória na API [TheMealDB](https://www.themealdb.com/)
- Exibição de imagem, nome e instruções da receita
- Botão para carregar uma nova receita
- Estilização personalizada com cores suaves
- Layout responsivo com rolagem

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Navigation + Expo Router](https://expo.github.io/router/docs)

---

## 📁 Estrutura de Pastas
```
📁 .expo                  # Configurações internas do Expo
📁 types                 # Tipagens globais
│  └── router.d.ts       # Definições de tipos de rota
📁 web/cache             # Cache da aplicação web
│  └── production
│      └── favicon-48.png
📄 devices.json          # Arquivo de configuração de dispositivos
📄 README.md             # Documentação do projeto

📁 app                   # Arquivos principais da aplicação
│  ├── _layout.tsx       # Layout geral
│  ├── index.tsx         # Página inicial (exibe a receita)
│  ├── +not-found.tsx    # Tela de erro 404
│  └── (tabs)            # Abas da navegação
│      ├── _layout.tsx
│      ├── explore.tsx
│      └── index.tsx

📁 assets                # Recursos estáticos
│  ├── fonts             # Fontes personalizadas
│  └── images            # Imagens do app (se houver)

📁 components            # Componentes reutilizáveis
│  ├── __tests__         # Testes dos componentes
│  └── ui                # Componentes de interface
│      ├── Collapsible.tsx
│      ├── ExternalLink.tsx
│      ├── HapticTab.tsx
│      ├── HelloWave.tsx
│      ├── ParallaxScrollView.tsx
│      ├── ThemedText.tsx
│      └── ThemedView.tsx

📁 constants             # Constantes globais
│  └── Colors.ts         # Paleta de cores

📁 hooks                 # Hooks personalizados
│  ├── useColorScheme.ts
│  ├── useColorScheme.web.ts
│  └── useThemeColor.ts
```

---

## 🔌 Integração com a API

- URL utilizada: `https://www.themealdb.com/api/json/v1/1/random.php`
- Método: `GET`
- Biblioteca: `axios`

---

## 🛠️ Como Rodar o Projeto

1. Clone o repositório:

`git clone https://github.com/seu-usuario/seu-repositorio.git`
   
2. Instale as dependências:
```
npm install
```

3. Rode o projeto:
```
npx expo start
```

## 📌 Observações
* O projeto usa o Expo Router para navegação.

* O layout inicial é exibido via index.tsx dentro da pasta app.

* Ao iniciar, o app já carrega uma receita automaticamente.

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

Feito com 💖 por Alessandra ✨

