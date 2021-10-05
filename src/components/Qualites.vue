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
          <img :src="require('../assets/teamwork-icon.png')"/>
          <h4>Lorem ipsum lorem</h4>
          <p>Hola que tal estas yo bien hehe toma ya que bueno tio</p>
        </div>
        <div class="qlte q2">
          <img :src="require('../assets/teamwork-icon.png')"/>
          <h4>Lorem ipsum lorem</h4>
          <p>Hola que tal estas yo bien hehe toma ya que bueno tio</p>
        </div>
        <div class="qlte q3">
          <img :src="require('../assets/teamwork-icon.png')"/>
          <h4>Lorem ipsum lorem</h4>
          <p>Hola que tal estas yo bien hehe toma ya que bueno tio</p>
        </div>
        <div class="qlte q4">
          <img :src="require('../assets/teamwork-icon.png')"/>
          <h4>Lorem ipsum lorem</h4>
          <p>Hola que tal estas yo bien hehe toma ya que bueno tio</p>
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
         grid-template-columns: repeat(4, 1fr);
         .qlte{
           text-align: center;
           padding: 1em;
           border-radius: 2px;
           h4{
             margin: 8px 0;
           }
           img{
             width: 84px;
           }
           &:hover{
             transition: 100ms;
             box-shadow: 10px 5px 70px rgba(34, 47, 114, 0.2);
           }
         }
       }
     }
   }
</style>
