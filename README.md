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
