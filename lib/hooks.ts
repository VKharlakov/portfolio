import type { SectionHash } from "./types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { translations } from "./translations/translations";
import { UserLanguageContext } from "@/contexts/UserLanguageContext";
import { CurrentSectionContext } from "@/contexts/CurrentSectionContext";

// check if context for CurrentSection Context is "null"
export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used inside CurrentSectionContextProvider component"
    );
  }

  return context;
}

// scroll to section
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

// check if context for UserLanguageContext is "null"
export function useUserLanguageContext() {
  const context = useContext(UserLanguageContext);

  if (context === null) {
    throw new Error(
      "useUserLanguageContext must be used inside UserLanguageContextProvider component"
    );
  }

  return context;
}

// return translated string
export function useTranslate(key: string) {
  const userLanguage = useUserLanguageContext();

  const keys = key.split(".");

  let translation: any;

  if (userLanguage === "ru") {
    translation = translations.ru;
  } else {
    translation = translations.en;
  }
  for (const subKey of keys) {
    translation = translation[subKey];
  }

  return translation;
}
