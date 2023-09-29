import type { SectionNameRu, SectionNameEng, SectionHash } from "./types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CurrentSectionContext } from "@/contexts/CurrentSectionContext";
import { UserLanguageContext } from "@/contexts/UserLanguageContext";

export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used inside CurrentSectionContextProvider component"
    );
  }

  return context;
}

export function useScrollSection(sectionHash: SectionHash, threshold = 0.6) {
  const { ref, inView } = useInView({ threshold });
  const { setCurrentSection, whenLastClick } = useCurrentSectionContext();

  useEffect(() => {
    if (inView && Date.now() - whenLastClick > 1000) {
      setCurrentSection(sectionHash);
    }
  }, [inView, sectionHash]);

  return { ref };
}

export function useUserLanguageContext() {
  const context = useContext(UserLanguageContext);

  if (context === null) {
    throw new Error(
      "useUserLanguageContext must be used inside UserLanguageContextProvider component"
    );
  }

  return context;
}
