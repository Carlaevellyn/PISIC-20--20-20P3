# PISIC — Portal Integrado de Sistemas do Instituto de Computação

O **PISIC** é um projeto de aplicação web desenvolvido com o propósito de centralizar e facilitar o acesso a sistemas e serviços relacionados ao Instituto de Computação da Universidade Federal de Alagoas (UFAL).

A proposta é reunir, em um único ambiente, diferentes módulos e recursos, oferecendo uma interface de navegação organizada e adaptada aos diferentes perfis de usuários.

> **Status:** Em desenvolvimento.

## Sobre o projeto

O PISIC busca proporcionar um ambiente integrado para estudantes, professores, administradores e coordenadores, permitindo a organização e o acesso a diferentes ferramentas institucionais.

A aplicação conta com uma interface que contempla autenticação visual, cadastro de usuários, gerenciamento de perfis e um painel principal com acesso aos módulos disponíveis.

## Funcionalidades implementadas na interface

- **Login:** tela de acesso à plataforma.
- **Cadastro de usuários:** fluxo de registro com seleção de perfil.
- **Cadastro profissional:** formulário específico para professores.
- **Cadastro administrativo:** formulário para administradores e coordenadores.
- **Perfil de usuário:** apresentação de informações conforme o tipo de usuário.
- **Dashboard:** painel principal para navegação entre os sistemas.
- **Busca de sistemas:** campo de pesquisa dos módulos disponíveis.
- **Recuperação de senha:** interface para solicitação de redefinição de senha.

## Módulos do PISIC

A plataforma apresenta os seguintes módulos:

| Módulo | Descrição |
|---|---|
| Recall | Módulo previsto na plataforma |
| Key Manager | Módulo previsto na plataforma |
| PresençaQR | Módulo previsto na plataforma |
| Monic | Módulo previsto na plataforma |
| MarketIC | Módulo previsto na plataforma |
| Notific | Módulo previsto na plataforma |
| ICronograma | Módulo previsto na plataforma |

**Observação:** os módulos ainda estão em desenvolvimento e não devem ser considerados funcionalidades operacionais nesta versão.

## Tecnologias utilizadas

### Front-end
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

### Componentes e bibliotecas
- Radix UI
- Shadcn/UI
- React Query
- Recharts
- Framer Motion
- Sonner

### Back-end e ferramentas
- Node.js
- Express
- Zod
- Vitest
- Prettier
- pnpm

## Organização do projeto

```text
PISIC/
├── client/
│   ├── components/
│   │   ├── ui/
│   │   └── SearchSystems.tsx
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── global.css
│   └── main.tsx
│
├── server/
│   ├── index.ts
│   └── node-build.ts
│
├── shared/
│   └── api.ts
│
├── public/
├── package.json
├── vite.config.ts
├── vite.config.server.ts
├── tsconfig.json
└── README.md
```

## Como executar o projeto

### Pré-requisitos

- Node.js
- npm ou pnpm

### 1. Clone o repositório

```bash
git clone https://github.com/Carlaevellyn/PISIC-20--20-20P3.git
```

### 2. Acesse a pasta

```bash
cd PISIC-20--20-20P3
```

### 3. Instale as dependências

Com npm:

```bash
npm install
```

Ou com pnpm:

```bash
pnpm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Ou:

```bash
pnpm dev
```

Após iniciar, acesse o endereço local indicado pelo Vite no terminal.

## Scripts disponíveis

| Comando | Finalidade |
|---|---|
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera as versões de produção do cliente e servidor |
| `npm run build:client` | Compila a aplicação front-end |
| `npm run build:server` | Compila a aplicação do servidor |
| `npm run start` | Inicia o servidor compilado |
| `npm run test` | Executa os testes |
| `npm run typecheck` | Verifica os tipos TypeScript |

## Contexto acadêmico

Projeto desenvolvido no contexto acadêmico, com foco no desenvolvimento de uma aplicação web para integração e organização de sistemas institucionais.

## Autoria

**Carla Evellyn**

GitHub: [@Carlaevellyn](https://github.com/Carlaevellyn)

---

*Projeto em desenvolvimento. Funcionalidades, módulos e estrutura podem sofrer alterações durante sua evolução.*
