import { createApp } from 'vue'
import {Quasar} from 'quasar'
import { createPinia } from 'pinia'
import '@quasar/extras/material-icons/material-icons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'

const myApp = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

myApp.use(Quasar,{
    plugins: {},
})
myApp.use(pinia)

myApp.mount('#app')
