Cafeteria API - Sistema de Autenticação e Gestão
Esta API foi desenvolvida para otimizar o gerenciamento de uma cafeteria, com foco em reduzir erros operacionais, controlar rigorosamente o estoque e minimizar o desperdício de insumos. O sistema automatiza processos críticos, como a gestão de pedidos com fornecedores, garantindo maior eficiência logística e precisão financeira para o estabelecimento.

A arquitetura utiliza o padrão de camadas (Service Pattern) para separar a entrada de dados da lógica de negócio. Essa estrutura modular facilita a manutenção e permite que a API cresça de forma organizada. Para assegurar a integridade das informações, utilizamos a biblioteca Zod na validação de dados, enquanto a persistência é gerida pelo Prisma ORM em um banco de dados PostgreSQL hospedado no Supabase.

A segurança é prioridade, com a implementação de criptografia Bcrypt para senhas e gerenciamento de sessões via JSON Web Token (JWT). Atualmente, a API conta com o módulo de autenticação completo, servindo como a base segura para as próximas implementações de inventário e automação de vendas.
