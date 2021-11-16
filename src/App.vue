<template>
  <div v-if="access">
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
  </div>
  <div v-if="!access" class="access">
    <div class="template">
    <h2>Site en développement</h2>
    <span>Introduisez le mot de passe :</span>
    <input @keyup="verifyPassword">
    </div>
  </div>
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
      title : 'Website',
      access: false,
    }
  },
  beforeMount(){
    if(localStorage.getItem("access") === "yes"){
      this.access = true;
    }
  },
  methods: {
    verifyPassword(input){
      if(input.target.value === 'vox'){
        this.access = true;
        localStorage.setItem("access", "yes")
      }
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

.access{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .template{
    text-align: center;
    h2{
      font-size: 32px;
    }
  }

  span{
    display: block;
    text-align: center;
  }

  input{
    margin-top: 8px;
    border: 2px solid $main-color;
    border-radius: 4px;
  }
}
</style>
