# 🚀 Vue 3 + TypeScript + MongoDB

Um projeto completo para praticar **Vue 3** com backend **Express.js** e banco de dados **MongoDB**.

## 🛠️ Stack Tecnológica

### Frontend
- **Vue 3** (3.5.24) - Framework JavaScript progressivo com Composition API
- **TypeScript** (5.9.3) - Tipagem estática
- **Vite** (7.2.4) - Build tool e dev server
- **Vue Router** (4.6.4) - Roteamento SPA
- **Pinia** (3.0.4) - Gerenciamento de estado
- **Vue Toastification** (2.0.0-rc.5) - Notificações toast
- **Lucide Vue Next** (0.562.0) - Ícones SVG

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** (5.2.1) - Framework web para API REST
- **MongoDB** (7.0.0) - Banco de dados NoSQL

### DevOps
- **Docker** - Containerização
- **Mongo Express** - Interface web para MongoDB

## 📋 Pré-requisitos

- **Node.js**
- **npm**
- **Docker**

## 🏃 Como Iniciar o Projeto

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Inicie os containers Docker
```bash
docker compose up -d
```

Isso iniciará:
- **MongoDB** na porta `27017`
- **Mongo Express** (interface web) na porta `8081`

### 3️⃣ Popule o banco de dados
```bash
npm run seed
```

### 4️⃣ Inicie o backend (API)
```bash
npm run server
```

### 5️⃣ Inicie o frontend (em outro terminal)
```bash
npm run dev
```

### 6️⃣ Acesse a aplicação
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Mongo Express:** [http://localhost:8081](http://localhost:8081)
  - Usuário: `admin`
  - Senha: `pass`

## 🛑 Parar o Projeto

Para parar os containers Docker:
```bash
docker compose down
```

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento (frontend) |
| `npm run server` | Inicia o backend Express.js |
| `npm run build` | Cria a build de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run seed` | Popula o banco de dados com dados iniciais |

## 🏗️ Arquitetura

```
Frontend (Vue 3 + Vite)  →  Backend (Express.js)  →  MongoDB (Docker)
     :5173                       :3000                    :27017
```

