# Frontend - Planejamento Patrimonial

Este repositório contém a interface do usuário para a ferramenta de planejamento financeiro, desenvolvida com **Next.js 14 (App Router)** e **TypeScript**.

O objetivo é criar uma experiência de usuário fluida e reativa, replicando fielmente o design do Figma e consumindo a API do backend para exibir e manipular dados.

## Arquitetura e Decisões Técnicas

A arquitetura do frontend foi projetada para ser moderna, escalável e de fácil manutenção, utilizando um conjunto de bibliotecas padrão da indústria.

-   **Framework:** **Next.js 14 (App Router)** foi escolhido por seu ecossistema robusto, renderização otimizada (Server e Client Components) e roteamento baseado em arquivos, o que simplifica a organização do projeto.

-   **UI e Estilização:**

    -   **ShadCN/UI:** Utilizado como a biblioteca de componentes base. Sua abordagem de "copiar e colar" nos dá controle total sobre o código dos componentes, facilitando a customização para replicar o design do Figma.
    -   **Tailwind CSS:** Configurado pelo ShadCN, é usado para toda a estilização, permitindo a criação rápida de interfaces complexas e responsivas através de classes utilitárias.
    -   **Dark Mode por Padrão:** A aplicação é configurada para renderizar em "dark mode" por padrão, conforme a especificação do design.

-   **Gerenciamento de Estado do Servidor:**

    -   **TanStack Query (React Query):** É a espinha dorsal do gerenciamento de dados. Todas as interações com a API do backend (buscas, criações, atualizações) são gerenciadas pelo TanStack Query.
    -   **Benefícios:** Ele nos oferece caching, invalidação automática de queries após mutações, tratamento de estados de loading e erro, e uma performance muito superior ao `useEffect` tradicional para data-fetching.

-   **Gerenciamento de Estado Global (Autenticação):**

    -   **React Context API (`AuthContext`):** Um contexto de autenticação simples e robusto foi criado para gerenciar o estado global de login (token e status de autenticação). Isso permite que qualquer componente na aplicação saiba se o usuário está logado e acesse o token para chamadas à API.
    -   **`localStorage`:** O token JWT é persistido no `localStorage` do navegador para manter a sessão do usuário ativa entre recarregamentos da página.

-   **Comunicação com a API:**

    -   **Axios:** Utilizado para todas as chamadas HTTP. Uma instância global do Axios foi configurada com um **interceptor** que anexa automaticamente o token JWT de autenticação a todas as requisições para endpoints protegidos.

-   **Formulários:**

    -   **React Hook Form:** Escolhido para o gerenciamento de estado de formulários complexos. Ele oferece excelente performance ao evitar re-renderizações desnecessárias.
    -   **Zod:** Integrado com o React Hook Form através do `@hookform/resolvers`. Todos os formulários usam schemas Zod para validação de dados do lado do cliente, garantindo que apenas dados válidos sejam enviados para a API e fornecendo feedback de erro instantâneo para o usuário.

-   **Agregação de Dados no Lado do Cliente (Client-Side Aggregation):** Para funcionalidades de dashboard que exigem dados agregados de toda a base de clientes (como a "Distribuição de Alinhamento" e as "Estatísticas de Seguro por Perfil"), a lógica de busca e cálculo é realizada no frontend.

    -   **Implementação:** Esta abordagem envolve buscar as listas completas de entidades (ex: todos os clientes e seus respectivos seguros) e depois processar esses dados no navegador para gerar os insights.
    -   **Trade-offs Reconhecidos:** Estou ciente de que esta solução acarreta um problema de performance **"N+1 queries"**. Em um ambiente de produção, a solução ideal e mais performática seria criar endpoints de agregação dedicados no backend (ex: `/clients/insurance-stats`) que realizariam esses cálculos de forma eficiente no servidor, retornando os dados já consolidados em uma única chamada. A escolha pela implementação no frontend foi uma decisão pragmática para otimizar o tempo de entrega dentro do escopo do case.

-   **Manutenção da Altura da Tabela na Paginação (UX):** Implementei na tabela de "Atualização do Planejamento" e outras listas paginadas um sistema de "linhas de placeholder". Isso garante que a tabela mantenha uma altura consistente, mesmo quando a última página tem menos itens que o total por página. Esta decisão previne "saltos" no layout (layout shifts) durante a navegação, proporcionando uma experiência de usuário mais suave e profissional.

## Suposições e Esclarecimentos

-   **Escopo da Distribuição de Alinhamento:** Para o card de "Alinhamento com planejamento", a distribuição percentual (`0%`, `33.33%`, etc.) é calculada com base **apenas nos clientes que possuem um planejamento ativo** (ou seja, aqueles com uma carteira e pelo menos uma meta cadastrada). Clientes sem planejamento são excluídos do denominador do cálculo percentual para garantir que a métrica reflita a saúde dos planos existentes, e não a quantidade de clientes que ainda não foram configurados.

-   **Lógica do Card "Atualização do planejamento":** Para este componente, foi feita a seguinte interpretação da lógica de negócio:

    -   A "Última atualização" refere-se ao campo `updatedAt` da `Wallet` do cliente.
    -   A API foi otimizada para retornar esta informação na rota de listagem de clientes (`GET /clients`) para evitar múltiplas chamadas (problema N+1).
    -   A categorização de cores foi definida da seguinte forma: **Verde** (atualizado nos últimos 3 meses), **Laranja** (atualizado entre 3-6 meses) e **Vermelho** (desatualizado há mais de 6 meses).
    -   A notação `+/-` no Figma foi interpretada como um placeholder estilístico, e a lógica implementada foca na duração do tempo passado.

-   **Interpretação da Lógica do Card "Perfis com seguro":** Esta funcionalidade exigiu a interpretação de um design visual vago e a criação de regras de negócio para torná-la funcional. As seguintes decisões foram tomadas:
    -   **Definição da Métrica:** A porcentagem exibida (ex: 60%) foi interpretada como a **penetração de seguros dentro de um perfil de cliente específico**. A fórmula é: `(número de clientes no perfil com seguro / número total de clientes no perfil) * 100`.
    -   **Categorização de Perfil a partir de Dados JSON:** A categorização dos clientes foi implementada no frontend, processando o campo `familyProfile` (que é um JSON) para cada cliente. As regras de negócio definidas foram:
        -   **"Com filho":** Clientes cujo `familyProfile` contém pelo menos um membro com a relação `CHILD`.
        -   **"Solteiro":** Clientes com o campo `familyProfile` nulo, vazio ou que não contenha um membro com a relação `CHILD`. Esta é uma simplificação para o escopo do case.
        -   **"Com dependentes":** Por ser uma categoria ambígua e potencialmente redundante com "Com filho", foi assumido que ela deveria exibir **os mesmos dados** da categoria "Com filho".
