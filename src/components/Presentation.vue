<template>
  <div id="presentation">
    <div class="container">
      <div class="presentation">
        <div class="presentation-row">
          <div class="anim">
            <img alt="lucarne top gauche" class="corner-tl" :src="require('../assets/corner-tl.webp')" />
            <img alt="photo de profil" class="photo-profil" :src="require('../assets/profil.webp')" />
            <img alt="lucarne inférieur droite" class="corner-br" :src="require('../assets/corner-br.webp')" />
          </div>
        </div>
        <div class="presentation-row">
          <h1>
            <a class="r-link animated-underline animated-underline">
              Développeur full stack en région nantaise.<br>"Mes lignes de code définissent qui je suis"
            </a>
          </h1>
          <p class="description">
            Développeur Angular/Java <b>passionné</b> par le développement d'applications Web, j'ai aussi une appétence pour tout ce qui entoure les projets informatiques :
            de la gestion de projet, passant par les tests jusqu'au déploiement.
          </p>
          <br>
          <p class="description">
            Après plus de 10 ans passés en Espagne j'ai décidé de revenir en France pour poursuivre mes études dans le but de devenir développeur Web.
            Grâce à l'obtention d'un titre en tant que "Chef de projet digital" en 2020 qui m'a permis de découvir les différents métiers du Web et en ayant appris le développement Web de façon totalement <b>autodidacte</b> (cours sur Udemy, Youtube, projets personnels), j'ai décidé de me spécialiser dans ce domaine au sein de EPSI, établissement où j'ai obtenu mon titre d'ingenieur expert en informatique et systèmes d'information en août 2022. Aujourd'hui j'évolue en tant que développeur full stack au sein de <a href="https://biogasview.com" target="_blank">Biogasview</a>. Ce site Web vous permettra de savoir plus sur mon parcours ainsi que sur ma <b>personnalité</b>.
          </p>
          <div class="cta">
            <button class="draw-main trans-main to-formation" @click="goToRoute('formation-et-experiences')">Découvrir mon palmarès</button>
            <button class="draw-main trans-main to-contact" @click="goToRoute('contact')">Me contacter</button>
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
      goToRoute(route){
        this.$router.push({ path: "/" + route});
      }
  }
}
</script>

<style lang="scss">

#presentation{
  margin-top: 8rem;
  h1, h1 a{
    font-size: 36px;
  }
  .presentation {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(1, 1fr);
    .presentation-row{
      .anim{
        width: 90%;
        margin: auto auto 35px auto;
        position: relative;
        top: 28px;
        .corner-tl{
          position: absolute;
          transition: transform 0.8s;
          z-index: 1;
        }
        .photo-profil{
          width: 90%;
          position: relative;
        }
        .corner-br{
          position: absolute;
          transition: transform 0.8s;
        }
      }
      .description{
        font-size: 18px;
        a{
          color: $main-color
        }
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

@media (min-width: 276px) {
   .corner-tl{
     width: 42px;
     left: -5%;
     top: -5%;
   }

  .corner-br{
    width: 42px;
    bottom: -9%;
    right: -6%;
  }

  .anim:hover .corner-br{
    transform: translate(10px, 10px);
  }

  .anim:hover .corner-tl{
    transform: translate(-10px, -10px);
  }
}

  @media (min-width: 601px) {
  #presentation .presentation {
    grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 4fr);
  }
}

</style>
