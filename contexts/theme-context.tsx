import { createContext, useCallback, useState } from "react";

type ThemeContext = {
  themeType: string;
  setTheme: (newTheme: string) => void;
};

const defaultContext: ThemeContext = {
  themeType: "dark",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContext>(defaultContext);

export const useTheme = (): ThemeContext => {
  const [themeType, setThemeType] = useState("dark");

  const setTheme = useCallback((current: string): void => {
    setThemeType(current);
  }, []);

  return {
    themeType,
    setTheme,
  };
};
