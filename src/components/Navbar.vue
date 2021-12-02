<template>
    <div class="container">
      <nav id="navbar">
        <div class="resp-flex">
          <img alt="logo hj" class="logo" @click="goToRoute('/')" :src="require('../assets/logo-hj.png')"/>
          <div v-if="windowWidth < 768" id="burger-menu">
            <label for="check">
              <input type="checkbox" id="check" v-model="open" @click.stop="open = !open"/>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
          <div v-bind:class="{'collapsed': !open && windowWidth < 768}" class="lg-menu">
            <a class="navbar-item" @click="goToRoute('/')">Accueil</a>
            <a class="navbar-item" @click="goToRoute('/formation-et-experiences')">Formation et expériences</a>
            <a class="navbar-item" @click="goToRoute('/qualites')">Qualites</a>
            <a class="navbar-item" @click="goToRoute('/contact')">Contact</a>
            <a class="navbar-item resume" href="./cv_julian-husson.pdf" download>Télécharger mon CV</a>
         </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      open : false,
      windowWidth: window.innerWidth
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 768) {
        this.open = false;
      }
    }
  },
  methods:{
    goToRoute(route){
      this.open = false;
      this.$router.push({ path: route })
    },
  }
}
</script>

<style lang="scss">
.container{
    padding: 5px 0;

  nav#navbar{
    padding: 10px 0;
    width: 100%;

    .resp-flex{
      display: flex;
      justify-content: space-between;

      .logo {
        height: 41px;
        &:hover{
          cursor: pointer;
        }
      }
    }

    #burger-menu{
      label{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap-reverse;
        width: 60px;
        cursor:pointer;
      }

      label span{
        background: #fff;
        border-radius: 2px;
        height: 3px;
        margin: 6px 0;
        transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }

      span:nth-of-type(1){
        width:50%;
      }

      span:nth-of-type(2){
        width:100%;
      }

      span:nth-of-type(3){
        width:75%;
      }

      input[type="checkbox"]{
        display:none;
      }

      input[type="checkbox"]:checked ~ span:nth-of-type(1){
        transform-origin:bottom;
        transform: rotatez(-45deg) translate(-6px, 0px);
      }


      input[type="checkbox"]:checked ~ span:nth-of-type(2){
        transform-origin:top;
        transform:rotatez(45deg)
      }


      input[type="checkbox"]:checked ~ span:nth-of-type(3){
        transform-origin:bottom;
        width:50%;
        transform: translate(-25px, -6px) rotatez(-45deg);
      }
    }

  .lg-menu{
    .router-link-active{
      &::before {
        width: 12px;
        background-color: $font-wbg-color;
      }
    }

    .navbar-item {
      display: block;
      position: relative;
      padding: 3px 0;
      text-decoration: none;
      text-align: center;
      &:not(.resume){
        color: $font-wbg-color;
        &:hover{
          color: $font-wbg-hover-color;
          transition-duration: 300ms;
          cursor: pointer;
        }
      }
      &:hover {
        &::before{
          background-color: $font-wbg-hover-color;
        }
      }
      &::before{
        content: "";
        position: absolute;
        bottom: -.2rem;
        left: 50%;
        height: 2px;
        background-color: $font-wbg-color;
        transform: translateX(-50%);
        transition: width 175ms cubic-bezier(.4,.25,.3,1);
      }
    }
    .resume{
      color: $font-wbg-hover-color;
     cursor: pointer;
    }
  }
  }
}

@media (min-width: 276px) {
  .lg-menu{
    display: block;
    max-height:650px;
    transition:all 500ms ease;
  }
  .collapsed{
    max-height:0px;
    overflow:hidden;
    transition:all 200ms ease;
  }
  .navbar-item {
    margin-bottom: 10px;
    &:hover{
      color: red;
      &::before{
        width: 40%!important;
      }
    }
    &::before{
      width: 0;
    }
  }
}


@media (min-width: 768px) {
#navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .lg-menu{
    display: flex;
  }
  .navbar-item {
    margin-bottom: 0;
    margin-left: 10px;
    &:hover{
      &::before{
        width: 100%!important;
      }
    }
  }
}
}
</style>
