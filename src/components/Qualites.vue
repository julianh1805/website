<template>
  <div id="qualites">
    <div class="container">
      <div class="section">
        <h2 class="title">Mes qualités et mes défauts</h2>
        <hr class="sm-separator">
        <q class="content" cite="https://www.huxley.net/bnw/four.html">
          Je ne serai pas modeste. Humble tant qu'on voudra, mais pas modeste. La modestie est la vertu des tièdes.
        </q>
        <cite class="content"> Jean-Paul Sartre</cite>
      </div>
      <div class="grid">
        <div class="qlte" :class="'q' + (index + 1)" v-for="(q, index) in qualites">
          <img v-bind:alt="'icon ' + q.titre" :src="q.img"/>
          <h3>{{q.titre}}</h3>
          <p>{{q.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qualites',
  data(){
    return {
      qualites: [
        {img: require('../assets/ambition-determine-icon.png'), titre: 'Ambitieux et determiné', description: 'Les rêves sont comme les buts. C\'est bien d\'en vouloir, mais il faut se les procurer'},
        {img: require('../assets/force-proposition-icon.png'), titre: 'Fort de proposition', description: 'J\'aime bien découvrir, apprendre, appliquer et partager. Dans cet ordre'},
        {img: require('../assets/teamwork-icon.png'), titre: 'Esprit d\'équipe', description: 'Même si je suis un loup solitaire, je ne suis rien sans les personnes qui m\'entourent'},
        {img: require('../assets/overwork-icon.png'), titre: '(Trop) perfectioniste', description: 'A force de vouloir observer de trop près les étoiles, on risque de s\'aveugler'}
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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
           h3{
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
