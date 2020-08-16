import type { AppProps /*, AppContext */ } from 'next/app'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import '../styles/globals.css'
import { ThemeContext, useTheme } from "../contexts/theme-context";

const MyApp = ({ Component, pageProps }: AppProps)  => {
  const theme = useTheme();

  return (
    <ZeitProvider theme={{ type: theme.themeType }}>
      <CssBaseline />
      <ThemeContext.Provider value={theme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ZeitProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp