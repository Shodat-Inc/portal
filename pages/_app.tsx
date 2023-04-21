import {SessionProvider} from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {

  return(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
  
}
