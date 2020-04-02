import { getStorageSync, setStorageSync, removeStorageSync } from 'remax/wechat'
import { TOKEN_KEY } from '@/consts'

export function getStorageToken() {
  return getStorageSync(TOKEN_KEY)
}

export function setStorageToken(token: string) {
  return setStorageSync(TOKEN_KEY, token)
}

export function removeStorageToken() {
  return removeStorageSync(TOKEN_KEY)
}
