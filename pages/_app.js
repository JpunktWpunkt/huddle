import {ThemeProvider} from "styled-components";
import GlobalStyles from "../styles/Gobal";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    button: '#ff0099',
    font:'@import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap\')'
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
