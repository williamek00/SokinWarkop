<script >
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/Login.vue'
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
    components:{
        Login,
        Navbar,
        Footer
    }
}
</script>

<template>
   <Navbar/>
   
  <RouterView/>

  <Footer/>
</template>

