import type { SectionName } from "./types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CurrentSectionContext } from "@/contexts/CurrentSectionContext";

export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used inside CurrentSectionContextProvider component"
    );
  }

  return context;
}

export function useScrollSection(sectionName: SectionName, threshold = 0.6) {
  const { ref, inView } = useInView({ threshold });
  const { setCurrentSection, whenLastClick } = useCurrentSectionContext();

  useEffect(() => {
    if (inView && Date.now() - whenLastClick > 1000) {
      console.log(`${sectionName} section is in view`);
      console.log(Date.now() - whenLastClick);
      setCurrentSection(sectionName);
    }
  }, [inView, sectionName]);

  return { ref };
}
