# FAC — Banco de Resoluções da Turma

Banco de resoluções de exercícios em linguagem C da disciplina de
Fundamentos de Algoritmos de Computação (FAC).

## Rodando localmente

**Pré-requisitos:** Node.js 22+

1. Instale as dependências:
   ```
   npm install
   ```
2. Copie `.env.example` para `.env.local` e preencha a variável de conexão
   com o banco (Postgres/Neon), se aplicável.
3. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```

## Build de produção

```
npm run build
npm run start
```

## Stack

- React 19 + React Router
- Vite 8
- Express (servidor + API de resoluções)
- Tailwind CSS
- Postgres (Neon) para persistência das resoluções enviadas
