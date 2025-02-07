<script setup>
import Login from './components/AuthComponent/Login.vue';
import Register from './components/AuthComponent/Register.vue';
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>

    <main>

      <h1>welcome</h1>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background-color: #f3f3f3;
  padding: 10px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>
