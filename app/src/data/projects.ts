import Project_1 from '../../../public/assets/project-x.png'
import Project_2 from '../../../public/assets/project-z.png'
import Project_3 from '../../../public/assets/project-y.png'


export const projects = [
    {
        title: "Eclipica - Luxuria & Poder ",
        description:
        "Aplicação full-stack com serviço de moda completo com animações suaves, design responsivo e conecttividade com mecanismo de pagamento",
        imageUrl: Project_1,
        tech: ["React", "Node.js", "TypeScript", "MongoDB", "Redux", "React Router"],
        stack: "Full-Stack",
        link: "https://ecliptica-eta.vercel.app/",
    },
    {
        title: "Prestige Motors - O Poder em Movimento ",
        description:
        "Serviço full-stack com Dashboard interativo para análise de dados com gráficos dinâmicos e filtros avançado, além de uma API RESTful para controle de veículos e clientes.",
        imageUrl: Project_2,
        tech: ["React", "Node.js", "TypeScript", "MongoDB", "Zustand", "React Router" ],
        stack: "Full-Stack",
        link: "https://prestige-motors-eta.vercel.app/",
    },
    {
        title: "Epicura - Saborees Refinados",
        description:
        "Aplicativo Web full-stack com Foco em experiência do usuário, design responsivo e conectividade com mecanismo de pagamento.",
        imageUrl: Project_3,
        tech: ["React", "Nest.js", "Typescript", "Stripe", "Redux", "Tanstack Query"],
        stack: "Full-Stack",
        link: "https://epicura-crush.vercel.app/",
    },
];
