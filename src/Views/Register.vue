<template>
    <div class="auth-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <input v-model="name" type="text" placeholder="Name" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <input v-model="password_confirmation" type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
import api from '../utils/axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await api.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                });
                localStorage.setItem('token', response.data.token);
                this.$router.push('/dashboard');
            } catch (error) {
                alert('Registration failed');
            }
        }
    }
};
</script>
