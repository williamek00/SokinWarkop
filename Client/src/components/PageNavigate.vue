<script>
export default {
    emits: ["nextPage", "backPage"],
    props: ["page","pageCount"],
    methods: {
        nextPageHandler() {
            this.$emit("nextPage");
        },
        backPageHandler() {
            this.$emit("backPage");
        },
    },
};
</script>

<template>

    <nav>
  <div class="container mx-auto px-4 dark:bg-gray-900">
    <div class="flex justify-center items-center">
      <div class="flex items-center justify-center">
        <a @click="backPageHandler" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  v-if="page > 0" >Previous</a>
        <a @click="nextPageHandler" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" v-if="pageCount >= 0">Next</a>
      </div>
    </div>
  </div>
</nav>
</template>