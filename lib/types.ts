import { navLinks } from "./data";

export type SectionName = (typeof navLinks)[number]["name"];

export type NavLink = {
  name: SectionName;
  hash: string;
  scrollMethod: string;
  scrollToMultiplier?: number;
};
