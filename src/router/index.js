import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import About from '../components/about.vue';
import Contact from '../components/contact.vue';
import Item from '../components/item.vue';
import p404 from '../components/p404.vue';

Vue.use(Router);

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/item/:id',
            name: 'item',
            component: Item
        },
        {
            path: '*',
            name: 'p404',
            component: p404
        }
    ],
});
