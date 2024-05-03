import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";


const routes = [
    {
        path: '/',
        name: 'Navigation',
        component: () => import('@/views/navigation.vue'),
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});
let systemInfo = null
const getUserInfo =async () => {
    try {
        const response = await axios.get('/api/system/info');
        systemInfo = response.data.result;
    } catch (error) {
    }
}
router.beforeEach((to, from, next) => {
    const cookiesExist = document.cookie.indexOf('csrf_access_token') !== -1;
    if (!cookiesExist && to.path !== '/login') {
        // 保存用户访问的路径，以便登录后重定向
        sessionStorage.setItem('redirectPath', to.path);
        getUserInfo().then(r => {
            location.href = systemInfo.base_url + '/login';
        });
    }
    next();
});


export default router;