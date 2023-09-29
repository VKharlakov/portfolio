import { createContext, useState, useEffect } from "react";

interface UserLanguageContextProviderProps {
  children: React.ReactNode;
}

export const UserLanguageContext = createContext<string | null>(null);

export default function UserLanguageContextProvider({
  children,
}: UserLanguageContextProviderProps) {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setUserLanguage(navigator.language);
    }
  }, []);

  return (
    <UserLanguageContext.Provider value={userLanguage}>
      {children}
    </UserLanguageContext.Provider>
  );
}
