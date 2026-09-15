# Halliving

Página "em construção" do site institucional da Halliving, empresa de
tecnologia sediada no Dubai.

- **Morada:** Sheikh Zayed Road, Al Barsha 4, Dubai, EAU
- **Telefone:** 71585132801

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- Página única, sem router, com alternância de idioma **Português / Inglês**
  em `src/i18n.js`

## Desenvolvimento

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # pré-visualizar o build de produção
```

## Estrutura

```
src/
  App.jsx      # layout e lógica da página
  App.css      # estilos
  i18n.js      # traduções PT/EN e dados de contacto
  main.jsx     # ponto de entrada React
public/
  favicon.svg
```

## Deploy

Projeto ligado à Vercel (build detetado automaticamente, framework Vite),
com deploy automático a cada push para `main`.

- URL de produção: https://halliving.com
- Também acessível em: https://halliving.vercel.app
