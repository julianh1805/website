<template>
  <section class="section">
    <div class="wall">
      <div class="v-boxes forth">
        <Box :language="languages[0]"></Box>
      </div>
      <div class="v-boxes third">
        <Box :language="languages[1]"></Box>
        <Box :language="languages[2]"></Box>
      </div>
      <div class="v-boxes second">
        <Box :language="languages[3]"></Box>
        <Box :language="languages[4]"></Box>
        <Box :language="languages[5]"></Box>
      </div>
      <div class="v-boxes">
        <Box :language="languages[6]"></Box>
        <Box :language="languages[7]"></Box>
        <Box :language="languages[8]"></Box>
        <Box :language="languages[9]"></Box>
      </div>
      <div class="v-boxes second">
        <Box :language="languages[3]"></Box>
        <Box :language="languages[4]"></Box>
        <Box :language="languages[5]"></Box>
      </div>
      <div class="v-boxes third">
        <Box :language="languages[1]"></Box>
        <Box :language="languages[2]"></Box>
      </div>
      <div class="v-boxes forth">
        <Box :language="languages[0]"></Box>
      </div>
    </div>
  </section>
</template>

<script>
import Box from "./Box";
export default {
  name: "DiamondsLg",
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
.section {
  display: flex;
  justify-content: center;
  padding-left: 75px;
}
.wall {
  display: flex;
}
.v-boxes {
  display: flex;
  flex-direction: column;
  &:not(:first-child){
    margin-left: -75px;
  }
}
.second {
  margin-top: 75px;
}
.third {
  margin-top: 150px;
}
.forth {
  margin-top: 225px;
}

</style>
