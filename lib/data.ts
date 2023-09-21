import guildrmImg from "../public/guildrm.png";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education & Experience",
    hash: "#education-and-experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contacts",
    hash: "#contacts",
  },
] as const;

export const skills = [
  {
    name: "JavaScript",
    size: "wide",
  },
  {
    name: "Node.js",
    size: "wide",
  },
  {
    name: "HTML",
    size: "small",
  },
  {
    name: "CSS",
    size: "small",
  },
  {
    name: "Express.js",
    size: "small",
  },
  {
    name: "MongoDB",
    size: "small",
  },
  {
    name: "mongoose",
    size: "small",
  },
  {
    name: "React",
    size: "tall",
  },
  {
    name: "Redux",
    size: "small",
  },
  {
    name: "TypeScript",
    size: "medium",
  },
  {
    name: "Adaptive",
    size: "small",
  },
  {
    name: "Next.js",
    size: "small",
  },
  {
    name: "Nginx",
    size: "small",
  },
  {
    name: "Docker",
    size: "small",
  },
  {
    name: "BEM",
    size: "small",
  },
  {
    name: "Figma",
    size: "small",
  },
  {
    name: "GitHub",
    size: "small",
  },
  {
    name: "Framer Motion",
    size: "small",
  },
] as const;

export const projects = [
  {
    name: "GuildRM",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "Nginx",
      "MongoDB",
    ],
    description: `A small web application made for a World of Warcraft gaming community. It allows to track guild's groups composition for easier roster monitoring.`,
    icon: guildrmImg,
    link: "https://guildrm.com",
    repoLink: "https://github.com/VKharlakov/guild-roster-manager",
  },
  {
    name: "GuildRM",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "Nginx",
      "MongoDB",
    ],
    description: `A small web application made for a World of Warcraft gaming community. It allows to track guild's groups composition for easier roster monitoring.`,
    icon: guildrmImg,
    link: "https://guildrm.com",
    repoLink: "https://github.com/VKharlakov/guild-roster-manager",
  },
] as const;

export const links = [
  {
    name: "hh",
    link: "https://hh.ru/resume/dc92d752ff0c3ba55a0039ed1f4b4569513469",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/vkharlakov/",
  },
  {
    name: "telegram",
    link: "https://t.me/vit_kharl",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/79959051321",
  },
] as const;
