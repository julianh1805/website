<template>
  <div id="qualites">
    <div class="container">
      <div class="section">
        <h3 class="title">Mes qualités et mes défauts</h3>
        <hr class="sm-separator">
        <q class="content" cite="https://www.huxley.net/bnw/four.html">
          Je ne serai pas modeste. Humble tant qu'on voudra, mais pas modeste. La modestie est la vertu des tièdes.
        </q>
        <cite class="content"> Jean-Paul Sartre</cite>
      </div>
      <div class="grid">
        <div class="qlte q1">
          <img :src="require('../assets/ambition-determine-icon.png')"/>
          <h4>Ambitieux et determiné</h4>
          <p>Les rêves sont comme les buts. C'est bien d'en vouloir, mais il faut se les procurer</p>
        </div>
        <div class="qlte q2">
          <img :src="require('../assets/force-proposition-icon.png')"/>
          <h4>Fort de proposition</h4>
          <p>J'aime bien découvrir, apprendre, partager et appliquer. Dans cet ordre</p>
        </div>
        <div class="qlte q3">
          <img :src="require('../assets/teamwork-icon.png')"/>
          <h4>Esprit d'équipe</h4>
          <p>Malgré que je sois un loup solitaire, je ne suis rien sans les personnes qui m'entourent</p>
        </div>
        <div class="qlte q4">
          <img :src="require('../assets/overwork-icon.png')"/>
          <h4>(Trop) perfectioniste</h4>
          <p>A force de vouloir toucher de trop près les étoiles, on risque de s'aveugler</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qualites',
}
</script>

<style lang="scss">
#qualites{
     .container{
       .grid{
         width: 100%;
         margin: 0 auto;
         display: grid;
         grid-gap: 4rem;
         .qlte{
           text-align: center;
           padding: 1em;
           border-radius: 2px;
           transition-duration: 700ms;
           h4{
             color: $font-main-title-color;
             font-size: 18px;
             margin: 8px 0;
           }
           img{
             width: 84px;
           }
           + .q3 img{
             width: 83px;
           }
           &:hover{
             transition: 700ms;
             box-shadow: 10px 5px 70px rgba(34, 47, 114, 0.2);
           }
         }
       }
     }
}
@media (min-width: 276px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 576px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
