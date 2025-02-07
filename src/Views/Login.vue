<template>
  <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
          <input v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/register">Register</router-link></p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import api from '../utils/axios'; 

export default {
  data() {
      return {
          email: '',
          password: '',
          errorMessage: '' 
      };
  },
  methods: {
      async login() {
          try {
              const response = await api.post('/login', { email: this.email, password: this.password });
              localStorage.setItem('token', response.data.token);
              this.$router.push('/dashboard');
          } catch (error) {
              this.errorMessage = error.response?.data?.message || 'Invalid login credentials';
          }
      }
  }
};
</script>

<style scoped>
.auth-container {
  text-align: center;
  margin-top: 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
