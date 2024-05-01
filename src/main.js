import './assets/main.css'
import 'uno.css'
import './assets/iconfont.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app= createApp(App)
app.use(router)
// 创建Vue应用实例，使用router，然后挂载到#app
app.mount('#app')