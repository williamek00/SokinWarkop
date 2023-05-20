<script>
import {useUserStore} from '../stores/user.js'
import { mapActions , mapStores } from 'pinia'
export default {
  data() {
    return {
        email : '',
        password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['login']),
    loginMethod(){
        this.login({
            email : this.email,
            password : this.password
        })
    },

  },
}
</script>

<template>
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div
        class="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-black-700">sokinwarkop.</h1>

        <form class="mt-6" @submit.prevent="loginMethod">
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input type="email" v-model="email"
                    class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800">Password</label>
                    <input type="password" v-model="password"
                        class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
               
                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-500 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
                </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Daftar buat dapetin benefit lainnya!
           <RouterLink to="/register" href="#"
                class="font-medium text-purple-600 hover:underline">Daftar disini</RouterLink></p>
    </div>
</div>
</template>

