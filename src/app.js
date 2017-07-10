import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app.vue';
import router from './router';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
