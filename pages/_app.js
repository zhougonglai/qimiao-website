import { Head } from '@components/common'
import { SWRConfig } from 'swr'
import fetcher from '@utils/fetch'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (<SWRConfig value={{ fetcher }}>
            <Head />
            <Component {...pageProps} />
          </SWRConfig>)
}

export default MyApp
