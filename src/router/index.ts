import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        name: 'home'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;