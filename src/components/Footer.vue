<template>
  <div id="footer">
    <div id="full-bg" v-if="route.name && route.name != 'PolitiqueConfidentialite'">
      <div class="center ta-c">
        <h2 class="yellow-hook">C'est le moment de faire connaisance. <br>Faites le premier pas</h2>
        <p class="pub">(malgré les apparences, cet espace n'est pas sponsorisé par Ikea)</p>
        <a v-if="this.$route.name === 'Contact'" href="mailto:julian.husson@icloud.com"><button class="draw">Contacter Julian Husson</button></a>
        <button v-else class="draw" @click="this.$router.push({ path: '/contact'})">Contacter Julian Husson</button>
      </div>
    </div>
    <div class="container">
        <div id="rrss">
          <a href="https://www.linkedin.com/in/julian-husson-692067152/" target="_blank"><img alt="logo linkedin" class="logo" :src="require('../assets/linkedin-logo.webp')" /></a>
          <a href="https://github.com/julianh1805" target="_blank"><img alt="logo github" class="logo" :src="require('../assets/github-logo.webp')" /></a>
          <a href="https://www.malt.ch/profile/julianhusson" target="_blank"><img alt="logo malt" class="logo" :src="require('../assets/malt-logo.webp')" /></a>
          <a href="https://codepen.io/Julianh1805" target="_blank"><img alt="logo codepen" class="logo" :src="require('../assets/codepen-logo.webp')" /></a>
        </div>
      <hr class="separator">
      <p class="copyright ta-c"><a @click="goToPrivacy()">Politique de confidentialité</a> • Aucun droit réservé, servez-vous © Julian Husson {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Footer',
  setup() {
    const route = useRoute();
    return { route };
  },
  methods:{
    goToPrivacy(){
      this.$router.push({ path: "/politique-de-confidentialite" })
    },
  }
}
</script>

<style lang="scss" scoped>
#footer{
  margin-top: 90px;
  #full-bg{
    background: $bg-radient;
    -moz-background-clip: text;
    -webkit-animation: intro-gradient 10s infinite ease both;
    -moz-animation: intro-gradient 10s infinite ease both;
    animation: intro-gradient 10s infinite ease both;
    .center{
      width: 80%;
      height: 100%;
      margin: auto;
      display: block;
      padding: 150px 0;
      p{
        color: white;
        margin: 20px 0;
      }
    }
  }
  #rrss{
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 35px auto 0 auto;
    transition-duration: 400ms;
    .logo{
      width: 34px;
      filter: grayscale(1);
      &:hover{
        transition: 400ms;
        filter: grayscale(0);
      }
    }
  }
  hr.separator{
    height: 1.5px;
    background: $separator-color;
    width: 70%;
    margin: 10px auto;
  }
  .copyright{
    font-size: 14px;
    margin-bottom: 15px;
    a:hover{
      cursor: pointer;
    }
  }
}

button{
  box-shadow: inset 0 0 0 2px white;
  color: white;
}

.draw {
  transition: color 0.25s;
  margin-right: 0;

  &::before,
  &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: $font-underlined-color;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: $font-underlined-color;
    border-right-color: $font-underlined-color;
    transition:
        width 0.25s ease-out,
        height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: $font-underlined-color;
    border-left-color: $font-underlined-color;
    transition:
        border-color 0s ease-out 0.5s,
        width 0.25s ease-out 0.5s,
        height 0.25s ease-out 0.75s;
  }
}

@media (min-width: 276px) and (max-width: 859px){
  .draw{
    width: 100%;
  }

}

</style>
