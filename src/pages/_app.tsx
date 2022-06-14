import type { AppProps } from 'next/app'
import AuthManager from '../auth/AuthManager'

export default function MyApp({Component, pageProps, router} : AppProps) {
  const authId = AuthManager.getActiveUserId()
  const auth = Component.auth || ((page, authId) => page)
  return auth(<Component {...pageProps} />)
}