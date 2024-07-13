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
    karol
    
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
      title: "Typescript / Javascript / React JS / Next JS",
      icon: web,
    },
    {
      title: "Sass / Tailwind / CSS",
      icon: web,
    },
    {
      title: "Mongo DB / Express JS / Axios",
      icon: backend,
    },
    {
      title: "JWT / GIT",
      icon: creator,
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
      title: "Ingles Extremo ",
      company_name: "Do zero a fluência",
      icon: learning,
      iconBg: "#red",
      date: "Maio de 2021",
      points: [
        "Curso de Ingles feito em 2021  - Professor Paulo - Udemy",
        "17 horas",
        
      ],
    },
  
    {
      title: "Clone Neftlix ",
      company_name: "React JS",
      icon: netflix,
      iconBg: "#red",
      date: "Março de 2023",
      points: [
        "Desenvolvi um clone da pagina inical do site Netflix, utilizando React JS, uma aplição totalmente responsiva.Usei uma APi do THE MOVIE BD",
        "Projeto Frontend Finalizado.",
      ],
    },
    {
      title: "Costs",
      company_name: "React JS",
      icon: costs,
      iconBg: "#E6DEDD",
      date: "Janeiro de 2024",
      points: [
        "Um projeto feito ao final do curso de React JS, no qual desenvolvi um site que gerencia orçamentos",
        "Utilizando recursos e fundamentos essenciais para o apredizado da biblioteca",
      ],
    },
    {
      title: "Formulário Newsletter",
      company_name: "Typescript",
      icon: shopify,
      iconBg: "#383E56",
      date: "Janeiro de 2024",
      points: [
      "Um formulário feito em React,Typescript e estilizado com Tailwind",
      "Simples projeto, feito com intuito de praticar o aprendizado na liguagem,o site contém uma validação de dados,",
      ],
    },
    {
      title: "Api Rest",
      company_name: "Freelancer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Fevereiro 2024",
      points: [
        "Este foi o projeto que desenvolvi que consiste em uma API REST feito em Node JS, Express e utilizando o MongoDB Atlas.",
        "São 7 operações, sendo uma de cadastro de Usuário, outra de autenticação com token, usando JWT. O objetivo é criar um sistema para disponibilizar uma lista com as usuários cadastrados no banco de dados.",
        " Estes usuários podem cadastrar projetos e cada projeto pode conter tarefas. O sistema faz a verificação dos dados do usuários, para que ele possa cadastrar seus projetos, e retorna um erro caso o usuário não esteja cadastrado. Rotas testadas no Insominia."
      ],
    },
  
    {
      title: "Ingles Rápido ",
      company_name: "Fluêcia sem enrolação",
      icon: learning,
      iconBg: "#red",
      date: "Maio de 2024",
      points: [
        "Curso de Ingles feito em 2024  - Professor Marcus Vinicius - Udemy",
        "50 horas"
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
        "Este projeto tem como objetivo desenvolver uma aplicação web completa para gerenciamento de projetos, juntamente com um servidor back-end. A aplicação web permitirá aos usuários listar, cadastrar,editar e exlcuir proejtos ",
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
      source_code_link: "https://github.com/jeffynunes09/api-course-mern-thicode",
      link:"https://front-course-merne-thicode.vercel.app/"
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
      name: "Netflix clone",
      description:
      "Uma pagina responsiva, feita em React, utilizando a API DO THEMOVIEDB. É um projeto inicial, pretendo incrementar funcionalidades e aceito criticas ou sugestões.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: netflix1,
      source_code_link: "https://github.com/jeffynunes09/netflix-clone",
      link: "https://netflix-clone-three-alpha-78.vercel.app/",
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
