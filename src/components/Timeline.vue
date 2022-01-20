<template>
  <div id="timeline">
    <div class="container">
      <div class="section-main">
        <h2>
          <a class="r-link animated-underline animated-underline">Timeline de mon progrès professionel</a>
        </h2>
      </div>
      <div class="anim-container">
        <div class="anim-timeline">
          <div class="line"></div>
          <div class="anim-section" v-for="(exp,index) in experiences">
            <div class="bead">
              <img v-bind:alt="'logo ' + exp.entreprise" :src="exp.image" />
            </div>
            <div class="content">
              <p class="date">{{ exp.date }}</p>
              <h3>{{ exp.poste }} - {{ exp.entreprise }}</h3>
              <p v-html="exp.description"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="cta center">
        <button class="draw-main trans-main to-formation" @click="goToRoute('qualites')">Explorer mes qualités</button>
        <button class="draw-main trans-main to-contact" @click="goToRoute('contact')">Me contacter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      experiences : [
        { id: "bgw", image: require('../assets/biogasview-logo.webp'), entreprise: 'Biogasview', date: '2019 - présent (alternance)', poste: 'Développeur full stack', description: "Evolution de l'ERP (Angular/Java)<br>Participer a l'amélioration de l'expérience utilisateur de la plateforme Web<br>Assister les utilisateurs (maintenance corrective)<br>Refonte du site internet (Wordpress)"},
        { id: "bgw", image: require('../assets/malt-logo.webp'), entreprise: 'Malt', date: '2018 - 2019', poste: 'Développeur Web freelance', description: "Dans le but de m'améliorer et de m'aventurer dans le monde professionnel, j'ai effectué des missions en freelance, principalement sur la plateforme Malt.<br>Développement de sites Wordpress pour entreprises, ainsi que portfolios et blogs pour particuliers."},
        { id: "bgw", image: require('../assets/iraiser-logo.webp'), entreprise: 'iRaiser', date: '2018', poste: 'Support technique et recette informatique (stage)', description: "Stage de support technique et recette informatique consistant à:<br>Assister les utilisateurs dans l'utilisation d'un CMS<br>Effectuer les paramétrages<br>Recetter les applications"},
      ],
    }
  },
  methods: {
    goToRoute(route){
      this.$router.push({ path: "/" + route});
    }
  },
  mounted(){
    function qs(selector, all = false) {
      return all
          ? document.querySelectorAll(selector)
          : document.querySelector(selector);
    }

    const sections = qs(".anim-section", true);
    const timeline = qs(".anim-timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect(); //     console.log(rect);
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);

  }
}
</script>

<style lang="scss" scoped>
#timeline {
  margin-top: 8rem;

  .section-main{
   padding-bottom: 25px;
    h2{
      font-size: 36px;
    }
  }

  .cta{
    margin: auto;
    flex-direction: initial;
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

@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.anim-container {
  padding: 0 2rem 2rem 2rem;
  margin: 0 auto;
  max-width: 80rem;
}

.anim-timeline {
  position: relative;
  min-height: 15rem;
}

.line {
  background-color: $main-color;
  position: absolute;
  z-index: 2;
  width: 2px;
  top: -5rem;
  bottom: -5rem;
  display: none;
}

.line::before,
.line::after {
  background-color: $main-color;
  position: absolute;
  display: block;
  content: "";
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.line::after {
  bottom: 0;
}

.anim-section {
  display: flex;
  z-index: 2;
  opacity: 0;
  transform: translateX(-100%);
  transition: 600ms ease;
  position: relative;
  margin: 5rem 0;
  padding: 1rem;
  background-color: transparent;
  min-height: 13rem;
  border-radius: 0;

  .date {
    color: $main-color;
    font-weight: 400;
  }

  &:nth-child(even) {
    text-align: right;
  }
}

.bead {
  display: block;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  background-color: $font-wbg-color;

  img{
    width: 100%;
    border-radius: 50%;
  }
}

.show-me:nth-child(n) {
  transform: none;
  opacity: 1;
}

h1 {
  font-weight: 400;
  letter-spacing: 1px;
}

@media (min-width: 276px) and (max-width: 967px){
  .line{
    left: calc(-4% - 1px);
  }
  .anim-section{
    align-items: start;
    padding-right: 0;
    width: 100%;

    .content{
      width: 100%;
      text-align: left;
      padding-left: 12px;

    }
  }
}

@media (min-width: 968px) {
  .line{
    left: calc(50% - 1px);
  }

  .anim-section{
    padding: 1rem;

    .content{
      width: calc(48% - 2rem);
    }
  }

  .bead{
    position: absolute;
    left: 50%;
    top: 29%;
    transform: translateX(-50%);
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
   }

}
</style>
