import { createApp } from 'vue';

import Vuelidate from 'vuelidate'

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(router);
app.use(store);

app.use(Vuelidate);

app.component('base-badge', BaseBadge);

app.mount('#app');
