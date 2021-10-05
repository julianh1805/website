<template>
  <Presentation></Presentation>
  <hr class="lg-separator">
  <Qualites></Qualites>
  <hr class="lg-separator">
</template>

<script>
import Presentation from '@/components/Presentation.vue'
import Qualites from '@/components/Qualites.vue'

export default {
  name: 'Home',
  components:{
    Presentation,
    Qualites
  }
}
</script>
