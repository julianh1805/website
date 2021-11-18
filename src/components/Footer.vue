<template>
  <div id="footer">
    <div id="full-bg">
      <div class="center">
        <h4 class="hook yellow-hook">C'est le moment de faire connaisance. <br>Faites le premier pas</h4>
        <p class="pub">(malgré les apparences, cet espace n'est pas sponsorisé par Ikea)</p>
        <button class="draw">Contacter Julian Husson</button>
      </div>
    </div>
    <div class="container">
        <div id="rrss">
          <a href="https://linkedin.com" target="_blank"><img class="logo" :src="require('../assets/linkedin-logo.png')" /></a>
          <a href="https://linkedin.com" target="_blank"><img class="logo" :src="require('../assets/github-logo.png')" /></a>
          <a href="https://linkedin.com" target="_blank"><img class="logo" :src="require('../assets/malt-logo.png')" /></a>
          <a href="https://linkedin.com" target="_blank"><img class="logo" :src="require('../assets/instagram-logo.png')" /></a>
        </div>
      <hr class="separator">
      <p class="copyright">Aucun droit réservé, servez-vous © Julian Husson {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
#footer{
  margin-top: 90px;
  #full-bg{
    background: $bg-radient;
    -moz-background-clip: text;
    -webkit-animation: intro-gradient 10s infinite ease both;
    -moz-animation: intro-gradient 10s infinite ease both;
    animation: intro-gradient 10s infinite ease both;
    .center{
      width: 80%;
      height: 100%;
      margin: auto;
      display: block;
      padding: 150px 0;
      text-align: center;
      p{
        color: white;
        margin: 20px 0;
      }
    }
  }
  #rrss{
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 35px auto 0 auto;
    transition-duration: 400ms;
    .logo{
      width: 34px;
      filter: grayscale(1);
      &:hover{
        transition: 400ms;
        filter: grayscale(0);
      }
    }
  }
  hr.separator{
    height: 1.5px;
    background: $separator-color;
    width: 70%;
    margin: 10px auto;
  }
  .copyright{
    font-size: 14px;
    margin-bottom: 15px;
    text-align: center;
  }
}
@-webkit-keyframes intro-gradient {
  0%{background-position:0% 4%}
  50%{background-position:100% 97%}
  100%{background-position:0% 4%}
}
@-moz-keyframes intro-gradient {
  0%{background-position:0% 4%}
  50%{background-position:100% 97%}
  100%{background-position:0% 4%}
}
@keyframes intro-gradient {
  0%{background-position:0% 4%}
  50%{background-position:100% 97%}
  100%{background-position:0% 4%}
}

button{
  box-shadow: inset 0 0 0 2px white;
  color: white;
}

.draw {
  transition: color 0.25s;

  &::before,
  &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: $font-underlined-color;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: $font-underlined-color;
    border-right-color: $font-underlined-color;
    transition:
        width 0.25s ease-out,
        height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: $font-underlined-color;
    border-left-color: $font-underlined-color;
    transition:
        border-color 0s ease-out 0.5s,
        width 0.25s ease-out 0.5s,
        height 0.25s ease-out 0.75s;
  }
}
</style>
