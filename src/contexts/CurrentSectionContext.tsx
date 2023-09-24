import { createContext, useState } from "react";
import type { SectionName } from "../../lib/types";

interface CurrentSectionContextProviderProps {
  children: React.ReactNode;
}

interface CurrentSectionContextType {
  whenLastClick: number;
  currentSection: SectionName;
  setWhenLastClick: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const CurrentSectionContext =
  createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider({
  children,
}: CurrentSectionContextProviderProps) {
  const [currentSection, setCurrentSection] = useState<SectionName>("Главная");
  const [whenLastClick, setWhenLastClick] = useState(0);

  return (
    <CurrentSectionContext.Provider
      value={{
        whenLastClick: whenLastClick,
        currentSection: currentSection,
        setWhenLastClick: setWhenLastClick,
        setCurrentSection: setCurrentSection,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
