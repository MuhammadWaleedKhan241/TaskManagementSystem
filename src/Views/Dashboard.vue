<template>
    <div>
        <h2>Welcome to Dashboard</h2>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>


export default {
    methods: {
        async logout() {
            try {
                await api.post('/logout', {}, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                localStorage.removeItem('token');
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
