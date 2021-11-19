<template>
  <div id="not-found">
    <div class="container centered">
      <img :src="require('../assets/khaby-lame.gif')" alt="this slowpoke moves"  width="250" />
      <div class="error">
        <div class="error-title">
          <h4><span class="blue-hook">404</span>
            Page non trouvée</h4>
        </div>
        <div class="error-message">
          <p class="ta-c">La page que vous avez tapé est inexistante ou quelqu'un vous a envoyé le mauvais lien ! Et oui, depuis la première "mise en prod", aucune route ou/et aucune page a été supprimée ou modifiée. <strong>Cliquez sur le bouton dessous pour revivre l'expérience.</strong></p>
          <div class="cta center">
            <button class="draw-main trans-main to-home" @click="goToHome()">Revenir à l'accueil</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
  methods:{
    goToHome(){
      this.$router.push({ path: '/' })
    },
  }
}
</script>

<style lang="scss" scoped>

#not-found {
  margin-top: 8rem;
    .error{
      padding-bottom: 40px;
      .error-title{
        h4{
          font-size: 32px;
          font-weight: 600;
          text-align: center;
          color: $font-main-title-color;
          span{
            display: block;
            margin-bottom: -40px;
          }
        }
      }
      .error-message{
        padding-top: 30px;
        p{
          padding-bottom: 20px;
        }
        .to-home{
          box-shadow: inset 0 0 0 2px $main-color;
          color: white;
          background: $main-color;
        }
      }
    }
}

@media (min-width: 276px){
  img{
    display: none;
  }
  span{
    font-size: 8rem;
  }
}

@media (min-width: 756px){
  img{
    display: initial;
    margin-right: 20px;
  }
}

</style>
