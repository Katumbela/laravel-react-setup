# laravel-react-setup + tailwindcss + Docker IMAGES AND CONTAINERS
##!º Passo: Vá para Branch Master 

O repositório "laravel-react-setup" oferece um ambiente pré-configurado para iniciar projetos usando Laravel como backend e React como frontend. Ele combina a poderosa estrutura do Laravel para o desenvolvimento de aplicativos web do lado do servidor com a flexibilidade e a eficiência do React para a criação de interfaces de usuário dinâmicas e responsivas.

Este ambiente pré-configurado inclui um projeto Laravel com todas as dependências necessárias instaladas e um projeto React configurado e integrado ao Laravel. Além disso, o repositório também inclui instruções detalhadas sobre como configurar e executar o ambiente localmente.

 <img width="768" alt="image" src="https://github.com/Katumbela/laravel-react-setup/assets/88532376/1f5afe59-bb2e-444d-9a14-c5abd4179693">


---

# Laravel React  + tailwindcss Setup + Docker IMAGES AND CONTAINERS

Este repositório fornece um ambiente pré-configurado para iniciar projetos usando Laravel como backend e React como frontend junto com tailwind já configurado. Combina a poderosa estrutura do Laravel para o desenvolvimento de aplicativos web do lado do servidor com a flexibilidade e a eficiência do React para a criação de interfaces de usuário dinâmicas e responsivas.

## Como Usar

### 1. Clonar o Repositório

```
git clone https://github.com/Katumbela/laravel-react-setup.git
```

### 2. Instalar Dependências

- No diretório raiz do projeto Laravel:

  ```
  cd laravel-react-setup/app
  composer install
  ```

- No diretório raiz do projeto App:

  ```
  cd laravel-react-setup/app
  npm install
  ```

### 3. Configurar o Banco de Dados

- Configure as variáveis de ambiente necessárias para o banco de dados no arquivo `.env` no diretório `app`.
- Execute as migrações do Laravel para criar as tabelas do banco de dados:

  ```
  php artisan migrate
  ```

### 4. Executar os Serviços

- Inicie o servidor Laravel:

  ```
  cd laravel-react-setup/app
  php artisan serve
  ```

- Inicie o servidor de desenvolvimento do React:

  ```
  cd laravel-react-setup/app
  npm start
  ```

### 5. Acessar o Aplicativo

- O servidor Laravel estará em execução em `http://localhost:8000`.
- O servidor de desenvolvimento do React estará em execução em `http://localhost:3000`.
- Acesse `http://localhost:3000` no navegador para visualizar o aplicativo React integrado ao Laravel.

---

Sinta-se à vontade para personalizar o a configuração conforme necessário!
THANKS !!
### By Katumbela.
