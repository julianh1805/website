<template>
    <div class="container">
      <nav id="navbar">
          <img class="logo" @click="goToHome()" :src="require('../assets/logo-hj.png')"/>
        <span>
          <router-link class="navbar-item" to="/">Accueil</router-link>
          <router-link class="navbar-item" to="/formation">Formation</router-link>
          <router-link class="navbar-item" to="/experiences">Experiences</router-link>
          <router-link class="navbar-item" to="/qualites">Qualites</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
      </span>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods:{
    goToHome(){
      this.$router.push({ path: '/' })}
  }
}
</script>

<style lang="scss">
.container{
    padding: 5px 0;

  nav#navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;

      .logo {
        width: 44px;
        &:hover{
          cursor: pointer;
        }
    }

  span{
    display: flex;

    .navbar-item.router-link-active{
      &::before {
        width: 12px;
        background-color: $font-wbg-color;
      }
    }

    .navbar-item {
      color: $font-wbg-color;
      margin-right: 10px;
      display: block;
      position: relative;
      padding: 3px 0;
      text-decoration: none;
      &:hover{
        color: $font-wbg-hover-color;
        transition-duration: 300ms;
        cursor: pointer;
        &::before{
          width: 100%;
          background-color: $font-wbg-hover-color;
        }
      }
      &::before{
        content: "";
        position: absolute;
        bottom: -.2rem;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: $font-wbg-color;
        transform: translateX(-50%);
        transition: width 175ms cubic-bezier(.4,.25,.3,1);
      }
    }
  }
  }
}
</style>
