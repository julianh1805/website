<template>
  <div id="presentation">
    <div class="container">
      <div class="grid">
        <div class="section">
          <img class="corner-tl" :src="require('../assets/corner-tl.png')" />
          <div class="photo-profil">
            <img :src="require('../assets/profil.png')" />
          </div>
          <img class="corner-br" :src="require('../assets/corner-br.png')" />
        </div>
        <div class="section">
          <h2>
            <a class="r-link animated-underline animated-underline">
              Développeur full-stack junior en région nantaise (Bretagne). "Mes lignes de code ne définissent pas qui je suis"
            </a>
          </h2>
          <p class="description">Après plus de 10 ans passés en Espagne et passionné de la technologie et de l'informatique depuis tout jeune, j'ai décidé de
            revenir en France pour poursuivre mes études dans le but de devenir développeur full-stack.
          </p>
          <br>
          <p class="description">
            Après plus de 10 ans passés en Espagne et passionné de la technologie et de l'informatique depuis tout jeune, j'ai décidé de
            France pour poursuivre mes études dans le but de devenir développeur full-stack, vraiment full full.
          </p>
          <div class="cta">
            <button class="draw-main trans-main to-formation" @click="click">Visiter mon palmarès</button>
            <button class="draw-main trans-main to-contact" @click="click">Me contacter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  methods: {
    click(){
      console.log("HEHEHE")
    }
  }
}
</script>

<style lang="scss">

#presentation{
  margin-top: 8rem;
  h2, h2 a{
    font-size: 36px;
  }
  .grid {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(1, 1fr);
    .section{
      .corner-tl{
        position: absolute;
        width: 50px;
        z-index: 1;
      }
      .corner-br{
        position: relative;
        top: -3px;
        width: 50px;
        float: right;
      }
      .photo-profil{
        width: 90%;
        margin: auto;
        position: relative;
        top: 28px;
        img{
          width: 100%;
        }
      }
      .description{
        font-size: 18px;
      }
    }
    .cta{
      margin-top: $spacement-between;
      .to-formation{
        box-shadow: inset 0 0 0 2px $main-color;
        color: white;
        background: $main-color;
      }
      .to-contact{
        box-shadow: inset 0 0 0 2px $main-color;
        color: $main-color;
        background: white;
      }
    }
  }
}

@media (min-width: 700px) {
  #presentation .grid { grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 4fr); }
}
</style>
