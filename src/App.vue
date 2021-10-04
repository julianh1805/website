<template>
  <Navbar></Navbar>
  <main>
    <router-view/>
  </main>
  <footer>
    <p>Footer</p>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data() {
    return {
      title : 'Website'
    }
  }
}
</script>
