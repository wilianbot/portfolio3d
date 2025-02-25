export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Sobre',
        href: '#sobre',
    },
    {
        id: 3,
        name: 'Projetos',
        href: '#projetos',
    },
    {
        id: 4,
        name: 'Experiencia',
        href: '#experiencia'
    },
    {
        id: 5,
        name: 'Contato',
        href: '#contato',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'VANT',
        desc: 'Camera dos Vereadores.',
        subdesc:
            'Desenvolvimento de uma solução para automação da coleta e gerenciamento de dados.',
        href: '#',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Django',
                path: '/assets/django-logo-positive.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        carScale: isSmall ? 1.5 : isMobile ? 2.5 : 3.1,
        carPosition: isMobile ? [0.5, 0.15, 0] : [1.5, 0.3, 2.5],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [12, 7, -4] : isMobile ? [12, 7, 0] : isTablet ? [12, 7, 2] : [12, 7, 6],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-14, 10, 10],
        targetPosition: isSmall ? [-5, -10, -15] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'LTS',
        pos: 'Estagiario',
        duration: '2024 - Present',
        title: "Laboratório de tecnologias em software.\n" +
            "\n" +
            "Laboratório de Tecnologias em Software (LTS)\n" +
            "\n" +
            "Trabalhando em 2 projetos\n" +
            "\n" +
            "- Automatização da Coleta de Dados.\n" +
            "Desenvolvimento de soluções para automação da coleta e gerenciamento de dados utilizando Python, PostgreSQL, DBeaver, SQLAlchemy, Pydantic, Insomnia e PySide6.\n" +
            "Expansão para a web com Next.js, Django, Tailwind, PostgreSQL e ShadCN.\n" +
            "\n" +
            "- Blog do LTS.\n" +
            "Criação e manutenção do blog institucional com WordPress, Elementor e extensões adicionais, garantindo um design intuitivo e uma experiência otimizada para os usuários.\n" +
            "\n" +
            "O Notion me ajuda a manter meus projetos organizados e otimizar minha produtividade.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];