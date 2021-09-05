import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import './assets/styles/tailwind.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app');
