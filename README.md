# multiple-dbs-docker-compose

Projeto de exemplo para testar acesso a multiplos bancos Postgres usando Node.js e TypeScript.

## Tecnologias

- Node.js (versao definida em `.nvmrc`)
- TypeScript
- pg (cliente Postgres)
- tsx (execucao em desenvolvimento)
- Docker e Docker Compose (Postgres)

## Configuracao de ambiente

1. Use a versao do Node definida no projeto:
   ```bash
   nvm use
   ```

2. Copie o arquivo de exemplo e ajuste se necessario:
   ```bash
   cp .env.example .env
   ```

## Subindo o banco com Docker

Suba o Postgres com o Compose:

```bash
docker-compose up -d
```

Isso cria os bancos `database_one`, `database_two` e `database_three`.

## Executando em desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build e execucao em producao

```bash
pnpm install
pnpm build
pnpm start
```
