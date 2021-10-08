<template>
  <Etudes></Etudes>
  <hr class="lg-separator">
  <Timeline></Timeline>
</template>

<script>
import Etudes from '@/components/Etudes.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Formation',
  components:{
    Etudes,
    Timeline
  }
}
</script>
