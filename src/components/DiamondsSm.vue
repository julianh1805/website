<template>
  <div class="diamonds">
    <Box v-for="(lang, index) in languages" :language="lang"></Box>
  </div>
</template>

<script>
import Box from "./Box";
export default {
  name: "DiamondsSm",
  components: {Box},
  data(){
    return {
      languages: [],
    }
  },
  beforeMount() {
    this.languages = this.$languages;
  }
}
</script>

<style lang="scss" scoped>

.diamonds{
  padding-top: 26px;
  display: grid;
  grid-gap: 6px;
}
@media (min-width: 276px) {

  .diamonds {
    grid-template-columns: repeat(3, 1fr);
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
  @for $i from 1 through 16 {
    @keyframes appear-from-top-#{$i} {
      0% { position: relative; top: -100px*$i; }
      99% { position: relative; top: 0px;}
      100% { position: initial; }
    }

    .box:nth-child(#{$i}) {
      animation-duration: 1200ms;
      animation-name: appear-from-top-#{$i};
    }
  }
}

@media (min-width: 1024px) {
  .diamonds {
    grid-template-columns: repeat(6, 1fr);
  }
}

</style>
