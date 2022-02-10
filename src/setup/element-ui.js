import elementPlus from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn';//ElementPlus 组件内部默认使用英语，使用中文语言
import 'element-plus/dist/index.css';

export default function setupElementUi(app) {
  app.use(elementPlus, {
    locale: zhCn, // 使用中文语言
  })
}

