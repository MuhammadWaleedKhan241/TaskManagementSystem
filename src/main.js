// import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'

import Home from './components/AuthComponent/Home.vue'
import Register from './components/AuthComponent/Register.vue'
import Task from './Dashboard.vue'

// createApp(App).mount('#app')
// createApp(Register).mount('#app')    

const app = createApp(Dashboard);
app.use(router);
app.mount('#app');
import router from './router';
import Dashboard from './Views/Dashboard.vue';




// import { createApp } from 'vue';
// import router from './router'; 
// import App from './App.vue';

// const app = createApp(Task);
// app.use(router);
// app.mount('#app');
