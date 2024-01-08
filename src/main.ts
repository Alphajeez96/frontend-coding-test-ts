import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)

initializeRouter(app)

app.mount('#app')
