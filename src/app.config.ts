import { AppConfig } from 'remax/wechat'

const config: AppConfig = {
  pages: ['pages/index/index'],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34',
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 20000,
    uploadFile: 20000,
  },
  requiredBackgroundModes: ['audio'],
}

export default config
