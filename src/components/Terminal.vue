<template>
  <div id="terminal">
    <div class="container">
      <div class="section">
        <h2 class="title">La sécurité avant tout</h2>
        <hr class="sm-separator">
        <p>Comme disait ma mère dans sa langue natale : "Abrigate bien, Juli". C'est pour cela que l'ensemble des commandes lancées sur le Terminal ont été exectuées en SSH.</p>
      </div>
      <div class="terminal">
        <div class="terminal_task-bar">
          <div class="terminal-buttons">
          <div class="terminal_circle terminal_circle-red"><img alt="icon close" :src="require('../assets/close-icon.png')"/></div>
          <div class="terminal_circle terminal_circle-yellow"><img alt="icon minus" :src="require('../assets/minus-icon.png')"/></div>
          <div class="terminal_circle terminal_circle-green"><img alt="icon resize" :src="require('../assets/resize-icon.png')"/></div>
          </div>
          <p class="terminal-path">MBP de Julian</p>
        </div>
        <div class="terminal_window">
          <p class="terminal_prompt"><span class="terminal_prompt-typing"><span class="cover cover-show-message"></span>Cet espace est réservé aux développeurs et/où aux geeks</span></p>
          <p class="terminal_prompt terminal_prompt-cd-julianh">$ <span class="terminal_prompt-typing"><span class="cover cover-cd-julianh"></span>cd Julianh1805</span></p>
          <p class="terminal_prompt terminal_prompt-checkout-projets">/Projets</p>
          <p class="terminal_prompt terminal_prompt-cd-project">$ <span class="terminal_prompt-typing"><span class="cover cover-cd-project"></span>cd Projets</span></p>
          <p class="terminal_prompt terminal_prompt-pub">Pour découvir l'ensemble de mes projets n'hésitez pas à visiter mon GitHub : <span class="terminal_window-highlight"><a href="https://github.com/julianh1805">https://github.com/julianh1805/</a></span>
            ou directement <span class="terminal_window-highlight"><a @click="goToContact()">me contacter</a></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terminal',
  methods: {
    goToContact(){
      this.$router.push({ path: "/contact"});
  }
}
}
</script>

<style lang="scss" scoped>

.terminal {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  position: relative;
  margin: 0 auto;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  a:active,
  a:focus,
  a:hover {
    color: #0091eb;
  }

  p{
    color: white;
  }

  .terminal_task-bar {
    height: 2rem;
    padding: 0 .5rem;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    background-color: #efefef;
    display: flex;
    align-items: center;

    .terminal-buttons{
      display: flex;

    .terminal_circle {
      position: relative;
      width: .75rem;
      height: .75rem;
      border-radius: 50%;
      margin-right: 8px;
      display: flex;
      img{
        width: 7px;
        height: 7px;
        margin: auto;
        opacity: 0;
        filter: grayscale(1);
        &:hover{
          transition: 400ms;
          opacity: 1;
        }
      }
    }
    }

    .terminal_circle-red {
      background-color: #fb574e;
    }

    .terminal_circle-yellow {
      background-color: #fbbd2e
    }

    .terminal_circle-green {
      background-color: #51e05d
    }

    .terminal-path{
      text-align: center;
      width: 100%;
      font-size: 13px;
      color: #3d3d3d;
      position: relative;
      left: -28px;
    }
  }

  .terminal_window {
    min-height: 17.5rem;
    padding: 1.5rem;
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    background-color: #000;

    .terminal_window-highlight a{
      color: #51e05d;
      text-decoration: none;
    }

    .terminal_prompt-cd-julianh, .terminal_prompt-checkout-projets, .terminal_prompt-cd-project,, .terminal_prompt-pub{
    opacity: 0
  }

    .terminal_prompt-cd-julianh {
      animation: show-cd-julianh 16s infinite
    }

    .terminal_prompt-checkout-projets {
      animation: show-checkout-projets 16s infinite
    }

    .terminal_prompt-cd-project {
      animation: show-cd-project 16s infinite
    }

    .terminal_prompt-pub {
      animation: show-pub 16s infinite
    }

    .terminal_prompt-typing {
      position: relative
    }

    .terminal_prompt-typing .cover {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      background: #000;
      border-left: 1px solid #fff
    }

    .terminal_prompt-typing .cover-show-message {
      animation: typing-message 16s steps(19, end) infinite
    }

    .terminal_prompt-typing .cover-cd-julianh {
      animation: typing-cd-julianh 16s steps(19, end) infinite
    }

    .terminal_prompt-typing .cover-cd-project {
      animation: typing-cd-project 16s steps(19, end) infinite
    }
  }
}

@media screen and (min-width:30rem) {
  .terminal {
    font-size: 1.25rem;
    line-height: 2rem
  }
}

@media screen and (min-width:60.5rem) {
  .terminal {
    max-width: 60.5rem
  }
}



@media screen and (max-width:30rem) {
  .terminal_task-bar {
    padding-top: .5rem
  }
}

@keyframes typing-message {
  0% {
    width: 100%;
    opacity: 1
  }
  12% {
    width: 0
  }
  15% {
    opacity: 1
  }
  16% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

@keyframes typing-cd-julianh {
  0%,
  25% {
    width: 100%
  }
  100%,
  30% {
    width: 0
  }
  31% {
    opacity: 1
  }
  32% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

@keyframes show-cd-julianh {
  0%,
  20% {
    opacity: 0
  }
  100%,
  24% {
    opacity: 1
  }
}

@keyframes typing-cd-project {
  0%,
  48% {
    width: 100%
  }
  100%,
  53% {
    width: 0
  }
  54% {
    opacity: 1
  }
  55% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

@keyframes show-cd-project {
  0%,
  43% {
    opacity: 0
  }
  100%,
  47% {
    opacity: 1
  }
}

@keyframes show-checkout-projets {
  0%,
  36% {
    opacity: 0
  }
  100%,
  39% {
    opacity: 1
  }
}

@keyframes show-pub {
  0%,
  56% {
    opacity: 0
  }
  100%,
  60% {
    opacity: 1
  }
}



</style>
