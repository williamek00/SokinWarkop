<script>
import { mapActions , mapStores, mapState } from 'pinia';
import { useUserStore } from '../stores/user';
export default {
  data() {
    return {
      aksesToken: false,
    };
  },
  computed:{
    ...mapState(useUserStore,['midtransToken']),
  },
  methods: {
    condition() {
      this.aksesToken = Boolean(localStorage.access_token);
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
    handleSubs() {
      this.getDonate()
    },
    ...mapActions(useUserStore, ['getDonate']),
  },
  mounted() {
    this.condition();
  },
};
</script>

<template>
  <header class="bg-gray-900 text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <h1 class="text-lg font-bold">sokinwarkop.</h1>
      <nav>
        <ul class="flex">
          <li class="ml-4 text-lg font-bold" v-if="aksesToken">
            <a @click.prevent="handleSubs" href="#" class="hover:text-gray-300"
              >donasi NGAB!</a
            >
          </li>
          <li class="ml-4 text-lg font-bold">
            <RouterLink to="/warkop" href="#" class="hover:text-gray-300"
              >warkop.</RouterLink
            >
          </li>
          <li class="ml-4 text-lg font-bold">
            <RouterLink to="/favourite" href="#" class="hover:text-gray-300"
              >OTW!</RouterLink
            >
          </li>
          <li class="ml-4 text-lg font-bold" v-if="!aksesToken">
            <RouterLink to="/login" href="#" class="hover:text-gray-300"
              >login.</RouterLink
            >
          </li>
          <li class="ml-4 text-lg font-bold" v-if="aksesToken">
            <a @click="logout" href="#" class="hover:text-gray-300"
              >logout.</a
            >
          </li>
          
        </ul>
      </nav>
    </div>
  </header>
</template>
