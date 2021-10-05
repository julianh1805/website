<template>
  <Navbar></Navbar>
  <main>
    <router-view/>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      title : 'Website'
    }
  }
}
</script>
