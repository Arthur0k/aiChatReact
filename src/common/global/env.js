/*
 * 全局环境配置
 * localhost／ development／ pre／ production *
 * @api 后台api地址
 * @link 全局链接地址
 * @share 全局分享默认配置
 */
const CONFIG = {
  // 本地环境
  localhost: {
    api: 'https://app-api-qa.peilian.com/app-api/v6',
    // chatApi: 'https://chat.dev.pnlyy.com',
    chatApi: 'https://chat-dev.pnlyy.com',
    wsApi: 'wss://chatsocket-dev.peilian.com/',
    host: 'http://localhost:8080',
    hosts: 'https://localhost:8080',
    qiNiuLink: ["https://tests001.pnlyy.com/", "https://tests001.pnlyy.com/"],
    saApi: 'https://vipweb-data-api.peilian.com/sa',
    wxApi: 'https://yii.peilian.com/custom-poster/wechat-share-param',
    debugging: true
  },
  // DEV环境
  development: {
    api: 'https://app-api-qa.peilian.com/app-api/v6',
    // chatApi: 'https://chat.dev.pnlyy.com',
    chatApi: 'https://chat-dev.pnlyy.com',
    wsApi: 'wss://chatsocket-dev.peilian.com/',
    host: 'http://vippl-dev.peilian.com/aiChat',
    hosts: 'https://vippl-dev.peilian.com/aiChat',
    wxApi: 'https://yii.peilian.com/custom-poster/wechat-share-param',
    qiNiuLink: ["https://tests001.pnlyy.com/", "https://tests001.pnlyy.com/"],
    saApi: 'https://vipweb-data-api.peilian.com/sa',
    debugging: true
  },
  // qa环境
  // qa: {
  //   api: 'https://app-api-qa.peilian.com/app-api/v6',
  //   chatApi: 'https://chat.dev.pnlyy.com',
  //   wsApi: 'wss://chatsocket-dev.peilian.com/',
  //   host: 'https://aichat-dev.peilian.com/',
  //   // qiNiuLink: "https://ai-statics.peilian.com/",
  //   saApi: 'https://vipweb-data-api.peilian.com/sa',
  //   debugging: true
  // },
  // prd环境
  production: {
    api: 'https://app-api.peilian.com/app-api/v6',
    chatApi: 'https://chat.pnlyy.com',
    wsApi: 'wss://chatsockets.peilian.com/',
    host: 'https://vippl.peilian.com/aiChat',
    hosts: 'https://vippl.peilian.com/aiChat',
    wxApi: 'https://wx.peilian.com/custom-poster/wechat-share-param',
    qiNiuLink: ["https://vips-static.pnlyy.com/", "http://static.pnlyy.com/"],
    saApi: 'https://vipweb-data-api.peilian.com/sa?project=production',
    debugging: false
  }
}

//检测环境
let { host } = window.location

if ((host.indexOf('vippl-dev.peilian.com') > -1) || (host.indexOf('aichat-dev.peilian.com') > -1)) {
  global.APIMSG = CONFIG.development
} else if ((host.indexOf('vippl.peilian.com') > -1) || (host.indexOf('aichat.peilian.com') > -1)) {
  global.APIMSG = CONFIG.production
} else {
  global.APIMSG = CONFIG.localhost
}

//  else if (host.indexOf("vipony-qa.xiaomapeilian.com") > -1) {
//   global.APIMSG = CONFIG.qa;
// }

export default global.APIMSG
