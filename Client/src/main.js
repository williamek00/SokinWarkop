import { createApp , markRaw} from 'vue'
import { createPinia } from 'pinia'
const app = createApp(App)

import App from './App.vue'
import router from './router'

const pinia  = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

app.mount('#app')
