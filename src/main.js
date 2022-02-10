// 外部组件
import { createApp } from 'vue' // vue
// app主体
import App from './App.vue' 
// 应用启动
import startup from '@/setup'

// 创建vue实例
const app = createApp(App);
// 项目启动
startup(app);

app.mount('#app')
