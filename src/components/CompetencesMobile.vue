<template>
  <div id="competences">
    <div class="container">
      <h2>
        <a class="r-link animated-underline animated-underline">
          Un passion qui va du front... au back
        </a>
      </h2>
      <section class="section-diamonds">
        <div class="diamonds">
          <div class="box" v-for="lang in languages">
            <div class="box-face" v-bind:class="{ 'dark-highlight' : lang.highlight}">
              <div class="box-text">
                <i v-if="lang.typeLogo === 'i'" v-bind:class="lang.logo"></i>
                <img v-if="lang.typeLogo === 'img'" :src="lang.logo" alt="">
              </div>
            </div>
            <div class="box-back">
              <div class="tooltip">
                <span>{{ lang.title }}</span>
              </div>
              <div class="box-text">
                <i class="fa fa-star" v-for="star in lang.oneStar"></i>
                <i class="fas fa-star-half-alt" v-for="star in lang.halfStar"></i>
                <i class="far fa-star" v-for="star in lang.emptyStar"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'CompetencesMobile',
  data(){
    return {
      languages: [],
    }
  },
  methods: {
    resizeBoxes(){
      var box_sel = $('.box');
      var box_face_sel = $('.box-face');
      var box_width = box_sel.width();
      box_sel.css({'height':box_width+'px'});
      box_face_sel.css({'width':box_width+'px'});
      box_face_sel.css({'height':box_width+'px'});
    }
  },
  beforeMount() {
    this.languages = this.$languages;
  },
  mounted() {
      $('.box').on('touchstart', function(e) {
        $('.box').removeClass('hover');
        e.preventDefault();
        $(this).toggleClass('hover');
      });
    this.resizeBoxes();
    window.onresize = () => {
      this.resizeBoxes();
    }
  }
}
</script>

<style lang="scss" scoped>
.hover {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
#competences{
  margin-top: 100px;
  h2{
    font-size: 36px;
  }
  .section-diamonds{
    .diamonds{
      display: grid;
      grid-gap: 6px;
      .box {
        position: relative;
        width: 100%;
        cursor: pointer;
        &.hover, &:hover{
          &:not(.link) > .box-face, > .box-back {
            transform: rotateX(180deg);
            background-color: transparent!important;
          }
          &:not(.link) > .box-face > .box-text {
            opacity: 0;
          }
          & .tooltip {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      .dark-highlight > .box-text{
        background-color: #323232;
      }

      .dark-highlight{
        border: 1px solid #323232!important;
      }

      .box-face{
        border: 1px solid #dedede;
        position: relative;
        left: 0px;
      }

      .box-face .box-text {
        width: 100%;
        height: 100%;
        svg {
          vertical-align: sub;
        }
      }

      .box-face, .box-back {
        position: absolute;
        top:0;
        z-index:1;
        width: 101%;
        height: 101%;
        background-color: #dedede;
        transform-style: preserver-3d;
        -webkit-transform-style: preserver-3d;
        -moz-transform-style: preserver-3d;
        transition: transform 1s, background-color 0s .3s;
      }
      .box-face .box-text {
        text-align: center;
        color: #bababa;
        transition: opacity 0s linear .3s;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .box-back .box-text {
        text-align: center;
        color: #636363;
        transition: opacity 0s linear .3s;
        transform: rotateX(180deg);
        padding-bottom: 5px;
      }

      .box-back .box-text i {
        -webkit-transform: rotateX(170deg);
        -ms-transform: rotateX(170deg);
        -moz-transform: rotateX(170deg);
        transform: rotateX(170deg);
      }

      .box-back {
        z-index:0;
        background-image: linear-gradient( #fff, #efefef);
        .tooltip{
          transform: rotateX(180deg);
        }
      }

      .box-text img {
        -webkit-filter: grayscale(100%) saturate(0);
        filter: grayscale(100%) saturate(0);
        opacity: .5;
      }

      .tooltip {
        margin: auto;
        visibility: hidden;
        opacity: 0;
        width: 80%;
        color: #000;
        text-align: center;
        border-top: 1px solid rgba(0,0,0,.8);
        padding: 5px 0;
        z-index: 1000;
        transition: visibility 0s linear .3s, opacity 1s linear .3s;
      }

      .tooltip:after {
        position: absolute;
        top: -5px;
        content:' ';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
      }
    }
  }
}
@media (min-width: 276px) {
  .diamonds {
    grid-template-columns: repeat(3, 1fr);
  }
  .tooltip{
    font-size: 12px;
  }
  .box-back .box-text {
    font-size: 11px;
  }
  .tooltip:after {
    position: absolute;
    top: -5px;
    left: 45%;
  }
  .box-text img{
    max-width: 9vw;
  }
  .box-face .box-text{
    font-size: 9vw;
  }
}

@media (min-width: 476px) {
  .diamonds {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 624px) {
  .diamonds {
    grid-template-columns: repeat(5, 1fr);
  }
  .box-text img{
    max-width: 6vw;
  }
  .box-face .box-text{
    font-size: 6vw;
  }
}

@media (min-width: 774px) {
  .tooltip{
    font-size: 14px;
  }
  .box-back .box-text {
    font-size: 13px;
  }
  .tooltip:after {
    position: absolute;
    top: -5px;
    left: 47%;
  }
}
</style>
