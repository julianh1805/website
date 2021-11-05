<template>
  <div class="diamonds">
  <div class="box" v-for="lang in languages">
    <Box :language="lang"></Box>
  </div>
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
}
</style>
