<template>
    <div class="p-4 sm:w-1/4 lg:w-1/4">
      <div class="h-full border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-72 md:h-48 w-full object-cover object-center" :src="card.imageUrl" alt="blog">
        <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
          <h1 class="text-2xl font-semibold mb-3">{{ card.name }}</h1>
          <p class="leading-relaxed mb-3">{{ card.synopsis }}</p>
          <div class="flex items-center flex-wrap justify-center">
            <a @click.prevent="detailId">
              <button v-if="card.name !== 'Coming Soon'" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">kepoin.</button>
              <button v-else class="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>lagi dibangun,sabarin.</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useWarkopStore } from '../stores/warkop.js'
  import { mapActions } from 'pinia'
  
  export default {
    props: ['card'],
    methods: {
      ...mapActions(useWarkopStore, ['fetchWarkopId']),
      detailId() {
        this.$router.push(`/warkop/${this.card.id}`)
      }
    }
  }
  </script>
  