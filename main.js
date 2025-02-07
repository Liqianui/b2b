import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


 import pageComponent from './pages/globalComponents/pageComponent.vue'
  import navData from './pages/globalComponents/navData.vue'
    import bottomNav from './pages/globalComponents/bottomNav.vue'
 
 
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
 
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
	
  const app = createSSRApp(App)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.component('pageComponent',pageComponent)
    app.component('navData',navData)
	 app.component('bottomNav',bottomNav)
	  
  app.use(uviewPlus)
  app.use(ElementPlus)
  app.use(bottomNav)
  return {
    app
  }
}
// #endif