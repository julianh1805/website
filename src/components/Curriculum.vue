<template>
  <div id="curriculum">
    <div class="container">
      <div class="section">
        <h2 class="title">CV : édition limitée</h2>
        <hr class="sm-separator">
      </div>
      <div class="content">
        <img alt="capture cv" :src="require('../assets/cv.png')">
        <div>
          <p>Pour les plus traditionnels, vous pouvez obtenir et partager mon <i>Curriculum Vitae</i> en cliquant sur le bouton ci-dessous.<br>Attention ! Il reste que *** unités.</p>
          <div class="cta center">
            <a href="./cv_julian-husson.pdf" download>
            <button class="draw-main trans-main to-home">Telecharger mon CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Curriculum',
}
</script>

<style lang="scss" scoped>
.hover {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
#curriculum {
  margin-top: 100px;
  .content{
    max-width: 800px;
    margin: auto;
    display: flex;
    p{
      text-align: center;
    }
    .to-home{
      width: 100%;
      box-shadow: inset 0 0 0 2px $main-color;
      color: white;
      background: $main-color;
    }
  }
}

@media (min-width: 276px) {
  .content{
    flex-direction: column;
    img{
      max-width: 250px;
      margin: 0 auto 20px auto;
    }
  }
}

@media (min-width: 614px) {
  .content{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
      max-width: 250px;
      margin: initial;
    }
    div {
      padding-left: 20px;
    }
  }
}

</style>
