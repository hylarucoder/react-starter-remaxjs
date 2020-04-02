import React, { useEffect } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import {
  getStorageToken,
  removeStorageToken,
  setStorageToken,
} from '@/utils/storage'

export const PROFILE_INITIAL_STATE = {
  uid: '-',
  nickname: '匿名用户',
}

export const INITIAL_STORE = {
  loggedIn: false,
  token: getStorageToken(),
  profile: PROFILE_INITIAL_STATE,
  panelLogin: false,
}

export interface MGlobalStore {
  loggedIn: boolean
  token: string
  profile: typeof PROFILE_INITIAL_STATE
  panelLogin: boolean

  setProfile: Function
  setToken: Function
  removeToken: Function
  showPanelLogin: Function
  hidePanelLogin: Function
}

export const StoreContext = React.createContext(INITIAL_STORE as MGlobalStore)

export const useGlobalStore = (): MGlobalStore => {
  return React.useContext(StoreContext)
}

export function useGlobalProviderStore() {
  const store = useLocalStore(() => {
    return {
      ...INITIAL_STORE,
      setProfile: (profile: any) => {
        store.profile = profile
        store.loggedIn = true
      },
      setToken: (token: string) => {
        store.token = token
        store.loggedIn = true
        setStorageToken(token)
      },
      removeToken: () => {
        removeStorageToken()
      },
      hidePanelLogin: () => {
        store.panelLogin = false
      },
      showPanelLogin: () => {
        store.panelLogin = true
      },
    }
  })

  useEffect(() => {
    /**
     *
     const unsubscribe = () => {}

     // Cleanup subscription on unmount
     return () => unsubscribe()
     */
  }, [])

  // Return the user object and auth methods
  return store
}

export function ProvideStore({ children }: { children: React.ReactNode }) {
  const globalStore = useGlobalProviderStore()
  return (
    // @ts-ignore
    <StoreContext.Provider value={globalStore}>
      {children}
    </StoreContext.Provider>
  )
}
