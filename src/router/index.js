import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/AuthComponent/Login.vue';
import Register from '../components/AuthComponent/Register.vue';
import Login from '../components/AuthComponent/Login.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
