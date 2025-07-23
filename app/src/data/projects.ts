import Project_1 from '../../../public/assets/project-x.png'
import Project_2 from '../../../public/assets/project-z.png'
import Project_3 from '../../../public/assets/project-y.png'


export const projects = [
    {
        title: "Eclipica Fashion Service",
        description:
        "Aplicação full-stack com React, Node.js e MongoDB. Interface moderna com animações suaves e design responsivo.",
        imageUrl: Project_1,
        tech: ["React", "Node.js", "TypeScript", "MongoDB", "Redux", "React Router"],
        stack: "Full-Stack",
        link: "https://ecliptica-eta.vercel.app/",
    },
    {
        title: "Prestige Motor Company ",
        description:
        "Dashboard interativo para análise de dados com gráficos dinâmicos e filtros avançados.",
        imageUrl: Project_2,
        tech: ["React", "Node.js", "TypeScript", "MongoDB", "Zustand", "React Router" ],
        stack: "Full-Stack",
        link: "https://prestige-motors-eta.vercel.app/",
    },
    {
        title: "Epicura Food Store",
        description:
        "Aplicativo mobile de e-commerce com carrinho de compras, pagamentos e notificações push.",
        imageUrl: Project_3,
        tech: ["React", "Nest.js", "Typescript", "Stripe", "Redux", "Tanstack Query"],
        stack: "Full-Stack",
        link: "https://epicura-crush.vercel.app/",
    },
];
