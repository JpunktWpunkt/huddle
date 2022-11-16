import {ThemeProvider} from "styled-components";
import GlobalStyles from "../styles/Gobal";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '375px',
  desktop: '1440px',
}

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
  <Component {...pageProps} />
    </>
    </ThemeProvider>
)
}

export default MyApp
