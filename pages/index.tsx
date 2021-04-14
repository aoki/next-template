import { Spacer, Toggle } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";
import Head from "next/head";
import { useContext } from "react";
import Dot from "../components/dot";
import { ThemeContext } from "../contexts/theme-context";

const neon = {
  white: "#FFFFFF",
  black: "#0A0901",
  pink: "#EA39B2",
  yellow: "#F6E652",
  blue: "#54AEB9",
  magenta: "#AD35D8",
  purple: "#8334F4",
};

const HomePage = () => {
  const theme = useContext(ThemeContext);
  const switchThemes = () =>
    theme.setTheme(theme.themeType === "dark" ? "light" : "dark");

  return (
    <>
      <Head>
        <title>Next App Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Welcome to Next.js!</div>
        <div className="theme-ctrl">
          <Moon size={16} />
          <Spacer inline x={0.35} />
          <Toggle onChange={switchThemes} />
          <Spacer inline x={0.35} />
          <Sun size={16} />
        </div>
        <div className="dots">
          <Dot color={neon.pink} />
          <Dot color={neon.yellow} />
          <Dot color={neon.blue} />
          <Dot color={neon.magenta} />
          <Dot color={neon.purple} />
          {theme.themeType === "dark" ? (
            <Dot color={neon.white} />
          ) : (
            <Dot color={neon.black} />
          )}
        </div>
      </main>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
