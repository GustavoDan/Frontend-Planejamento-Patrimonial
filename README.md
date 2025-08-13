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

-   **Design e Navegação da Sidebar (Menu Lateral):** O design do Figma apresentava duas versões ambíguas da sidebar. Para criar uma solução robusta e escalável, optei por implementar um **modelo híbrido**, combinando as melhores características de ambos os designs e tomando as seguintes decisões de UX:
    -   **Estrutura Completa:** Foi adotada a estrutura da sidebar mais completa, com múltiplas seções (Prospects, CRM, etc.), pois ela representa um layout de aplicação mais realista e preparado para o crescimento futuro.
    -   **Menus Colapsáveis:** A seção principal, "Clientes", que contém os itens do escopo do case (Dashboard, Projeção, Histórico), foi implementada como um menu colapsável. Isso organiza a navegação e mantém a interface limpa.
    -   **Itens Desabilitados:** Todos os itens de menu que não fazem parte do escopo funcional deste case (ex: CRM, Captação, Financeiro) foram incluídos no layout, mas estão visualmente desabilitados. Isso demonstra como a aplicação completa se pareceria, sem deixar a UI "quebrada".
    -   **Navegação para a Homepage:** Esta estrutura colocou a página principal, "Clientes", como um menu colapsável. Para garantir que o usuário sempre tenha um ponto de retorno claro e acessível para a homepage, foi implementado um padrão de navegação comum: **clicar no logo principal ("Anka") no topo da sidebar sempre levará o usuário de volta à página principal.**
    -   **Perfil do Usuário:** O indicador do usuário logado foi posicionado na parte inferior da sidebar, seguindo um padrão de UX moderno e eficaz para ações de conta, esse indicador também serve para abrir um modal de login.

*   **Escopo da Distribuição de Alinhamento:** Para o card de "Alinhamento com planejamento", a distribuição percentual (`0%`, `33.33%`, etc.) é calculada com base **apenas nos clientes que possuem um planejamento ativo** (ou seja, aqueles com uma carteira e pelo menos uma meta cadastrada). Clientes sem planejamento são excluídos do denominador do cálculo percentual para garantir que a métrica reflita a saúde dos planos existentes, e não a quantidade de clientes que ainda não foram configurados.

*   **Lógica do Card "Atualização do planejamento":** Para este componente, foi feita a seguinte interpretação da lógica de negócio:

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

-   **Implementação do Combobox de Clientes e Limitações de Performance:** O componente de seleção de clientes (`Combobox`) precisa exibir a lista completa de todos os clientes. A implementação atual busca todos os clientes de uma só vez (lidando com a paginação da API em um loop no lado do cliente) ao abrir o componente.

    -   **Justificativa:** Esta abordagem foi escolhida por pragmatismo para garantir a entrega de uma funcionalidade robusta e funcional dentro do prazo do case, após encontrar complexidades na implementação de uma estratégia de "infinite scroll" com a combinação de bibliotecas de UI utilizadas.

    -   **Dívida Técnica Reconhecida:** Estou ciente de que esta abordagem de "fetch-all" não é escalável para um ambiente de produção com um grande número de clientes, pois pode causar lentidão na primeira abertura do componente e um alto consumo de memória.

    -   **Próximos Passos (Solução Ideal):** Com mais tempo, a solução ideal seria refatorar este componente para implementar um padrão de "infinite scroll" ou "virtual scrolling". Isso envolveria usar o hook `useInfiniteQuery` do TanStack Query para buscar os dados em páginas menores sob demanda, à medida que o usuário rola a lista, proporcionando uma performance muito superior.

## Configuração do Ambiente Completo (Full Stack)

Este é o repositório do **Frontend**. Para rodar a aplicação completa, você também precisará do repositório do Backend, que contém a API e o banco de dados.

**Repositório do Backend:** https://github.com/GustavoDan/API-de-Planejamento-Patrimonial

Siga os passos abaixo para configurar e rodar todo o ambiente com Docker Compose:

**1. Crie uma Pasta Principal:**
Crie uma pasta em sua máquina para abrigar ambos os projetos. Vamos chamá-la de `mfo-planner`.

```bash
mkdir mfo-planner
cd mfo-planner
```

**2. Clone os Repositórios:**
Dentro da pasta mfo-planner, clone os dois repositórios (frontend e backend).

```bash
git clone https://github.com/GustavoDan/API-de-Planejamento-Patrimonial.git
git clone https://github.com/GustavoDan/Frontend-Planejamento-Patrimonial.git
```

**3. Renomeie as Pastas (Importante):**
O docker-compose.yml espera que as pastas tenham nomes específicos. Renomeie as pastas dos repositórios clonados para frontend e backend.

```bash
mv Frontend-Planejamento-Patrimonial frontend
mv API-de-Planejamento-Patrimonial backend
```

Sua estrutura de pastas agora deve ser:

```
mfo-planner/
├── frontend/
└── backend/
```

**4. Mova o Arquivo docker-compose.yml:**
Copie (ou mova) o arquivo docker-compose.yml de dentro da pasta frontend (ou backend) para a pasta raiz mfo-planner.

```bash
mv frontend/docker-compose.yml .
```

**5. Suba os Containers:**
Agora, na pasta raiz mfo-planner, execute o Docker Compose. Ele irá construir as imagens para o frontend e o backend e iniciar todos os serviços.

```bash
docker compose up --build
```

Pronto! A aplicação estará disponível em:

-   Frontend: http://localhost:3000
-   Documentação da API (Swagger): http://localhost:3333/docs (assumindo que a porta do backend é 3333)

Para parar todos os serviços, execute docker compose down na mesma pasta.
