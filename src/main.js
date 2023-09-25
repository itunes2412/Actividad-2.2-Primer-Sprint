import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa el enrutador que configuraste

const app = createApp(App)

app.use(router) // Usa el enrutador en la aplicación Vue

app.mount('#app')
