import { createRouter, createWebHistory } from "vue-router";


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

router.beforeEach((to, from, next) => {
    const cookiesExist = document.cookie.indexOf('csrf_access_token') !== -1;
    if (!cookiesExist && to.path !== '/login') {
        // 保存用户访问的路径，以便登录后重定向
        sessionStorage.setItem('redirectPath', to.path);
        // 如果用户未登录且不是前往登录页面，则重定向到https://login.example.com
        location.href = 'https://login.example.com';

    }
    next();
});


export default router;