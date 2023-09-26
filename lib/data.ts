import guildrmMockupSVG from "../public/guildrm__mockup-svg.svg";
import googleBooksMockupSVG from "../public/googleBooks__mockup-svg.svg";
import portfolioMockupSVG from "../public/portfolio__mockup-svg.svg";

export const navLinks = [
  {
    name: "Главная",
    hash: "#home",
    scrollMethod: "manual",
    scrollToMultiplier: 0,
  },
  {
    name: "Навыки",
    hash: "#skills",
    scrollMethod: "manual",
    scrollToMultiplier: 1,
  },
  {
    name: "Проекты",
    hash: "#projects",
    scrollMethod: "auto",
  },
  {
    name: "Контакты",
    hash: "#contacts",
    scrollMethod: "auto",
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
    name: "Framer",
    size: "small",
  },
] as const;

export const projects = [
  {
    name: "GuildRM",
    stack: [
      "Frontend & Backend",
      "JavaScript",
      "React",
      "BEM",
      "Node.js",
      "Express.js",
      "REST API",
      "Nginx",
      "MongoDB",
    ],
    description: `Небольшое веб-приложение, созданное для геймерского сообщества World of Warcraft. Оно позволяет отслеживать состав гильдии для удобного контроля над списком игроков.`,
    icon: guildrmMockupSVG,
    link: "https://guildrm.com",
    repoLink: "https://github.com/VKharlakov/guild-roster-manager",
  },
  {
    name: "Сайт-портфолио",
    stack: ["Frontend", "TypeScript", "Next.js", "Framer Motion", "BEM"],
    description: `Мой веб-сайт портфолио, представляющий мои профессиональные навыки и готовые проекты.`,
    icon: portfolioMockupSVG,
    link: undefined,
    repoLink: "https://github.com/VKharlakov/portfolio",
  },
  {
    name: "Google Books API Catalog",
    stack: ["Frontend", "TypeScript", "React", "Redux", "Docker", "BEM"],
    description: `Этот проект представляет собой интерактивный каталог книг, основанный на данных, полученных с помощью API Google Books.`,
    icon: googleBooksMockupSVG,
    link: undefined,
    repoLink: "https://github.com/VKharlakov/future-junior",
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
