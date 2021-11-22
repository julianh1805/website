<template>
  <div id="competences">
    <div class="container">
      <div id="content">
        <h1 class="ta-c">
          <a class="r-link animated-underline animated-underline">
            Un passion qui va du front... au back
          </a>
        </h1>
        <p class="description">Malgré ma passion pour le front, mon arrivée à EPSI m'a permis de découvrir et apprécier la façon d'affronter les complexités auxquelles on peut se confronter lors du développement d'un back-end. J'aime le défi. De plus, je suis non seulement passioné par les langages mais aussi par tout ce qui entoure un projet informatique :
          la gestion de projet (en agile ou en V) passant par la conception puis aussi par les tests (surprise !). J'ai aussi un petit coup de foudre pour le monde DevOps, je mets en place tous les jours les pratiques CI/CD (à l'aide d'outils tels Gitlab et CircleCI sur Github).
          Passioné par la creation des sites/applications dont leur noyau devrait être l'expérience utilisateur, j'ai très présent les notions de responsive design, PWA et First Mobile.
          <br>Hors informatique, j'ai des compétences en design graphique (maquettes, création de logo et bannières), en référencement ainsi qu'un gôut pour les langues. Je parle français, espagnol, catalan et anglais courament et une compétence avancée en italien !
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
      windowWidth: window.innerWidth
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  },
}
</script>

<style lang="scss" scoped>
.hover {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
#competences {
  margin-top: 100px;
  h1{
    font-size: 36px;
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
  99% { position: relative; top: 0px;}
  100% { opacity: 1; position: initial; }
}

</style>
