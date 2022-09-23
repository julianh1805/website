<template>
  <div id="competences">
    <div class="container">
      <div id="content">
        <h1 class="ta-c">
          <a class="r-link animated-underline animated-underline">
            Un passion qui va du front... au back
          </a>
        </h1>
        <p class="description">Au-delà de ma passion pour le front, mon arrivée à EPSI m'a permis de découvrir et apprécier la façon d'affronter les complexités auxquelles on peut se confronter lors du développement d'un back-end. En effet, j'aime le défi. De plus, je suis non seulement passioné par les langages mais aussi par tout ce qui entoure un projet informatique :
          la <b>gestion de projet</b> (en agile ou en V) passant par la <b>conception</b> puis aussi par les <b>tests</b> (surprise !). J'ai aussi un petit coup de foudre pour le monde <b>DevOps</b>, je mets en place tous les jours les pratiques <b>CI/CD</b> (à l'aide d'outils tels que .git, Gitlab et Github Actions).
          Passioné par la creation de site et applications Web dont leur noyau devrait être l'expérience utilisateur, je garde à l'ésprit les notions de <b>responsive design, PWA et First Mobile</b>.
          <br>Hors du champ purement informatique, j'ai des compétences en <b>design graphique</b> (maquettes, création de logo et bannières) ainsi qu'en <b>référencement</b>. Je suis aussi et surtout passioné par les <b>langues</b>. Je parle français
          <transition name="slide" mode="out-in">
            <span :key="langue">
              {{ langue }}
            </span>
          </transition>
        </p>
        </div>
      <section class="section-diamonds">
        <DiamondsSm v-if="windowWidth < 1276"></DiamondsSm>
        <DiamondsLg v-else></DiamondsLg>
      </section>
    </div>
  </div>
</template>
<script>
import DiamondsSm from "./DiamondsSm";
import DiamondsLg from "./DiamondsLg";

export default {
  name: 'Competences',
  components: {
    DiamondsLg,
    DiamondsSm,
  },
  data() {
    return {
      open : false,
      windowWidth: window.innerWidth,
      index: 0,
      langue: null,
      langues: ["but also English.", "y también español.", "i també català.", "e anche italiano."]
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
    this.langue = this.langues[0];
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
    setInterval(() => {
      this.langue = this.langues[this.index];
      this.index = this.index < 3 ? this.index + 1 : 0;
    }, 3000);
  },
}
</script>

<style lang="scss" scoped>
#competences {
  margin-top: 100px;
  h1{
    font-size: 36px;
  }

  .hover {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  .slide-enter-from{
    opacity: 0;
  }

  .slide-enter-to{
    opacity: 1;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-leave-active {
    opacity: 0;
  }
}

@media (min-width: 1276px) {
  .container {
    display: flex;
    .section-diamonds{
      width: 100%;
    }
    #content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      animation-duration: 2s;
      animation-name: make-content-appear;
    }
  }
}

@keyframes make-content-appear {
  0% { opacity: 0; position: relative; top: -100px; }
  40% { opacity: 0; position: relative; top: -60px;}
  80% { opacity: 0.8;}
  99% { position: relative; top: 0;}
  100% { opacity: 1; position: initial; }
}

</style>
