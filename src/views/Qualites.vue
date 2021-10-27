<template>
  <CompetencesMobile v-if="windowWidth < 640"></CompetencesMobile>
  <Competences v-else></Competences>
</template>

<script>
import CompetencesMobile from '@/components/CompetencesMobile.vue'
import Competences from "../components/Competences";
export default {
  name: 'Qualites',
  components: {
    Competences,
    CompetencesMobile
  },
  data() {
    return {
      open : false,
      windowWidth: window.innerWidth
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  },
}
</script>
