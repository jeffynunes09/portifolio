import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    netflix,
    costs,
    shopify,
    netflix1,
    jobit,
    tripguide,
    threejs,
    learning,
    codigoCerto,
    form,
    agency,
    jnNews,
    karol,
    mercado,
    gerador,
    codigoCerto1
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalhos",
    },
    {
      id: "exp",
      title: "Experiencia",
    },
    {
      id: "techs",
      title: "Tecnologias",
    },

  ];
  
  const services = [
    {
      title: " React JS | Mongo DB | Node JS | Express JS ",
      icon: web,
    },
    
    {
      title: "Python | Flask | SQLAlachemy | MySQL",
      icon: backend,
    },
    {
      title: "Nest JS | TypeOrm | Postgres" ,
      icon: creator,
    },
    {
      title: "React Native | Next Js| Expo |  ",
      icon: web,
    },
    {
      title: "Styled Components | Tailwind | CSS ",
      icon: web,
    },

   
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor Fullstack",
      company_name: "Código Certo Coders",
      icon: codigoCerto1,
      iconBg: "#111",
      date: "Julho 2024",
      points: [
        "Habilidades em criar interfaces de usuário responsivas com React",
        " Desenvolver APIs RESTful com Node.js e Express,Nest JS com TypeORM e gerenciar bancos de dados MongoDB e e PostgreSQL .",
        "Participação em reuniões de planejamento e discussão de requisitos."
      ],
    },
  
    {
      title: "Faculdade UniAmerica",
      company_name: "Análise e Desenvolvimento de Sistemas",
      icon: learning,
      iconBg: "#red",
      date: "Abril de 2022",
      points: [
        "Com destaque no MEC e aulas 100% online, você aprende a criar softwares e apps, gerenciar banco de dados, manjar de BI e Big Data e muito mais pra voar na carreira. Vem conhecer:",
        "UniAmerica Faculdade"
        
      ],
    },
  
    {
      title: "Ingles Extremo ",
      company_name: "Do zero a fluência",
      icon: learning,
      iconBg: "#red",
      date: "Maio de 2022",
      points: [
        "Curso de Ingles feito em 2021  - Professor Paulo - Udemy",
        "17 horas",
        
      ],
    },
    {
      title: "Ingles Rápido ",
      company_name: "Fluêcia sem enrolação",
      icon: learning,
      iconBg: "#red",
      date: "Maio de 2022",
      points: [
        "Curso de Ingles feito em 2024  - Professor Marcus Vinicius - Udemy",
        "50 horas"
      ],
    },
  
    {
      title: "Curso React JS",
      company_name: "Hora de Codar",
      icon: reactjs,
      iconBg: "#red",
      date: "Março de 2023",
      points: [
        "O curso é projetado para ensinar os fundamentos e práticas avançadas do desenvolvimento de interfaces de usuário dinâmicas e responsivas utilizando a biblioteca React. Este curso é ideal para desenvolvedores que desejam aprimorar suas habilidades em front-end e criar aplicações web modernas e eficientes.",
      ],
    },
    {
      title: "Curso MERN ThiCode",
      company_name: "MERN Stack",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Janeiro de 2024",
      points: [
        "O curso Desenvolvimento Full Stack com MERN: Criação de um Portal de Notícias é um programa abrangente que capacita os alunos a dominarem as tecnologias MongoDB, Express.js, React e Node.js (MERN). Este curso é ideal para desenvolvedores que desejam se tornar proficientes no desenvolvimento full stack e construir aplicações web robustas e escaláveis. O curso culmina com um projeto prático onde os alunos criarão um portal de notícias completo.",
      ],
    },


  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Trilha Codigo Certo",
      description:
        "Este projeto tem como objetivo desenvolver uma aplicação web completa para gerenciamento de projetos, juntamente com um servidor back-end. A aplicação web permitirá aos usuários listar, cadastrar,editar e excluir projetos. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "mongo",
          color: "pink-text-gradient",
        },
      ],
      image: codigoCerto,
      source_code_link: "https://github.com/jeffynunes09/TrilhaFullStackJR-JUN15",
      link: "https://trilha-codigo-certo-frontend.vercel.app/",
    },
    {
      name: "API PYTHON FLASK SQLALCHEMY",
      description:
        "API desenvolvida usando Python, MySQL, Flask e SQLAlchemy. Este projeto demonstra minhas habilidades em desenvolvimento backend e gerenciamento de banco de dados, além de um toque de design frontend.Principais Recursos Backend: Desenvolvido com Flask e SQLAlchemy, a API se conecta a um banco de dados MySQL com duas tabelas: uma para produtos e outra para categorias.Banco de Dados: Utiliza MySQL para um armazenamento. SQLAlchemy para simplificar as interações com o banco de dados. Frontend: Uma página simples, mas funcional, em HTML e JavaScript que busca e exibe dados da API, imitando o design e a funcionalidade do Mercado Livre."
        ,
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "myswl",
          color: "pink-text-gradient",
        },
      ],
      image: mercado,
      source_code_link: "https://github.com/jeffynunes09/api-flask-SQLAlchemy",
      link: "https://github.com/jeffynunes09/api-flask-SQLAlchemy",
    },
    {
      name: "Karol Personal",
      description:
        "Landing page. Karol é uma profissional dedicada e apaixonada por ajudar seus clientes a alcançarem seus objetivos de saúde e bem-estar. Com anos de experiência na área de fitness, Karol oferece um serviço personalizado e focado nas necessidades individuais de cada pessoa.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: karol,
      source_code_link: "https://projeto-karol-personal.vercel.app/",
      link: "https://projeto-karol-personal.vercel.app/",
    },
    {
      name: "Projeto JN News",
      description:'JN News é um portal de notícias onde os usuários podem se cadastrar, fazer login e acessar conteúdos exclusivos. O projeto ainda está em desenvolvimento e algumas funcionalidades adicionais, como inserção de comentários, likes nas postagens e edição do perfil do usuário, estão em progresso.',
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: jnNews,
      source_code_link: "https://github.com/jeffynunes09/jnNews",
      link:"https://jn-news-6bnej658j-jeffersons-projects-a8e3c90e.vercel.app/"
    },
    {
      name: "API REST",
      description:
        "API RESTful com Node.js e MongoDB | CRUD com Node, Express e Mongoose. O objetivo é criar um sistema para disponibilizar uma lista com as pessoas cadastradas no banco de dados.",
      tags: [
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jeffynunes09/API-RESTful",
      link:"https://github.com/jeffynunes09/API-RESTful"
    },
    {
      name: "WEB AGENCY DEV",
      description:
        "Projeto da pagina inicial de uma empresa de contratação de Devs fictícia. Feita em Typscript e Next JS , estilizada com Tailwind. Usando a lib AOS para efeitos de animação do conteúdo da pagina. Conta também com uma pagina de login e cadastro com validação de dados",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "aos",
          color: "pink-text-gradient",
        },
      ],
      image: agency,
      source_code_link: "https://web-agency-beta.vercel.app/",
      link:"https://web-agency-beta.vercel.app/"
    },
    
    
    {
      name: "Gerador de Senhas",
      description:
      " Descrição do Projeto: Gerador de Senhas o Gerador de Senhas é uma aplicação mobile desenvolvida com React Native e Expo, projetada para criar e armazenar senhas seguras de forma eficiente. Este projeto combina uma interface intuitiva com funcionalidades essenciais de segurança, permitindo que os usuários gerem e gerenciem suas senhas com facilidade.Funcionalidades Principais:Geração de Senhas Seguras: O aplicativo permite criar senhas complexas e personalizáveis, garantindo maior segurança para suas contas.Armazenamento e Gerenciamento de Senhas: As senhas geradas podem ser salvas e visualizadas em uma página dedicada, facilitando o acesso e a organização.Interface Intuitiva: Navegação fluida e design amigável, proporcionando uma experiência de usuário agradável.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: gerador,
      source_code_link: "https://github.com/jeffynunes09/first-project-react-native",
      link: "https://github.com/jeffynunes09/first-project-react-native",
    },
    {
      name: "Formulário Newsletter",
      description:
       "Este foi o projeto que aprendi no YouTube do Hora de codar com o professor Matheus Battisti É um formulário feito em Typescript ultilizando as tecnologias de Tailwind para estilização. O objetivo é criar um sistema para disponibilizar um formulário de cadastro com validações de dados.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: form,
      source_code_link: "https://github.com/jeffynunes09/form-tailwind-typescript-react",
      link: "https://form-tailwind-typescript-react.vercel.app/",
    },
    {
      name: "API REST JWT",
      description:
        "O projeto consiste em uma API REST feito em Node JS, express e utilizando o MongoDB Atlas. São 7 operações, sendo uma de cadastro de usuário, outra de autenticação com token, usando JWT.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jeffynunes09/API-MONGO-EXPRESS",
      link:"https://github.com/jeffynunes09/API-MONGO-EXPRESS"
    },
    {
      name: "Projeto Portifólio",
      description:
       "Este foi meu primeiro site desenvolvido para portifólio, onde utilizei Sass, React e typed para estilização",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "typed",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/jeffynunes09/portifolio-01",
      link: "https://my-app-jeffynunes09-jeffersons-projects-a8e3c90e.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
