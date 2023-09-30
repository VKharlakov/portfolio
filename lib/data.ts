import guildrmMockupSVG from "../public/guildrm__mockup-svg.svg";
import googleBooksMockupSVG from "../public/googleBooks__mockup-svg.svg";
import diplomaMockupSVG from "../public/diploma__mockup-svg.svg";

export const navLinks = [
  {
    nameRu: "Главная",
    nameEng: "Home",
    hash: "#home",
    scrollMethod: "manual",
    scrollToMultiplier: 0,
  },
  {
    nameRu: "Навыки",
    nameEng: "Skills",
    hash: "#skills",
    scrollMethod: "manual",
    scrollToMultiplier: 1,
  },
  {
    nameRu: "Проекты",
    nameEng: "Projects",
    hash: "#projects",
    scrollMethod: "auto",
  },
  {
    nameRu: "Контакты",
    nameEng: "Contacts",
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
    descriptionRu: `Небольшое веб-приложение, созданное для геймерского сообщества World of Warcraft. Оно позволяет отслеживать состав гильдии для удобного контроля над списком игроков.`,
    descriptionEng: `A small web application created for the gaming community of World of Warcraft. It allows you to track the composition of a guild for easy control over the list of players.`,
    icon: guildrmMockupSVG,
    link: "https://guildrm.com",
    repoLink: "https://github.com/VKharlakov/guild-roster-manager",
  },
  {
    name: "Movies Explorer",
    stack: [
      "Frontend & Backend",
      "JavaScript",
      "React",
      "BEM",
      "Node.js",
      "JWT",
      "Express.js",
      "REST API",
      "Nginx",
      "MongoDB",
    ],
    descriptionRu: `Дипломный проект, представляющий собой страницу "О себе" с проектной информацией и возможность создать и войти в свой аккаунт с сотней фильмов, которые можно сохранить в избранное.`,
    descriptionEng: `A diploma project consisting of a 'About Me' page with project-related information and the ability to create and log into your account with a collection of a hundred movies that can be saved as favorites.`,
    icon: diplomaMockupSVG,
    link: undefined,
    repoLink: "https://github.com/VKharlakov/movies-explorer-frontend",
  },
  {
    name: "Google Books API Catalog",
    stack: ["Frontend", "TypeScript", "React", "Redux", "Docker", "BEM"],
    descriptionRu: `Этот проект представляет собой интерактивный каталог книг, основанный на данных, полученных с помощью API Google Books. В качестве стейт-менеджмента используется библиотека Redux.`,
    descriptionEng: `This project is an interactive book catalog based on data retrieved using the Google Books API. Has Redux library as a state-managing solution.`,
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
