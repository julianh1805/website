<template>
  <div class="box">
  <div class="box-face" v-bind:class="{ 'dark-highlight' : language.highlight}">
    <div class="box-text">
      <i v-if="language.typeLogo === 'i'" v-bind:class="language.logo"></i>
      <img v-if="language.typeLogo === 'img'" :src="language.logo" alt="">
    </div>
  </div>
    <div class="box-back">
      <div class="box-back-text">
    <div class="tooltip">
      <span>{{ language.title }}</span>
    </div>
    <div class="box-text">
      <i class="fa fa-star" v-for="star in language.oneStar"></i>
      <i class="fas fa-star-half-alt" v-for="star in language.halfStar"></i>
      <i class="far fa-star" v-for="star in language.emptyStar"></i>
    </div>
      </div>
  </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Box",
  props: {
    language: null
  },
  methods: {
    resizeBoxes(){
      var box_sel = $('.box');
      var box_face_sel = $('.box-face');
      var box_width = box_sel.width();
      box_sel.css({'height':box_width+'px'});
      box_face_sel.css({'width':box_width+'px'});
      box_face_sel.css({'height':box_width+'px'});
    },
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
.box {
  position: relative;
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

.dark-highlight {
  background-color: #323232!important;
  border: 1px solid #323232!important;
}

.box-face{
  position: relative;
  left: 0;
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
  width: 100%;
  height: 100%;
  background-color: #dedede;
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
@media (min-width: 276px) {
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
}

@media (min-width: 624px) {
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

@media (min-width: 1024px) and (max-width: 1275px){
  .box-text img{
    max-width: 5vw;
  }
  .box-face .box-text{
    font-size: 5vw;
  }
}

@media (min-width: 1276px) {
  .box {
    width: 100px;
    height: 100px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    margin: 25px;
    cursor: pointer;
  }
  .box-text {
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    -moz-transform: rotate(225deg);
    transform: rotate(225deg);
  }
  .box-back-text{
    transform: rotate(45deg);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
    left: -5px;
  }
  .box-face, .box-back{
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .box-text img{
    width: 28px;
  }
  .box-face .box-text{
    font-size: 28px;
  }
}
</style>
