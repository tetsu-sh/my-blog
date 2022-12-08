import { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

    
  
  <Component {...pageProps} />
    </>
  )
}
