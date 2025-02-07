
<template>
    <div class="container">
      <!-- <h1>Welcome To Task Management System</h1> -->
  
      <div class="form-container">
        <h3>Login Page</h3>
        <form @submit.prevent="submitForm">
          <!-- <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
          </div> -->
  
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
  
          <!-- <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div> -->
  
          <button type="submit">Login</button>
          <p>I have an Already Account <router-link to="/register">Login</router-link></p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
     submitForm(){

     }
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 20px;
  }
  
  .form-container {
    display: inline-block;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f9f9f9;
    width: 300px;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    width: 100%;
    padding: 8px;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: darkblue;
  }
  </style>
  