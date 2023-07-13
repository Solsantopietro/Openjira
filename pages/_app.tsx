import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import { UIProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries';
import { lightTheme, darkTheme } from '../themes';
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline>

            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp