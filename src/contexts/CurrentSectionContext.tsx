import { SectionName } from "../../lib/data";
import { createContext, useState, useContext } from "react";

interface CurrentSectionContextProviderProps {
  children: React.ReactNode;
}

interface CurrentSectionContextType {
  currentSection: SectionName;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const CurrentSectionContext =
  createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider({
  children,
}: CurrentSectionContextProviderProps) {
  const [currentSection, setCurrentSection] = useState<SectionName>("Home");

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection: currentSection,
        setCurrentSection: setCurrentSection,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}

export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used inside CurrentSectionContextProvider component"
    );
  }

  return context;
}
