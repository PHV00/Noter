A linguagem escolhida foi o framework next js, por conta de alta demanda na empresa onde trabalho, além de ser bem otimizado para sistemas SSR(cujo é o escopo desse software)

A aplicação consiste em um sistema de anotação online, onde terá sistema de autenticação, e um sistema de venda dessas anotações(caso dé tempo), onde ele se propoem no mvp um crud de notes e alguma transação simples entre usuarios(caso de tempo)

Requisitos Noter

O software consiste em uma aplicação web voltada a armazenar anotações do usuário, além de permitir a troca de textos pelos mesmos

O software será desenvolvido na arquitetura monolítica, pois não terá um numero elevado de requisições e processo, além de precisar ter um deploy simplificado

Não funcionais
O sistema deve conter somente autenticação pelos provedores de login da google e GitHub,
O sistema deve ser desenvolvido em nextjs, na configuração de uma aplicação SSR adjunto da orm prisma
e da biblioteca de autenticação auth.js,
O banco de dados deve ser construído em mysql(mariaDb),
O sistema deve utilizar a configuração de sessão do auth.js,
A aplicação deve ser colocada em ambiente de produção através do Microsoft Azure
A aplicação deve conter um sistema de ci/cd
A aplicação deve ter controle de versionamento utilizando-se do GitHub
O software deve utilizar a biblioteca tailwind

Funcionais
O sistema deve permitir a criação, inserção, edição e exclusão de textos,
O sistema deve permitir a visualização de todos os textos salvos pelo usuário,
O sistema deve ser capaz de trocar textos entre os usuários,
O sistema deve ter a capacidade de salvar textos no frontend localmente,
O sistema deve ter um histórico de trocas

Planejamento de atividades

Criação do frontend, próximos 15 dias
Criação do backend/Banco de dados, após isso mais 15 dias
Criação de Ci/Cd, após isso mais 15 dias
Criação do ambiente azure após isso mais 15 dias
