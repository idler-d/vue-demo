import * as elIconModules from '@element-plus/icons-vue';//导入所有element icon图标

export default function setupIcon(app) {
  // 全局注册element-plus icon图标组件
  Object.keys(elIconModules).forEach((key) => {
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, elIconModules[key]);
    } else {
        app.component(key + "Icon", elIconModules[key]);
    }
  });
}