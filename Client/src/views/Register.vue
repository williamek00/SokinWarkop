<script> 
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user.js'

export default {
    data() {
        return {
        email : '',
        password: '',
        }
    },
  methods: {
    ...mapActions(useUserStore, ['register']),
    newUser(){
        this.register({
        email : this.email,
        password: this.password,
        })
    }
   
  },
}
</script>

<template>
    <body class="bg-gray-200">
  <div class="container mx-auto mt-16 max-w-md">
    <div class="bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4">Register</h1>
      <form @submit.prevent="newUser">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email 
          </label>
          <input v-model="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" required>
        </div>
        <div class="mb-4">
          <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</template>