# Projeto prático: HTML Tag Escaper

Um **HTML Tag Escaper** é uma ferramenta ou função que converte caracteres especiais do HTML, como `<`, `>` e `&`, em suas entidades de escape correspondentes. Essa conversão é útil para evitar problemas de segurança ou exibição ao lidar com código HTML dinâmico.

## Por que usar um HTML Tag Escaper?

1. **Evitar vulnerabilidades de segurança (como XSS)**:
   - Se uma aplicação permite que um usuário insira código HTML sem escapar as tags, isso pode ser explorado para injetar scripts maliciosos (Cross-Site Scripting, ou XSS).

2. **Exibir código HTML no navegador**:
   - Se você deseja exibir tags HTML como texto em uma página, sem que sejam interpretadas como código, você precisa escapar esses caracteres.

## Como funciona o escape?

Os caracteres especiais do HTML são convertidos para entidades de escape. Por exemplo:

| Caractere  | Entidade de Escape  |
|------------|---------------------|
| `<`        | `&lt;`              |
| `>`        | `&gt;`              |
| `&`        | `&amp;`             |