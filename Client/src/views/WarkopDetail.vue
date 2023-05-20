<script>
import { useWarkopStore } from '../stores/warkop.js'
import { mapActions , mapState} from 'pinia'
export default {
    data() {
      return {
        current_url : window.location.href
      }
    },
    computed:{
        ...mapState(useWarkopStore,['warkopDetail'])

    },
    methods:{
        ...mapActions(useWarkopStore,['fetchWarkopId','addFavourite'])
    },
    created() {
      // let id = this.$route.params.id;
      // let current_url = this.current_url
      this.fetchWarkopId({id:this.$route.params.id });
    },
}

</script>

<template>

<main class="container mx-auto flex flex-wrap px-4 py-8">
  <div class="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg">
    <h2 class="text-xl font-bold mb-4">{{warkopDetail.name}}</h2>
    <p class="text-gray-600 mb-2">Alamat:</p>
    <p class="mb-4">{{warkopDetail.address}}</p>
    <p class="text-gray-600 mb-2">Rating:</p>
    <p class="mb-4">{{warkopDetail.rating}}</p>
    <p class="text-gray-600 mb-2">Deskripsi:</p>
    <p class="mb-4">{{warkopDetail.description}}</p>
    <p class="text-gray-600 mb-2">Jam buka:</p>
    <p class="mb-4">{{warkopDetail.status}}</p>
    <p class="text-gray-600 mb-2">Ada di:</p>
    <p class="mb-4">{{warkopDetail.city}}</p>
    <p class="text-gray-600 mb-2">Owner:</p>
    <p class="mb-4">{{warkopDetail.owner}}</p>
    <a @click.prevent="addFavourite(warkopDetail.id)">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Masukin list OTW!
      </button>
    </a>
  </div>
  <div class="w-full md:w-1/3 p-4 flex justify-center items-center">
    <img :src="warkopDetail.imageUrl" alt="Placeholder Image" class="w-full h-auto rounded-lg shadow-lg">
  </div>
</main>


</template>