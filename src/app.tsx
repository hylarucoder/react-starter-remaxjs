import React, { useEffect } from 'react'
import { hideTabBar } from 'remax/wechat'
import { ProvideStore, useGlobalStore } from '@/hooks/useStore'
import { initialCheck } from '@/api'
import './app.scss'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const globalStore = useGlobalStore()
  useEffect(() => {
    /**
     * initialization
     * 1. 复杂状态
     * 2. 未登陆
     */
    //在这里预先从后端取一下检查登陆状态
    initialCheck()
      .then(res => {
        globalStore.hidePanelLogin()
        globalStore.setProfile(res.profile)
      })
      .catch(e => {
        globalStore.removeToken()
        globalStore.hidePanelLogin()
        hideTabBar()
      })
  }, [])
  return <>{children}</>
}

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvideStore>
      <PageWrapper>{children}</PageWrapper>
    </ProvideStore>
  )
}

export default App
