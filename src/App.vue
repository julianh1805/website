<template>
  <header>
    <Navbar></Navbar>
  </header>
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

<style lang="scss">
header{
  background: $bg-radient;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
</style>
