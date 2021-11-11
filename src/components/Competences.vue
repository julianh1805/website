<template>
  <div id="competences">
    <div class="container">
      <div id="content">
        <h2>
          <a class="r-link animated-underline animated-underline">
            Un passion qui va du front... au back
          </a>
        </h2>
        <p class="description">Malgré ma passion pour le front, mon arrivé à EPSI m'a permis de découvrir et apprécier le façon d'affronter les complexités auxquelles on peut se confrotter lors du développement un back-end. J'aime le défi. De plus, je suis non seulement passioné par les langages mais aussi par tout ce qui entoure un projet informatique :
          la gestion de projet (en agile ou en V) passant par la conception puis aussi par les tests (surprise !). J'ai ainsi un petit coup de foudre pour le monde Ops, je mets en place tous les jours les pratiques CI/CD (à l'aide d'outils tels Gitlab et Github-CircleCI) et je désire un jour travaillé Kubernetes sur un projet plus poussé malgré sa complexité.
          Passioné par la creation des sites/applications dont leur noyau devrait être expèrience utilisateur, j'ai très présent les notions de responsive design, PWA et First Mobile.
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
  h2{
    text-align: center;
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
    }
  }
}

</style>
