# API Lista de Tarefas

Bem-vindo à API para gerenciamento de tarefas! Esta API permite que você crie, atualize, exclua e visualize tarefas, além de gerenciar usuários. Ela está hospedada na Vercel e pode ser acessada em [https://api-todolist-rho.vercel.app](https://api-todolist-rho.vercel.app).

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Endpoints](#endpoints)
- [Exemplos de Uso](#exemplos-de-uso)

## Recursos

Esta API oferece os seguintes recursos:

- Gerenciamento de tarefas: criar, visualizar, atualizar status e título, e excluir tarefas.
- Gerenciamento de usuários: criação, verificação e autenticação de usuários.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/estevaosantosribeiro/api-lista-de-tarefas.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o Prisma e o banco de dados conforme necessário.

4. Inicie o servidor localmente:

    ```bash
    npm start
    ```

## Endpoints

### 1. Tarefas

#### 1.1 Listar todas as tarefas de um usuário

- **URL**: `/`
- **Método**: `GET`
- **Parâmetro de Consulta**:
  - `id` (obrigatório): ID do usuário (creatorId) cujas tarefas serão listadas.
- **Descrição**: Retorna todas as tarefas de um usuário, ordenadas pelo status.
  
#### 1.2 Obter uma tarefa específica

- **URL**: `/task`
- **Método**: `GET`
- **Parâmetro de Consulta**:
  - `id` (obrigatório): ID da tarefa a ser visualizada.
- **Descrição**: Retorna uma tarefa específica com base no ID.

#### 1.3 Criar uma nova tarefa

- **URL**: `/criartarefa`
- **Método**: `GET`
- **Parâmetros de Consulta**:
  - `title` (obrigatório): Título da tarefa.
  - `id` (obrigatório): ID do usuário (creatorId) que está criando a tarefa.
- **Descrição**: Cria uma nova tarefa para o usuário especificado.

#### 1.4 Atualizar o status de uma tarefa

- **URL**: `/editartask`
- **Método**: `GET`
- **Parâmetros de Consulta**:
  - `id` (obrigatório): ID da tarefa.
  - `status` (obrigatório): Novo status da tarefa.
- **Descrição**: Atualiza o status da tarefa.

#### 1.5 Atualizar o título de uma tarefa

- **URL**: `/editartitle`
- **Método**: `GET`
- **Parâmetros de Consulta**:
  - `id` (obrigatório): ID da tarefa.
  - `title` (obrigatório): Novo título da tarefa.
- **Descrição**: Atualiza o título da tarefa.

#### 1.6 Deletar uma tarefa

- **URL**: `/deletartask`
- **Método**: `GET`
- **Parâmetro de Consulta**:
  - `id` (obrigatório): ID da tarefa a ser deletada.
- **Descrição**: Remove a tarefa especificada pelo ID.

### 2. Usuários

#### 2.1 Criar um novo usuário

- **URL**: `/criarusuario`
- **Método**: `GET`
- **Parâmetros de Consulta**:
  - `name` (obrigatório): Nome do usuário.
  - `email` (obrigatório): Email do usuário.
  - `password` (obrigatório): Senha do usuário.
- **Descrição**: Cria um novo usuário e retorna seu ID e detalhes.

#### 2.2 Verificar se um email de usuário já existe

- **URL**: `/verificarusuario`
- **Método**: `GET`
- **Parâmetro de Consulta**:
  - `email` (obrigatório): Email do usuário a ser verificado.
- **Descrição**: Verifica se o email fornecido já está registrado.

#### 2.3 Autenticar um usuário

- **URL**: `/login`
- **Método**: `GET`
- **Parâmetros de Consulta**:
  - `email` (obrigatório): Email do usuário.
  - `password` (obrigatório): Senha do usuário.
- **Descrição**: Autentica o usuário com base nas credenciais fornecidas.

## Exemplos de Uso

### Listar todas as tarefas de um usuário

```bash
curl "https://api-todolist-rho.vercel.app/?id=1"
```

### Obter uma tarefa específica

```bash
curl "https://api-todolist-rho.vercel.app/task?id=10"
```

### Criar uma nova tarefa

```bash
curl "https://api-todolist-rho.vercel.app/criartarefa?title=Estudar&creatorId=1"
```

### Atualizar o status de uma tarefa

```bash
curl "https://api-todolist-rho.vercel.app/editartask?id=10&status=concluida"
```

### Atualizar o título de uma tarefa

```bash
curl "https://api-todolist-rho.vercel.app/editartitle?id=10&title=Ler+documentação"
```

### Deletar uma tarefa

```bash
curl "https://api-todolist-rho.vercel.app/deletartask?id=10"
```

### Criar um novo usuário

```bash
curl "https://api-todolist-rho.vercel.app/criarusuario?name=Joao&email=joao@example.com&password=123456"
```

### Verificar se um email já existe

```bash
curl "https://api-todolist-rho.vercel.app/verificarusuario?email=joao@example.com"
```

### Autenticar um usuário

```bash
curl "https://api-todolist-rho.vercel.app/login?email=joao@example.com&password=123456"
```
