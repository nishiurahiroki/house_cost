import AuthManager from '../auth/AuthManager'

import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Auth({ children }) {
  const authId = AuthManager.getActiveUserId()
  const router = useRouter()

  useEffect(() => {
    if(!authId) {
      router.replace('/login')
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}