<template>
  <Presentation></Presentation>
  <hr class="lg-separator">
  <Qualites></Qualites>
  <hr class="lg-separator">
  <Terminal></Terminal>
</template>

<script>
import Presentation from '@/components/Presentation.vue'
import Qualites from '@/components/Qualites.vue'
import Terminal from '@/components/Terminal.vue'

export default {
  name: 'Home',
  components:{
    Presentation,
    Qualites,
    Terminal
  }
}
</script>
