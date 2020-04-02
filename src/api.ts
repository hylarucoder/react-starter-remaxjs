import { request } from 'remax/wechat'
import { getStorageToken } from '@/utils/storage'
import { camelCaseDeep, snakeCaseDeep } from './utils/objectUtils'

let baseUrl = 'https://api.youdomain.cn/user'

if (process.env.NODE_ENV !== 'production') {
  baseUrl = 'https://dev-api.youdomain.com/user'
}

const get = async (url: string, params = {}): Promise<any> => {
  const header: any = {}
  const ak = getStorageToken()
  if (ak) {
    header.Authorization = `Bearer ${ak}`
  }
  return new Promise((resolve, reject) => {
    const finalUrl = `${baseUrl}${url}`
    request({
      url: finalUrl,
      data: params,
      header,
      method: 'GET',
    }).then(res => {
      console.log('REQ-GET', res.statusCode, url, params)
      if (res.statusCode === 200) {
        // @ts-ignore
        const data = camelCaseDeep(res.data)
        resolve(data)
      } else {
        reject(res)
      }
    })
  })
}

const post = (url: string, params = {}): Promise<any> => {
  const header: any = {
    'content-type': 'application/json',
  }
  const ak = getStorageToken()
  if (ak) {
    header.Authorization = `Bearer ${ak}`
  }
  return new Promise((resolve, reject) => {
    const finalUrl = `${baseUrl}${url}`
    request({
      url: finalUrl,
      data: snakeCaseDeep(params),
      header,
      method: 'POST',
    }).then(res => {
      console.log('REQ-POST', res.statusCode, url, params)
      if (res.statusCode === 200) {
        // @ts-ignore
        const data = camelCaseDeep(res.data)
        resolve(data)
      } else {
        reject(res)
      }
    })
  })
}

export const initialCheck = async () => get('/initialCheck')
