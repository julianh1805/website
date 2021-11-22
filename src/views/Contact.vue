<template>
  <Form></Form>
  <hr class="lg-separator">
  <Curriculum></Curriculum>
</template>

<script>
import Form from '../components/Form.vue'
import Curriculum from "../components/Curriculum";

export default {
  name: 'Contact',
  components:{
    Curriculum,
    Form
  }
}
</script>
