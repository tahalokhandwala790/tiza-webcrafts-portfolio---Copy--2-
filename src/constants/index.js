import {
    meta,
    shopify,
    starbucks,
    tesla
} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [{
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [

    {
        title: "Mastering the Basics",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Junior Web Developer -- 2022 - 2023",
        points: [
            "Mastered HTML: Structured and organized web content effectively.",
            "Expert in CSS: Styled and enhanced the appearance of web pages.",
            "Proficient in JavaScript: Added interactivity and dynamic features to applications.",
            "Backend Basics: Gained understanding of handling messages and contact forms.",
            "Seamless Data Delivery: Ensured efficient data handling between front-end and back-end.",
        ],
    },
    {
        title: "Advanced Front-End Development",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Front-End Developer -- 2023 - 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Transitioned to React: Advanced front-end development skills.",
            "Reusable Components: Learned to build efficient, reusable components.",
            "State Management: Mastered efficient state management.",
            "React Router: Implemented smooth navigation.",
            "Enhanced UI Skills: Created dynamic and interactive user interfaces.",
        ],
    },
    {
        title: "Creating Stunning 3D and Animated Websites",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Pro Front-End Developer -- 2024 - Present",
        points: [
            "Explored Three.jsand Advanced Animations: Delved into the world of 3D graphics and animations.",
            " Mastered 3D Models with React Three Fiber: Created and integrated 3D models seamlessly with React.",
            "Enhanced Visual Appeal: Crafted visually captivating and user-friendly websites.",
            "Utilized GSAP: Implemented complex animations to make websites stand out.",
            "Achieved Stunning Visuals and Interactivity: Elevated the overall user experience with advanced animations and effects.",
        ],
    },
];

export const socialLinks = [{
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [{
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Tazza - Fresh Vegetable E-commerce Website',
        description: '"Tazza" is a fresh and vibrant e-commerce website designed to offer users a seamless and engaging online shopping experience. The website features a clean and intuitive interface, enriched with interactive elements and animations, showcasing Tazzas wide range of fresh vegetablesThe website is developed using modern web technologies such as HTML, CSS, Tailwind CSS, and React.',
        link: 'https://tahalokhandwala790.github.io/Tazza/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Pesto - Dynamic Restaurant Website',
        description: '"Pesto" is a dynamic restaurant website designed to provide users with an engaging online experience. The site features a vibrant interface enriched with animations and interactive elements, showcasing Pestos culinary delights and dining experiences. The website is built using modern web development technologies such as HTML, CSS, and React.',
        link: 'https://tahalokhandwala790.github.io/pesto-webapp/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Delicacy - Exquisite Restaurant Website',
        description: '"Delicacy" is an exquisite restaurant website crafted to offer users a sophisticated and interactive online experience. The site boasts a sleek interface with engaging animations and interactive features, highlighting Delicacys gourmet offerings and exceptional dining atmosphere. The website is developed using modern web technologies such as HTML, CSS, and React.',
        link: 'https://delicacy-taha.netlify.app/',
    },

];