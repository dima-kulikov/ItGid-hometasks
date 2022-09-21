import Vue from 'vue'
import App from './App.vue'
import TheExample from './components/TheExample.vue'
import TheField from './components/TheField.vue'

Vue.config.productionTip = false

Vue.component ('app-ex', TheExample)
Vue.component ('app-field', TheField)


new Vue({
  render: h => h(App),
}).$mount('#app')
