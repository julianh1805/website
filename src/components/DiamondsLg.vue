<template>
  <section class="section">
    <div class="wall">
      <div class="v-boxes first">
        <Box :language="languages[0]"></Box>
      </div>
      <div class="v-boxes second">
        <Box :language="languages[1]"></Box>
        <Box :language="languages[2]"></Box>
      </div>
      <div class="v-boxes third">
        <Box :language="languages[3]"></Box>
        <Box :language="languages[4]"></Box>
        <Box :language="languages[5]"></Box>
      </div>
      <div class="v-boxes forth">
        <Box :language="languages[6]"></Box>
        <Box :language="languages[7]"></Box>
        <Box :language="languages[8]"></Box>
        <Box :language="languages[9]"></Box>
      </div>
      <div class="v-boxes five">
        <Box :language="languages[3]"></Box>
        <Box :language="languages[4]"></Box>
        <Box :language="languages[5]"></Box>
      </div>
      <div class="v-boxes six-pack">
        <Box :language="languages[1]"></Box>
        <Box :language="languages[2]"></Box>
      </div>
      <div class="v-boxes seven-up">
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
.third, .five {
  margin-top: 75px;
}
.second, .six-pack {
  margin-top: 150px;
}
.first, .seven-up {
  margin-top: 225px;
}

.first{
  animation-duration: 1200ms;
  animation-name: left-join-4;
}

.second{
  animation-duration: 1200ms;
  animation-name: left-join-3;
}

.third{
  animation-duration: 1200ms;
  animation-name: left-join-2;
}

.forth{
  animation-duration: 1200ms;
  animation-name: left-join-1;
}

.five{
  animation-duration: 1200ms;
  animation-name: right-join-1;
}

.six-pack{
  animation-duration: 1200ms;
  animation-name: right-join-2;
}

.seven-up{
  animation-duration: 1200ms;
  animation-name: right-join-3;
}

@keyframes make-content-appear {
  0% { position: relative; left: -100px; }
  99% { position: relative; left: 0px;}
  100% { position: initial; }
}

@for $i from 1 through 4 {
  @keyframes left-join-#{$i} {
    0% { position: relative; left: -100px*$i; }
    99% { position: relative; left: 0px;}
    100% { position: initial; }
  }
}

@for $i from 1 through 3 {
  @keyframes right-join-#{$i} {
    0% { position: relative; left: 100px*$i; }
    99% { position: relative; left: 0px;}
    100% { position: initial; }
  }
}

</style>
