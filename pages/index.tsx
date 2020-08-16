import Head from 'next/head'
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Spacer, Toggle } from "@zeit-ui/react";
import { Moon, Sun } from "@zeit-ui/react-icons";

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
            <Toggle onChange={switchThemes}/>
          <Spacer inline x={0.35} />
          <Sun size={16} />
      </div>
      </main>
      <style jsx>{`
        .theme-ctrl {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
    </>
  )
}

export default HomePage