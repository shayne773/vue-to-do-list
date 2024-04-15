import { createApp } from 'vue'
import store from './components/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'


const myApp = createApp(App);
myApp.use(store);
myApp.component('font-awesome-icon', FontAwesomeIcon);
myApp.mount('#app');