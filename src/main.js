// 外部组件
import { createApp } from 'vue' // vue
import elementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons-vue';//导入所有element icon图标

import App from './App.vue' // app主体
import router from './router' // 路由
import store from './store' // 存储

import zhCn from 'element-plus/es/locale/lang/zh-cn';//ElementPlus 组件内部默认使用英语，使用中文语言
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(store) // 存储
app.use(router) // 路由
app.use(elementPlus, {
  locale: zhCn, // 使用中文语言
})
// 全局注册element-plus icon图标组件
Object.keys(ElIconModules).forEach((key) => {
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconModules[key]);
    } else {
        app.component(key + "Icon", ElIconModules[key]);
    }
});
app.mount('#app')
