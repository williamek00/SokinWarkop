<script>
import { mapActions, mapState } from 'pinia'
import { useWarkopStore } from '../stores/warkop'
export default {
    computed:{
        ...mapState(useWarkopStore,['favs'])
    },
    methods:{
        ...mapActions(useWarkopStore,['fetchFavourite']),
       
    },
    created(){
        this.fetchFavourite()
    }
}
</script>

<template>
    <div class="flex flex-wrap -mx-4 dark:bg-gray-900">
    <div v-for="el in favs" :key="el.id" class="p-4 sm:w-1/4 lg:w-1/4">
        <div class="h-full border-2 border-white-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                :src="el.Warkop.imageUrl" alt="blog">
            <div class="p-6 hover:bg-white-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">{{ el.Warkop.title }}</h1>
                <p class="leading-relaxed mb-3">{{ el.Warkop.synopsis}}</p>
                <div class="flex items-center flex-wrap justify-center">
                                <RouterLink :to="`/weather/${el.Warkop.id}`"  >
                                    <button  class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" >liat cuaca.</button>
                                </RouterLink>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>