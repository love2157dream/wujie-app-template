import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WujieVue from 'wujie-vue3';

import App from './App.vue'
import router from './router'

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;
const app = createApp(App)

app.use(WujieVue);
app.use(createPinia())
app.use(router)

app.mount('#app')


// preloadApp({ name: "react18", url: "//localhost:1801", exec: true });
// preloadApp({ name: "vue3", url: "//localhost:3002", exec: true });

