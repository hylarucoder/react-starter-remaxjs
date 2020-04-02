import { usePageEvent } from 'remax'

export function useShow(func: Function) {
  usePageEvent('onShow', () => {
    func()
  })
}
export function useHide(func: Function) {
  usePageEvent('onHide', () => {
    func()
  })
}

export function useShareAppMessage(func: Function) {
  usePageEvent('onShareAppMessage', () => {
    func()
  })
}
