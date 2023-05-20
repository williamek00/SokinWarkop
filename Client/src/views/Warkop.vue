<script>
import Card from './Card.vue'
import { useWarkopStore } from '../stores/warkop.js'
import { useUserStore } from '../stores/user.js'
import { mapActions , mapStores, mapState} from 'pinia'
import PageNavigate from '../components/PageNavigate.vue'

export default {
  components:{
    Card,
    PageNavigate
  },
  data(){
    return {
      searchInput:'',
      filteredData: []
    }
  },
  computed: {
    // ...mapStores(useMovieStore),
    ...mapState(useWarkopStore,['warkopData','midtransToken']),

    pageCount() {
      if (this.filteredData.length > 0) {
        return this.filteredData.length;
      } else if (this.warkopData) {
        return this.warkopData.length;
      }
    }
  },

  methods: {
    ...mapActions(useWarkopStore, ['fetchWarkop','nextPage', 'backPage',]),
    search(){
      const input = this.searchInput.toLowerCase()
      if (input) {
        this.filteredData = this.warkopData.filter(item => {
          return item.name.toLowerCase().includes(input)
        })
      } else {
        this.filteredData = []
      }
    },
    nextPageMethod(){
      this.nextPage();
    },
    backPageMethod(){ 
      this.backPage();
    },
   
  },

  created(){
    this.fetchWarkop()
  }
}
</script>

<template>

  <body class="h-max bg-black ">
    <section class="flex-1 dark:bg-gray-900">
      <div class="container mx-auto py-4">
        <form class="flex items-center justify-center" @submit.prevent="search">
          <input v-model="searchInput" type="text" class="py-2 px-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search...">
          <button class="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Search</button>
        </form>
        <br>
        <div class="flex flex-wrap -m-4">
          <Card v-for="el in (filteredData.length > 0 ? filteredData : warkopData)" :key="el.id" :card="el"/>
          </div>

          </div>
    </section>
  </body>
</template>
