# Advice Generator App (PWA)

## 📌 Sobre o projeto

Aplicativo web de geração de conselhos aleatórios desenvolvido com JavaScript puro. O projeto consome APIs externas para buscar conselhos e realizar traduções, além de ter sido evoluído para um **Progressive Web App (PWA)** com instalação no dispositivo, cache de recursos e suporte offline básico.

---

## ⚙️ Como funciona

- Ao clicar no botão, um conselho aleatório é buscado através da Advice Slip API.
- O conselho pode ser traduzido utilizando a MyMemory Translate API.
- O usuário pode alternar entre português e espanhol através das bandeiras de idioma.
- O estado da aplicação é mantido para preservar preferências do usuário.
- O aplicativo pode ser instalado como um app através dos recursos de PWA.
- Arquivos estáticos são armazenados em cache para melhorar o carregamento e permitir funcionamento offline parcial.
- Requisições de API possuem tratamento específico para falhas de conexão.

---

## 🧠 Funcionalidades

- Geração de conselhos aleatórios via API externa.
- Tradução dinâmica de conteúdo.
- Seleção de idioma (PT / ES).
- Persistência do estado da aplicação.
- Interface responsiva.
- Tema claro e escuro.
- Modal de tratamento de erros.
- Loading durante requisições.
- Instalação como aplicativo (PWA).
- Cache de arquivos estáticos com Service Worker.
- Tratamento de indisponibilidade de APIs.

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Advice Slip API
- MyMemory Translate API
- Service Workers
- Cache API
- Web App Manifest
- LocalStorage

---

## 📦 PWA (Progressive Web App)

O projeto utiliza:

- `manifest.json` para configuração da instalação do aplicativo.
- Service Worker para interceptação de requisições.
- Cache API para armazenamento de recursos.
- Estratégia **Cache First** para arquivos estáticos.
- Estratégia **Network First** para APIs externas.
- Versionamento de cache para atualização de recursos.
- Funcionamento offline parcial.

---

## 🏗️ Arquitetura

O projeto foi organizado de forma modular:

- **API:** comunicação com serviços externos.
- **Controller:** controle do fluxo da aplicação.
- **State:** gerenciamento dos dados atuais.
- **UI:** renderização e interação com elementos da interface.
- **Utils:** funções auxiliares e persistência.

---

## 🎯 Objetivo

Projeto desenvolvido para praticar:

- Consumo de APIs externas.
- Tratamento de erros assíncronos.
- Manipulação do DOM.
- Controle de estado no frontend.
- Organização modular de JavaScript.
- Arquitetura de aplicações frontend.
- Desenvolvimento de Progressive Web Apps.

---

## 🚀 Status do projeto

✔ Funcional  
✔ Instalável como PWA  
✔ Service Worker implementado  
✔ Cache de arquivos estáticos funcionando  
✔ Tratamento de erros e estados de carregamento  
✔ Suporte offline básico  

Projeto concluído com foco em prática de desenvolvimento frontend moderno, consumo de APIs e implementação de recursos PWA.
