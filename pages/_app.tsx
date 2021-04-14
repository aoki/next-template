import { CssBaseline, GeistProvider } from "@geist-ui/react";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeContext, useTheme } from "../contexts/theme-context";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();

  return (
    <GeistProvider themeType={theme.themeType}>
      <CssBaseline />
      <ThemeContext.Provider value={theme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </GeistProvider>
  );
};

export default MyApp;
