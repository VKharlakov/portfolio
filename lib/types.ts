import { navLinks } from "./data";

export type SectionNameRu = (typeof navLinks)[number]["nameRu"];
export type SectionNameEng = (typeof navLinks)[number]["nameEng"];
export type SectionHash = (typeof navLinks)[number]["hash"];

export type NavLink = {
  nameRu: SectionNameRu;
  nameEng: SectionNameEng;
  hash: SectionHash;
  scrollMethod: string;
  scrollToMultiplier?: number;
};
