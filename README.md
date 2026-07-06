# Advice Generator App (PWA)

## 📌 Sobre o projeto
Aplicativo web que gera conselhos aleatórios e permite tradução entre idiomas. O projeto também foi evoluído para funcionar como um **Progressive Web App (PWA)**, com suporte a instalação e funcionamento offline básico.

---

## ⚙️ Como funciona
- Ao clicar no botão, um conselho aleatório é gerado via API.
- O conselho padrão vem em português.
- O usuário pode alternar o idioma clicando nas bandeiras.
- O aplicativo pode ser instalado no dispositivo como um app nativo.
- Parte da aplicação funciona offline através de cache.

---

## 🧠 Funcionalidades
- Geração de conselhos aleatórios via API externa.
- Tradução dinâmica de conteúdo.
- Seleção de idioma (PT / ES).
- Persistência de estado da aplicação.
- Interface responsiva.
- Suporte a instalação (PWA).
- Funcionamento offline básico com Service Worker.

---

## 🛠️ Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- MyMemory Translate API
- Advice Slip API
- Service Workers (PWA)
- Cache API (offline storage)
- Web App Manifest

---

## 📦 PWA (Progressive Web App)
O projeto utiliza:
- `manifest.json` para configuração de instalação
- Service Worker para controle de cache
- Estratégia **cache-first** para arquivos estáticos
- Suporte a execução offline parcial

---

## 🎯 Objetivo
Projeto desenvolvido para praticar:
- Consumo de APIs externas
- Manipulação do DOM
- Controle de estado no frontend
- Arquitetura modular em JavaScript
- Conceitos de Progressive Web Apps (PWA)

---

## 🚀 Status do projeto
✔ Funcional  
✔ Instalável (PWA)  
✔ Offline básico  
⚠ Melhorias futuras: estratégia de cache avançada e atualização automática do Service Worker  
